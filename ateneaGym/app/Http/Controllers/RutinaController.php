<?php

namespace App\Http\Controllers;

use App\Models\Ejercicio;
use App\Models\EjercicioRutina;
use App\Models\Profesor;
use App\Models\Rutina;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use PhpParser\Node\Stmt\Return_;

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
            'mes' => 'required',
            'dia_semana' => 'required'
        ]);
        $rutina = Rutina::create([
            'mes' => $request->mes,
            'profesor_id' => $request->profesor_id,
            'dia_semana' => $request->dia_semana
        ]);
        $rutina->save();
        $rutinaE = EjercicioRutina::where('rutina_id', $rutina->id)->with('ejercicio')->get();

        return Inertia::render('Rutinas/EjerciciosRutina', ['ejercicios' => $rutinaE]);
    }
    public function show($id) {
        $ejerciciosCompletos = Ejercicio::all();
        $rutina = EjercicioRutina::where('rutina_id', $id)->with('ejercicio')->get();
        // dd($rutina);
        return Inertia::render('Rutinas/EjerciciosRutina', ['ejercicios' => $rutina, 'ejerciciosAll' => $ejerciciosCompletos]);
    }
    public function update(Request $request, Rutina $rutina) {
    }
    public function destroy(Rutina $rutina) {
    }
    public function agregarEjercicio(Request $request) {
        // dd($request);
        $ejercicioRutina = EjercicioRutina::create([
            'ejercicio_id' => $request->ejercicio_id,
            'rutina_id' => $request->rutina_id,
            'repeticiones' => $request->repeticiones,
            'peso' => $request->peso,
            'series' => $request->series,
            'adicional' => 'null'
        ]);
        $ejercicioRutina->save();
        return redirect()->back();
    }
}
