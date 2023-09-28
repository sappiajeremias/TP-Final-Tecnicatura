<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Actividad;
use App\Models\Profesor;
use Inertia\Inertia;

class ActividadController extends Controller
{
    //
    public function index()
    {
        $actividades = Actividad::all();
        $profesores = Profesor::with('usuario')->get()->map(function ($profesor) {
            return [
                'id' => $profesor->id,
                'nombre_apellido' => $profesor->usuario->name . ' ' . $profesor->usuario->apellido,
            ];
        });
        return Inertia::render('Actividad/Index', ['actividades' => $actividades, 'profesores' => $profesores]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'dia_semana' => 'required',
            'hora_inicio' => 'required',
            'hora_fin' => 'required',
            'duracion' => ['required', 'integer', 'multiple_of:60'],
            'descripcion' => ['required', 'max:30'],
            'profesor_id' => 'required',
        ], [
            'dia_semana.required' => 'Debe seleccionar los dias de la semana.',
            'hora_inicio.required' => 'Debe seleccionar un horario de inicio.',
            'hora_fin.required' => 'Debe seleccionar un horario de finalización.',
            'duracion.required' => 'Debe ingresar la duración.',
            'duracion.integer' => 'Debe ingresar un número.',
            'duracion.multiple_of' => 'Debe ingresar un número múltiplo de 60.',
            'descripcion.required' => 'Debe ingresar una descripción.',
            'descripcion.max' => 'Debe ingresar una descripción menor a 30 caracteres.',
            'profesor_id.required' => 'Debe seleccionar un profesor.'
        ]);

        $dia_semana = implode(',', $request->dia_semana);

        $actividad = Actividad::create([
            'dia_semana' => $dia_semana,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'duracion' => $request->duracion,
            'descripcion' => $request->descripcion,
            'profesor_id' => $request->profesor_id
        ]);
        $actividad->save();
        return redirect()->route('dashboard');
    }

    public function update(Request $request, String $id)
    {
        $dia_semana = implode(',', $request->dia_semana);

        //dd($dia_semana);
        $act = Actividad::find($id);
        $act->dia_semana = $dia_semana;
        $act->hora_inicio = $request->hora_inicio;
        $act->hora_fin = $request->hora_fin;
        $act->duracion = $request->duracion;
        $act->descripcion = $request->descripcion;
        $act->profesor_id = $request->profesor_id;
        $act->save();
    }

    public function destroy(String $id)
    {
        $act = Actividad::find($id);
        $act->delete();
    }
}
