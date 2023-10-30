<?php

namespace App\Http\Controllers;

use App\Models\Ejercicio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EjercicioController extends Controller {
    public function index() {
        $ejercicios = Ejercicio::all();
        return Inertia::render('Ejercicios/Index');
    }
    public function store(Request $request) {
    }
    public function update(Request $request, Ejercicio $ejercicio) {
    }
    public function destroy(Ejercicio $ejercicio) {
    }
}
