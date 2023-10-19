<?php

namespace App\Http\Controllers;

use App\Models\Pago;
use App\Models\Membresia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;

class PagoController extends Controller
{
    public function index() {}
    public function store(Request $request)
    {
        $request->validate([
            'medio_pago' => 'required',
            'fecha_vencimiento' => ['required', 'fecha_vencimiento_posterior'],
            'numero_tarjeta' => ['required', 'max:16', 'min:16'],
            'cod_seguridad' => ['required', 'max:4', 'min:3'],
        ], [
            'medio_pago.required' => 'Debe seleccionar el medio de pago.',
            'numero_tarjeta.required' => 'Debe ingresar el número de la tarjeta.',
            'numero_tarjeta.max' => 'El número ingresado no es correcto.',
            'numero_tarjeta.min' => 'El número ingresado no es correcto.',
            'cod_seguridad.required' => 'Debe ingresar el código de seguridad.',
            'cod_seguridad.max' => 'Debe ingresar un número.',
            'cod_seguridad.min' => 'Debe ingresar un número múltiplo de 60.',
            'fecha_vencimiento.required' => 'Debe ingresar una fecha de vencimiento.',
            'fecha_vencimiento.fecha_vencimiento_posterior' => 'La fecha de vencimiento debe ser posterior a la actual.',
        ]);

        $medio = "Credito";
        if($request->medio_pago == 0) {
            $medio = "Debito";
        }
        $verif = false;
        $fecha = Carbon::now();
        $fecha->addDays(30);
        $membresia = Membresia::where('id', $request->membresia_id)->first();

        $pago = Pago::create([
        'user_id' => $request->user_id,
        'membresia_id' => $request->membresia_id,
        'medio_pago' => $medio,
        'dias_disponibles' => ($membresia->dias_disponibles) * 4,
        'fecha_vencimiento' => $fecha,
        ]);
        $pago->save();
        return redirect()->route('dashboard');
    }
    public function update(Request $request, Pago $pago) {}
    public function destroy(Pago $pago) {}

    public function confirmarPago(Request $request)
    {
        //dd($request->membresia_id);
        return Inertia::render('Pago/Index', [
            'membresia_id' => $request->membresia_id
        ]);
    }
}
