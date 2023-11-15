<?php

namespace App\Http\Controllers;

use App\Models\EjercicioRutina;
use Illuminate\Http\Request;

class EjercicioRutinaController extends Controller {
    public function index() {
    }
    public function store(Request $request) {
    }
    public function update(Request $request) {
        dd($request);
        $ejercicioRutina = EjercicioRutina::where('ejercicio_id', $request->ejercicio_id)->where('rutina_id', $request->rutina_id)->first();
        $ejercicioRutina->repeticiones = $request->repeticiones;
        $ejercicioRutina->series = $request->series;
        $ejercicioRutina->peso = $request->peso;
        $ejercicioRutina->save();
        return redirect()->back();
    }
    public function destroy(Request $ejercicioRutina) {
        // dd($ejercicioRutina);
        $ejercicioR = EjercicioRutina::findOrFail($ejercicioRutina->id);
        $ejercicioR->delete();
        return redirect()->back()->with('mensaje', 'Elemento eliminado exitosamente');
    }
}
