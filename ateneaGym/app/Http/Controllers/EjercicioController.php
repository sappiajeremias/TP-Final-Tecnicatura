<?php

namespace App\Http\Controllers;

use App\Models\Ejercicio;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EjercicioController extends Controller
{
    public function index()
    {
        $ejercicios = Ejercicio::all();
        return Inertia::render('Ejercicios/Index', ['ejercicios' => $ejercicios]);
    }
    public function store(Request $request)
    {
        // dd($request)
        $request->validate([
            'nombre' => ['required', 'unique:'.Ejercicio::class],
            'parte_cuerpo' => ['required', 'exclude:1'],
            'musculo' => ['required', 'exclude:1'],
            'imagen' => 'required',
        ], [
            'nombre.required' => 'Debe ingresar un nombre.',
            'nombre.unique' => 'Ya existe un ejercicio con ese nombre.',
            'parte_cuerpo.required' => 'Debe seleccionar una parte del cuerpo.',
            'parte_cuerpo.exclude' => 'Debe seleccionar una parte del cuerpo.',
            'musculo.required' => 'Debe seleccionar un musculo',
            'musculo.exclude' => 'Debe seleccionar un musculo.',
            'imagen.required' => 'Debe seleccionar una imagen',
            
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
    public function update(Request $request, String $id)
    {
        $request->validate([
            'nombre' => ['required', 'unique:'.Ejercicio::class],
            'parte_cuerpo' => ['required', 'exclude:1'],
            'musculo' => ['required', 'exclude:1'],
            'imagen' => 'required',
        ], [
            'nombre.required' => 'Debe ingresar un nombre.',
            'nombre.unique' => 'Ya existe un ejercicio con ese nombre.',
            'parte_cuerpo.required' => 'Debe seleccionar una parte del cuerpo.',
            'parte_cuerpo.exclude' => 'Debe seleccionar una parte del cuerpo.',
            'musculo.required' => 'Debe seleccionar un musculo',
            'musculo.exclude' => 'Debe seleccionar un musculo.',
            'imagen.required' => 'Debe seleccionar una imagen',
        ]);

        $ejercicio = Ejercicio::find($id);
        $ejercicio->nombre = $request->nombre;
        $ejercicio->parte_cuerpo = $request->parte_cuerpo;
        $ejercicio->musculo = $request->musculo;
        $ejercicio->imagen = $request->imagen;
        $ejercicio->save();
    }
    public function destroy(Ejercicio $ejercicio)
    {
    }
}
