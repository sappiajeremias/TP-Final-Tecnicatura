<?php

namespace App\Http\Controllers;

use App\Models\Actividad;
use App\Models\Especialidad;
use App\Models\EspecialidadProfesor;
use App\Models\Profesor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ActividadController extends Controller
{
    //
    public function index()
    {
        $actividades = Actividad::all();
        $especialidades = Especialidad::all()->map(function ($especialidad) {
            return [
                'id' => $especialidad->id,
                'descripcion' => $especialidad->descripcion,
            ];
        });
        $profesores = Profesor::with('usuario')->get()->map(function ($profesor) {
            return [
                'id' => $profesor->id,
                'nombre_apellido' => $profesor->usuario->name . ' ' . $profesor->usuario->apellido,
            ];
        });
        return Inertia::render('Actividad/Index', ['actividades' => $actividades, 'profesores' => $profesores, 'especialidades' => $especialidades]);
    }

    public function store(Request $request)
    {
        //dd($request->dia_semana);
        $request->validate([
            'dia_semana' => ['required', 'exclude:1', 'min:1'],
            'hora_inicio' => ['required', 'exclude:1'],
            'hora_fin' => ['required', 'exclude:1', 'after:hora_inicio'],
            'duracion' => ['required', 'integer', 'multiple_of:15', 'min:45'],
            'especialidad_id' => ['required'],
            'cupos' => ['required', 'numeric', 'max:20', 'min:5'],
            'profesor_id' => ['required', 'exclude:1'],
        ], [
            'dia_semana.required' => 'Debe seleccionar los dias de la semana.',
            'dia_semana.min' => 'Debe seleccionar los dias de la semana.',
            'dia_semana.exclude' => 'Debe seleccionar los dias de la semana.',
            'hora_inicio.required' => 'Debe seleccionar un horario de inicio.',
            'hora_inicio.exclude' => 'Debe seleccionar un horario de inicio.',
            'hora_fin.required' => 'Debe seleccionar un horario de finalización.',
            'hora_fin.after' => 'El horario de finalizacion debe ser posterior al de inicio.',
            'hora_fin.exclude' => 'Debe seleccionar un horario de finalización.',
            'duracion.required' => 'Debe ingresar la duración.',
            'duracion.integer' => 'Debe ingresar un número.',
            'duracion.multiple_of' => 'Debe ingresar un número múltiplo de 60.',
            'especialidad_id.required' => 'Debe ingresar una descripción.',
            'profesor_id.required' => 'Debe seleccionar un profesor.',
            'profesor_id.exclude' => 'Debe seleccionar un profesor.',
            'duracion.min' => 'Debe tener una duración minima de 45 minutos.',
            'cupos.required' => 'Debe ingresar una cantidad de cupos.',
            'cupos.max' => 'La cantidad de cupos debe ser mayor o igual a 5 o menor que 20.',
            'cupos.min' => 'La cantidad de cupos debe ser mayor o igual a 5 o menor que 20.',
        ]);

//dd($request);
        $actividadRepe = Actividad::where('dia_semana', $request->dia_semana)
            ->where('hora_inicio', $request->hora_inicio)
            ->first();
        $especialidadRepe = EspecialidadProfesor::where('especialidad_id', $request->especialidad_id)
            ->where('profesor_id', $request->profesor_id)
            ->first();

        if ($actividadRepe) {
            return back()->withErrors(['message', 'Ya existe una actividad en esa hora y día.']);
        } else {
            if ($especialidadRepe) {
                $actividad = Actividad::create([
                    'dia_semana' => $request->dia_semana,
                    'hora_inicio' => $request->hora_inicio,
                    'hora_fin' => $request->hora_fin,
                    'duracion' => $request->duracion,
                    'especialidad_id' => $request->especialidad_id,
                    'cupos' => $request->cupos,
                    'profesor_id' => $request->profesor_id,
                ]);
                $actividad->save();
            } else {
                return back()->withErrors(['message', 'Ese profesor no tiene asignada esa especialidad.']);
            }

        }
    }
    
    public function update(Request $request, String $id)
    {
        $request->validate([
            'dia_semana' => ['required', 'min:1'],
            'hora_inicio' => 'required',
            'hora_fin' => ['required', 'after:hora_inicio'],
            'duracion' => ['required', 'integer', 'multiple_of:15', 'min:45'],
            'especialidad_id' => ['required'],
            'cupos' => ['required', 'numeric', 'max:20', 'min:5'],
            'profesor_id' => 'required',
        ], [
            'dia_semana.required' => 'Debe seleccionar los dias de la semana.',
            'dia_semana.min' => 'Debe seleccionar los dias de la semana.',
            'hora_inicio.required' => 'Debe seleccionar un horario de inicio.',
            'hora_fin.required' => 'Debe seleccionar un horario de finalización.',
            'hora_fin.after' => 'El horario de finalizacion debe ser posterior al de inicio.',
            'duracion.required' => 'Debe ingresar la duración.',
            'duracion.integer' => 'Debe ingresar un número.',
            'duracion.multiple_of' => 'Debe ingresar un número múltiplo de 60.',
            'especialidad_id.required' => 'Debe ingresar una descripción.',
            'profesor_id.required' => 'Debe seleccionar un profesor.',
            'duracion.min' => 'Debe tener una duración minima de 45 minutos.',
            'cupos.required' => 'Debe ingresar una cantidad de cupos.',
            'cupos.max' => 'La cantidad de cupos debe ser mayor o igual a 5 o menor que 20.',
            'cupos.min' => 'La cantidad de cupos debe ser mayor o igual a 5 o menor que 20.',
        ]);
        //dd($actividadRepe->id != $id);

        $actividadRepe = Actividad::where('dia_semana', $request->dia_semana)
            ->where('hora_inicio', $request->hora_inicio)
            ->first();
        $especialidadRepe = EspecialidadProfesor::where('especialidad_id', $request->especialidad_id)
            ->where('profesor_id', $request->profesor_id)
            ->first();

        if ($actividadRepe && $actividadRepe->id != $id) {
            return back()->withErrors(['message', 'Ya existe una actividad en esa hora y día.']);
        } else {
            if ($especialidadRepe) {
                $act = Actividad::find($id);
                $act->dia_semana = $request->dia_semana;
                $act->hora_inicio = $request->hora_inicio;
                $act->hora_fin = $request->hora_fin;
                $act->duracion = $request->duracion;
                $act->especialidad_id = $request->especialidad_id;
                $act->cupos = $request->cupos;
                $act->profesor_id = $request->profesor_id;
                $act->save();
            } else {
                return back()->withErrors(['message', 'Ese profesor no tiene asignada esa especialidad.']);
            }

        }
    }

    public function destroy(String $id)
    {
        $act = Actividad::find($id);
        $act->delete();
    }
}
