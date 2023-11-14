<?php

namespace App\Http\Controllers;

use App\Models\EjercicioRutina;
use Illuminate\Http\Request;

class EjercicioRutinaController extends Controller {
    public function index() {
    }
    public function store(Request $request) {
    }
    public function update(Request $request, EjercicioRutina $ejercicioRutina) {
    }
    public function destroy(Request $ejercicioRutina) {
        // dd($ejercicioRutina);
        $ejercicioR = EjercicioRutina::findOrFail($ejercicioRutina->id);
        $ejercicioR->delete();
        return redirect()->back()->with('mensaje', 'Elemento eliminado exitosamente');
    }
}
