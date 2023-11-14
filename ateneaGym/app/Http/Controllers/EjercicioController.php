<?php

namespace App\Http\Controllers;

use App\Models\Ejercicio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EjercicioController extends Controller {
    public function index() {
        $ejercicios = Ejercicio::all();
        return Inertia::render('Ejercicios/Index', ['ejercicios' => $ejercicios]);
    }
    public function store(Request $request) {
        // dd($request)
        $request->validate([
            'nombre' => 'required',
            'parte_cuerpo' => 'required',
            'musculo' => 'required',
            'imagen' => 'required',
        ]);
        $ejercicio = Ejercicio::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'parte_cuerpo' => $request->parte_cuerpo,
            'musculo' => $request->musculo,
            'imagen' => $request->imagen,
        ]);
        $ejercicio->save();

        // dd($request);
        return redirect()->back()->with('mensaje', 'ejercicio agregado');
    }
    public function update(Request $request, Ejercicio $ejercicio) {
    }
    public function destroy(Ejercicio $ejercicio) {
    }
}
