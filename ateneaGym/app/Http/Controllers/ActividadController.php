<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Actividad;
use Inertia\Inertia;
class ActividadController extends Controller
{
    //
public function index(){
    return Inertia::render('Actividad/Index',[

    ]);
}

public function store(Request $request){
    $validated = $request->validate([
        'dia_semana'=>'required',
        'hora_inicio'=>'required',
        'hora_fin'=>'required',
        'duracion'=>'required',
        'descripcion'=>'required',
        'profesor_id'=>'required',
    ]);

    $actividad =Actividad::create([
        'dia_semana'=>$request->dia_semana,
        'hora_inicio'=>$request->hora_inicio,
        'hora_fin'=>$request->hora_fin,
        'duracion'=>$request->duracion,
        'descripcion'=>$request->descripcion,
        'profesor_id'=>$request->profesor_id
    ]);
    $actividad->save();
    return redirect()->route('dashboard');
}

}
