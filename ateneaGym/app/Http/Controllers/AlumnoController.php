<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use Inertia\Inertia;

class AlumnoController extends Controller
{
    //
    public function index()
    {
        $alumnos = Alumno::with('usuario')->get()->map(function ($alumn) {
            return [
                'id' => $alumn->id,
                'nombre' => $alumn->usuario->name . ' ' . $alumn->usuario->apellido,
                'dni' => $alumn->usuario->dni,
            ];
        });
        return Inertia::render('Profesor/Index', ['usuarios' => $alumnos]);
    }

    public function actualizarAsis(String $id)
    {
        $alumno = Alumno::find($id);

        if ($alumno) {
            // Acceder al usuario del alumno
            $usuario = $alumno->usuario;

            if ($usuario) {
                // Acceder a los pagos del usuario
                $pagos = $usuario->ultimoPago();
                $pagos->dias_disponibles = ($pagos->dias_disponibles - 1);
                $pagos->save();
                // Aquí tienes la colección de pagos, y puedes hacer lo que necesites con ella
            }
        }
    }
}
