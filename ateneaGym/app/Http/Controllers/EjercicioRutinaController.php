<?php

namespace App\Http\Controllers;

use App\Models\EjercicioRutina;
use Illuminate\Http\Request;

class EjercicioRutinaController extends Controller
{
    public function index()
    {
    }
    public function store(Request $request)
    {
    }
    public function update(Request $request)
    {
        // dd($request);
        $request->validate([
            'repeticiones' => 'required',
            'series' => 'required',
            'peso' => 'required',
        ], [
            'repeticiones.required' => 'Debe ingresar las repeticiones.',
            'series.required' => 'Debe ingresar las series.',
            'peso.required' => 'Debe ingresar el peso.',
        ]);
        $ejercicioRutina = EjercicioRutina::where('ejercicio_id', $request->ejercicio_id)->where('rutina_id', $request->rutina_id)->first();
        if ($request->adicional) {
            $ejercicioRutina->ejercicio_id = $request->ejercicio_id;
            $ejercicioRutina->rutina_id = $request->rutina_id;
                $ejercicioRutina->repeticiones = $request->repeticiones;
                $ejercicioRutina->peso =$request->peso;
                $ejercicioRutina->series =$request->series;
                $ejercicioRutina->adicional = $request->adicional;
        } else {
            $ejercicioRutina->ejercicio_id = $request->ejercicio_id;
            $ejercicioRutina->rutina_id = $request->rutina_id;
                $ejercicioRutina->repeticiones = $request->repeticiones;
                $ejercicioRutina->peso = $request->peso;
                $ejercicioRutina->series =$request->series;
                $ejercicioRutina->adicional = '';
        }

        $ejercicioRutina->save();
    }
    public function destroy(Request $ejercicioRutina)
    {
        // dd($ejercicioRutina);
        $ejercicioR = EjercicioRutina::findOrFail($ejercicioRutina->id);
        $ejercicioR->delete();
        return redirect()->back()->with('mensaje', 'Elemento eliminado exitosamente');
    }
}
