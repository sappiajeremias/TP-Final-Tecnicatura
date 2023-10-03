<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use Illuminate\Http\Request;

class EspecialidadController extends Controller
{
    public function index() {
    }
    public function store(Request $request) {
        $request->validate([
            'descripcion' => ['required', 'unique:' . Especialidad::class]
        ], [
            'descripcion.required' => 'Debe seleccionar una descripción.',
            'descripcion.unique' => 'La actividad ingresada ya existe.'
        ]);
        $especialidad = Especialidad::create([
            'descripcion' => $request->descripcion
        ]);
        $especialidad->save();
        return redirect()->route('dashboard');
    }
    public function update(Request $request, Especialidad $especialidad) {
    }
    public function destroy(Especialidad $especialidad) {
    }

}
