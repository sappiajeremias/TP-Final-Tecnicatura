<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Ejercicio;
use App\Models\EjercicioRutina;
use App\Models\Profesor;
use App\Models\Rutina;
use App\Models\RutinaAlumno;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class RutinaController extends Controller {
    public function index() {
        // Obtener el profesor autenticado con la relación de usuario
        $profesor = Profesor::where('user_id', auth()->user()->id)->with('usuario')->first();

        // Obtener las rutinas del profesor autenticado con la relación de usuario
        $rutinas = Rutina::where('profesor_id', $profesor->id)->with('profesor.usuario')->get();

        // Cargar la relación 'usuarios'
        // $profesor->load('usuarios');

        // dd($profesor);

        return Inertia::render('Rutinas/Index', ['rutinas' => $rutinas, 'profesor' => $profesor]);
    }

    public function store(Request $request) {
        $request->validate([
            'nombre' => ['required'],
            'mes' => ['required', 'exclude:1'],
            'dificultad' => ['required', 'exclude:1'],
            'dia_semana' => ['required', 'exclude:1'],
        ], [
            'nombre.required' => 'Debe ingresar un nombre.',
            'mes.required' => 'Debe seleccionar un mes.',
            'mes.exclude' => 'Debe seleccionar un mes.',
            'dificultad.required' => 'Debe seleccionar una dificultad',
            'dificultad.exclude' => 'Debe seleccionar una dificultad.',
            'dia_semana.required' => 'Debe seleccionar un dia de la semana.',
            'dia_semana.exclude' => 'Debe seleccionar un dia de la semana.',
        ]);
        $rutina = Rutina::create([
            'nombre' => $request->nombre,
            'mes' => $request->mes,
            'dificultad' => $request->dificultad,
            'profesor_id' => $request->profesor_id,
            'dia_semana' => $request->dia_semana,
        ]);
        $rutina->save();
        $rutinaE = EjercicioRutina::where('rutina_id', $rutina->id)->with('ejercicio')->get();
    }
    public function show($id) {
        $ejerciciosCompletos = Ejercicio::all();
        $rutina = Rutina::find($id);
        $rutinaEj = EjercicioRutina::where('rutina_id', $id)->with('ejercicio')->get();
        // dd($rutina);
        return Inertia::render('Rutinas/EjerciciosRutina', ['ejercicios' => $rutinaEj, 'ejerciciosAll' => $ejerciciosCompletos, 'nombreRutina' => $rutina->nombre]);
    }
    public function update(Request $request, Rutina $rutina) {
    }
    public function destroy(Rutina $rutina) {
    }
    public function agregarEjercicio(Request $request) {
        // dd($request);
        $request->validate([
            'repeticiones' => 'required | integer',
            'series' => 'required | integer',
            'peso' => 'required | integer',
        ], [
            'repeticiones.required' => 'Debe ingresar un numero de repeticiones.',
            'series.required' => 'Debe ingresar un numero de series.',
            'peso.required' => 'Debe ingresar un peso.',
        ]);

        $registroRepe = EjercicioRutina::where('ejercicio_id', $request->ejercicio_id)
            ->where('rutina_id', $request->rutina_id)
            ->first();
        if ($registroRepe) {
            return back()->withErrors(['message', 'Ya hay un ejercicio igual agregado.']);
        } else {
            if ($request->adicional) {
                $ejercicioRutina = EjercicioRutina::create([
                    'ejercicio_id' => $request->ejercicio_id,
                    'rutina_id' => $request->rutina_id,
                    'repeticiones' => $request->repeticiones,
                    'peso' => $request->peso,
                    'series' => $request->series,
                    'adicional' => $request->adicional,
                ]);
            } else {
                $ejercicioRutina = EjercicioRutina::create([
                    'ejercicio_id' => $request->ejercicio_id,
                    'rutina_id' => $request->rutina_id,
                    'repeticiones' => $request->repeticiones,
                    'peso' => $request->peso,
                    'series' => $request->series,
                    'adicional' => '',
                ]);
            }
            $ejercicioRutina->save();
        }
    }
}
