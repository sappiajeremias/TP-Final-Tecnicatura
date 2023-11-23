<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Profesor;
use App\Models\Rutina;
use App\Models\RutinaAlumno;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RutinaAlumnoController extends Controller {
    public function index() {
        $alumno = Alumno::where('user_id', Auth()->user()->id)->first();
        $rutinas = RutinaAlumno::with('rutinas')->where('alumno_id', $alumno->id)->get();

        return Inertia::render('Rutinas_Alumnos/Index', ['rutinasAlumno' => $rutinas]);
    }
    public function store(Request $request) {
    }
    public function update(Request $request, RutinaAlumno $rutinaAlumno) {
    }
    public function destroy(RutinaAlumno $rutinaAlumno) {
    }

    public function ejerciciosRutina($rutinaAlumno) {
        dd($rutinaAlumno);
    }

    // profesor

    public function mostrarUsuarios() {
        $profesor = Profesor::where('user_id', Auth()->user()->id)->first();
        $rutinas = Rutina::where('profesor_id', $profesor->id)->with('profesor.usuario')->get();

        $alumnos = Alumno::with('usuario')->get();
        $rutinaAlumno = RutinaAlumno::all();
        // dd($rutinaAlumno);
        return Inertia::render('Rutinas/AsignarRutina', ['alumnos' => $alumnos, 'rutinas' => $rutinas, 'rutinaAlumnos' => $rutinaAlumno]);
    }
    public function agregarUsuarios(Request $request) {
        // dd($request);
        $rutinaAlumno = RutinaAlumno::create([
            'alumno_id' => $request->alumno,
            'rutina_id' => $request->rutina,
        ]);
        $rutinaAlumno->save();
        return back()->with(['message' => 'Se agrego correctamente el alumno a la rutina']);
    }
    public function eliminarAsignacion($rutinaId, $alumnoId) {
        // dd($rutinaId, $alumnoId);
        // $rutina = Rutina::find($rutinaId);
        // $alumnoId = Rutina::find($alumnoId);
        $rutinaAlumno = RutinaAlumno::where('alumno_id', $alumnoId)->where('rutina_id', $rutinaId)->first();

        if ($rutinaAlumno) {
            $rutinaAlumno->delete();
            return back()->with(['message' => 'Se elimino correctamente el alumno de la rutina']);
        } else {
            return back()->withErrors(['message' => 'No se pudo eliminar el alumno de la rutina']);
        }
    }
}
