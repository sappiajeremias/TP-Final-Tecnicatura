<?php

namespace App\Http\Controllers;

use App\Models\Pago;
use App\Models\Membresia;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Carbon\Carbon;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use MercadoPago;
use MercadoPago\Client\MerchantOrder\MerchantOrderClient;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Net\MPSearchRequest;
use MercadoPago\Resources\Payment as ResourcesPayment;
use MercadoPago\Resources\Payment;
use MercadoPago\Resources\Payment\Payer;
use MercadoPago\Resources\Preference;
use MercadoPago\Resources\Preference\Item;
use MercadoPago\Resources\Preference\Payer as PreferencePayer;

// require_once 'vendor/autoload.php';

class PagoController extends Controller {
    public function index() {
    }
    public function store(Request $request) {
        $ultimoPago = Auth::user()->ultimoPago();

        //  dd($ultimoPago && Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 3);
        if (($ultimoPago && Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 3) == false) {
            return back()->withErrors(['message' => 'Todavía no se ha vencido su membresía.']);
        } else {
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
            if ($request->medio_pago == 0) {
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
    }
    public function update(Request $request, Pago $pago) {
    }
    public function destroy(Pago $pago) {
    }
    public function crearPreference(Request $request) {
        // dd($request);

        // $fecha = Carbon::now();
        // $fecha->addDays(30);
        // $membresia = Membresia::where('id', $request->membresia_id)->first();

        // $pago = Pago::create([
        //     'user_id' => Auth()->user()->id,
        //     'membresia_id' => $request->membresia_id,
        //     'medio_pago' => $medio,
        //     'dias_disponibles' => ($membresia->dias_disponibles) * 4,
        //     'fecha_vencimiento' => $fecha,
        // ]);

        // $preferencia = $request->id;

        // return;
    }


    public function estadoPago(Request $request) {
        $_GET['status'];

        $payment_info = $_GET;

        // dd($payment_info);
        switch ($payment_info['status']) {
            case 'approved':
                return Inertia::render('Dashboard', [
                    'mensaje' => 'El pago se registro con exito',
                ]);
                // $verif = false;
                // $fecha = Carbon::now();
                // $fecha->addDays(30);



                // $client = new PreferenceClient();

                // // $search_request = new MPSearchRequest(1, 0, [
                // //     "sponsor_id" => "0",
                // //     "external_reference" => "null",
                // //     "site_id" => "MLA",
                // //     "marketplace" => "NONE"
                // // ]);
                // // $client->search($search_request);
                // // dd($client);
                // dd($client->get(intval($payment_info['preference_id'])));
                // $membresia = Membresia::where('id', $request->membresia_id)->first();

                // $pago = Pago::create([
                //     'user_id' => $request->user_id,
                //     'membresia_id' => $request->membresia_id,
                //     'medio_pago' => $request->payment_type,
                //     'dias_disponibles' => ($membresia->dias_disponibles) * 4,
                //     'fecha_vencimiento' => $fecha,
                // ]);
                // $pago->save();
                // return redirect()->route('dashboard');
                // $payment = new Payment();

                // $payment->external_reference = $payment_info['external_reference'];
                // $payment->status = $payment_info['status'];
                // $payment->site_id = $payment_info['site_id'];
                // $payment->processing_mode = $payment_info['processing_mode'];
                // dd($payment);
                break;

            default:
                dd('hola');
                break;
        }
    }
    public function confirmarPago(Request $request) {
        //dd($request->membresia_id);
        return Inertia::render('Pago/Index', [
            'membresia_id' => $request->membresia_id
        ]);
    }
}
