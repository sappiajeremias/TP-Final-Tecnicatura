<?php

namespace App\Http\Controllers;

use App\Models\Actividad;
use App\Models\Turno;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TurnoController extends Controller {
    public function index() {
        $turnos = Turno::with('actividad')->get();

        // Obtén solo las actividades en un array separado
        $actividades = Actividad::all();
        return Inertia::render('Turnos/Index', [
            'turnos' => $turnos,
            'actividades' => $actividades
        ]);
    }
    public function store(Request $request) {
    }
    public function update(Request $request, String $turno) {
        $t = Turno::find($turno);
        $t->alumno_id = $request->usuario_id;
        $t->save();
    }
    public function destroy(Turno $turno) {
    }
}
