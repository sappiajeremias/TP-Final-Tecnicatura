<?php

namespace App\Http\Controllers;

use App\Models\EjercicioRutina;
use App\Models\Profesor;
use App\Models\Rutina;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RutinaController extends Controller {
    public function index() {
        $profesor = Profesor::where('user_id', auth()->user()->id)->first();

        // Obtener las rutinas del profesor autenticado con la relación de usuario
        $rutinas = Rutina::where('profesor_id', $profesor->id)
            ->with('profesor.usuario')
            ->get();

        return Inertia::render('Rutinas/Index', ['rutinas' => $rutinas]);
    }
    public function store(Request $request) {
    }
    public function show($id) {
        $rutina = EjercicioRutina::where('rutina_id', $id)->with('ejercicio')->get();
        // dd($rutina);
        return Inertia::render('Rutinas/EjerciciosRutina', ['ejercicios' => $rutina]);
    }
    public function update(Request $request, Rutina $rutina) {
    }
    public function destroy(Rutina $rutina) {
    }
    public function agregarEjercicio(Request $request) {
        dd($request);
    }
}
