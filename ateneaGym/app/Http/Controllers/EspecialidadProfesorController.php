<?php

namespace App\Http\Controllers;

use App\Models\EspecialidadProfesor;
use App\Models\Especialidad;
use App\Models\Profesor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EspecialidadProfesorController extends Controller
{
    public function index()
    {
        $relaciones = EspecialidadProfesor::all();
        $especialidades = Especialidad::all();
        $profesores = Profesor::with('usuario')->get()->map(function ($profesor) {
            return [
                'id' => $profesor->id,
                'nombre_apellido' => $profesor->usuario->name . ' ' . $profesor->usuario->apellido,
            ];
        });
        $arreglo = [];

        foreach($relaciones as $relacion) {

            $profesor = Profesor::where('id', $relacion->profesor_id)->first();
            //dd($profesor->usuario);
            $especialidad = Especialidad::where('id', $relacion->especialidad_id)->first();
            $arreglo[] = [
                'id' => $relacion->id,
                'descripcion' => $especialidad->descripcion,
                'especialidad_id' => $especialidad->id,
                'nombre' => $profesor->usuario->name . ' ' . $profesor->usuario->apellido,
                'profesor_id' => $profesor->id
            ];
        }
        return Inertia::render('Especialidad/Index', ['especialidadesProfesores' => $arreglo, 'especialidades' => $especialidades, 'profesores' => $profesores]);
    }
    public function store(Request $request)
    {
        // dd($request);
        $request->validate([
            'especialidad_id' => 'required',
            'profesor_id' => 'required',
        ], [
            'especialidad_id.required' => 'Debe seleccionar una descripción.',
            'profesor_id.required' => 'Debe seleccionar un profesor.'
        ]);

        $registroExistente = EspecialidadProfesor::where('especialidad_id', $request->especialidad_id)
        ->where('profesor_id', $request->profesor_id)
        ->first();
        if ($registroExistente) {
            // Aquí puedes mostrar un mensaje de error o tomar otra acción apropiada
            return response()->json(['message' => 'Error: El registro ya existe'], 422);
        } else {
            $especialidadProfesor = EspecialidadProfesor::create([
            'especialidad_id' => $request->especialidad_id,
            'profesor_id' => $request->profesor_id
        ]);
            $especialidadProfesor->save();
            return redirect()->route('dashboard');
        }

        
    }


    public function update(Request $request, String $id)
    {
        // Verifica si el registro existe
        $registroExistente = EspecialidadProfesor::where('especialidad_id', $request->especialidad_id)
            ->where('profesor_id', $request->profesor_id)
            ->first();
        if ($registroExistente) {
            return response()->json(['message' => 'Error: El registro ya existe'], 422);
        } else {
            $rela = EspecialidadProfesor::find($id);
            $rela->especialidad_id = $request->especialidad_id;
            $rela->profesor_id = $request->profesor_id;
            $rela->save();

            return redirect()->route('dashboard');
        }
    }


    public function destroy(String $id)
    {
        $rela = EspecialidadProfesor::find($id);
        $rela->delete();
    }

}
