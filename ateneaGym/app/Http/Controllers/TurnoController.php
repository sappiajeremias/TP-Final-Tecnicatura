<?php

namespace App\Http\Controllers;

use App\Models\Actividad;
use App\Models\Alumno;
use App\Models\Turno;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TurnoController extends Controller {
    public function index() {
        $turnos = Turno::with('actividad')->get();

        // Obtén solo las actividades en un array separado
        $actividades = Actividad::with('especialidad')->get();
        return Inertia::render('Turnos/Index', [
            'turnos' => $turnos,
            'actividades' => $actividades
        ]);
    }
    public function store(Request $request) {
    }
    public function update(Request $request, String $turno) {
        $usuario = User::where('dni', $request->dni)->first();
        $alumno = Alumno::where('user_id', $usuario->id)->first();
        // return print_r($alumno);
        $t = Turno::find($turno);
        $t->alumno_id = $alumno->id;
        $t->save();
        return redirect()->route('turnoAlumno');
    }
    public function destroy(Turno $turno) {
    }
    public function turnoAlumno() {
        $alumno = Alumno::where('user_id', auth()->user()->id)->first();
        $turnos = Turno::where('alumno_id', $alumno->id)
            ->with(['actividad', 'actividad.especialidad']) // Cargar la relación 'actividad' y luego 'especialidad'
            ->get();


        return Inertia::render('Turnos/MisTurnos', [
            'turnos' => $turnos
        ]);
    }
    public function cancelarTurno(String $id) {
        $turno = Turno::findOrFail($id);
        $turno->alumno_id = null;
        $turno->save();
    }
}
