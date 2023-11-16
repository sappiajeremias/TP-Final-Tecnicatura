<?php

namespace App\Http\Controllers;

use App\Models\Actividad;
use App\Models\Alumno;
use App\Models\Asistencia;
use App\Models\Turno;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TurnoController extends Controller {
    public function index() {
        $turnos = Turno::with('actividad')->get();
        // dd($turnos);
        $coleccionTurnos = [];
        $t = $turnos[0];
        foreach ($turnos as $turno) {
            if ($turno->alumno_id == null && $turno->fecha == $t->fecha) {
                if ($coleccionTurnos == null) {
                    $coleccionTurnos[] = $turno;
                }
                if ($t->hora != $turno->hora) {
                    $coleccionTurnos[] = $turno;
                    $t = $turno;
                }
            } else {
                if ($turno->alumno_id == null) {
                    $coleccionTurnos[] = $turno;
                    $t = $turno;
                }
            }
        }
        // dd($coleccionTurnos);

        // Obtén solo las actividades en un array separado
        $actividades = Actividad::with('especialidad')->get();

        return Inertia::render('Turnos/Index', [
            'turnos' => $coleccionTurnos,
            'actividades' => $actividades,
        ]);
    }
    protected function filtrarTurnos(Turno $turnos) {
        $t = $turnos[0];
        $coleccionTurnos = $t;
        foreach ($turnos as $turno) {
            if ($t->fecha != $turno->fecha && $t->hora != $turno->hora) {
                $t = $turno;
                array_push($coleccionTurnos, $t);
            }
        }
        var_dump($coleccionTurnos);
        return $coleccionTurnos;
    }
    public function store(Request $request) {
    }
    public function update(Request $request, String $turno) {
        $usuario = User::where('dni', $request->dni)->first();
        $alumno = Alumno::where('user_id', $usuario->id)->first();
        $turnosAlumno = Turno::where('alumno_id', $alumno->id)->get();
        $t = Turno::find($turno);

        // Verificar si el turno ya está asignado al alumno
        if ($turnosAlumno->contains('fecha', $t->fecha) && $turnosAlumno->contains('hora', $t->hora)) {
            return back()->withErrors(['message' => 'El turno ya está asignado al alumno']);
        }

        $t->alumno_id = $alumno->id;
        $t->save();

        $asistencia = Asistencia::create([
            'alumno_id' => $alumno->id,
            'fecha' => $request->fecha,
            'especialidad_id' => $request->especialidad_id,
            'estado' => 'presente'
        ]);
        $asistencia->save();

        if ($alumno) {
            // Acceder al usuario del alumno
            $usuario = $alumno->usuario;
            if ($usuario) {
                // Acceder a los pagos del usuario
                $pagos = $usuario->ultimoPago();
                $pagos->dias_disponibles = ($pagos->dias_disponibles - 1);
                $pagos->save();
                // Aquí tienes la colección de pagos, y puedes hacer lo que necesites con ella
            }
        }
        return redirect()->route('turnoAlumno');
    }

    public function destroy(Turno $turno) {
    }
    public function turnoAlumno() {
        $alumno = Alumno::where('user_id', auth()->user()->id)->first();
        $turnos = Turno::where('alumno_id', $alumno->id)
            ->with(['actividad', 'actividad.especialidad']) // Cargar la relación 'actividad' y luego 'especialidad'
            ->get();
        $usuario = $alumno->usuario;
        $pagos = $usuario->ultimoPago();

        return Inertia::render('Turnos/MisTurnos', [
            'turnos' => $turnos,
            'pago' => $pagos
        ]);
    }

    public function cancelarTurno(String $id) {
        $usuario = Auth::user();

        // Verificar si el usuario existe y tiene un alumno asociado
        if ($usuario) {
            $alumno = Alumno::where('user_id', $usuario->id)->first();

            // Verificar si el alumno existe
            if ($alumno) {
                // Acceder a los pagos del usuario
                $pagos = $usuario->ultimoPago();
                $pagos->dias_disponibles += 1;
                $pagos->save();

                // Liberar el turno del alumno
                $turno = Turno::findOrFail($id);
                $turno->alumno_id = null;
                $turno->save();

                // Eliminar la asistencia asociada al turno y alumno
                $asistencia = Asistencia::where('alumno_id', $alumno->id)->where('fecha', $turno->fecha)->first();

                // Verificar si la asistencia existe antes de intentar eliminarla
                if ($asistencia) {
                    $asistencia->estado = 'cancelado';
                    $asistencia->save();
                }
            }
        }
    }
}
