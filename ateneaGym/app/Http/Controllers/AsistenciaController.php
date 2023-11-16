<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Asistencia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AsistenciaController extends Controller {
    public function index() {
        $alumno = Alumno::where('user_id', Auth()->user()->id)->first();
        $asistencias = Asistencia::where('alumno_id', $alumno->id)->with('especialidad')->get();
        return Inertia::render('Asistencia/Index', ['asistencia' => $asistencias]);
    }
    public function store(Request $request) {
    }
    public function update(Request $request, Asistencia $asistencia) {
    }
    public function destroy(Asistencia $rutinaAlumno) {
    }
}
