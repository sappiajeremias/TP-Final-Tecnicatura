<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Actividad;
use App\Models\Profesor;
use Inertia\Inertia;

class ActividadController extends Controller {
    //
    public function index() {
        $actividades = Actividad::all();
        $profesores = Profesor::all();
        return Inertia::render('Actividad/Index', ['actividades' => $actividades, 'profesores' => $profesores]);
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'dia_semana' => 'required',
            'hora_inicio' => 'required',
            'hora_fin' => 'required',
            'duracion' => 'required',
            'descripcion' => 'required',
            'profesor_id' => 'required',
        ]);

        $actividad = Actividad::create([
            'dia_semana' => $request->dia_semana,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'duracion' => $request->duracion,
            'descripcion' => $request->descripcion,
            'profesor_id' => $request->profesor_id
        ]);
        $actividad->save();
        return redirect()->route('dashboard');
    }

    public function update(Request $request, String $id){
        $act = Actividad::find($id);
        $act->dia_semana = $request->dia_semana;
        $act->hora_inicio = $request->hora_inicio;
        $act->hora_fin = $request->hora_fin;
        $act->duracion = $request->duracion;
        $act->descripcion = $request->descripcion;
        $act->profesor_id = $request->profesor_id;
        $act->save();
    }

    public function destroy(String $id){
        $act = Actividad::find($id);
        $act->delete();
    }
}
