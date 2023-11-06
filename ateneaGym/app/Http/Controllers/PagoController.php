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
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
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
        // Crear un objeto de preferencia
        $preference = new Preference();

        // Crear un ítem en la preferencia
        $item = new Item();
        $item->id = 'item-ID-1234';
        $item->title = 'Mi producto';
        $item->currency_id = 'BRL';
        $item->picture_url = 'https://www.mercadopago.com/org-img/MP3/home/logomp3.gif';
        $item->description = 'Descripción del artículo';
        $item->category_id = 'art';
        $item->quantity = 1;
        $item->unit_price = 75.76;
        $preference->items = array($item);

        // Información del pagador
        $payer = new PreferencePayer();
        $payer->name = 'João';
        $payer->surname = 'Silva';
        $payer->email = 'user@email.com';
        $payer->phone = array(
            'area_code' => '11',
            'number' => '4444-4444'
        );
        $payer->identification = array(
            'type' => 'CPF',
            'number' => '19119119100'
        );
        $payer->address = array(
            'street_name' => 'Street',
            'street_number' => 123,
            'zip_code' => '06233200'
        );
        $preference->payer = $payer;

        // URLs de redirección
        $back_urls = array(
            'success' =>  route("procesar.respuesta"),
            'failure' =>  route("procesar.respuesta"),
            'pending' =>  route("procesar.respuesta")
        );
        $preference->back_urls = $back_urls;

        // Configuraciones de pago
        $payment_methods = array(
            'excluded_payment_methods' => [],
            'excluded_payment_types' => [
                array(
                    'id' => "ticket"
                )
            ],
            'installments' => 1
        );
        $preference->payment_methods = $payment_methods;

        // $preference->notification_url = 'https://www.your-site.com/ipn';
        $preference->statement_descriptor = 'MEUNEGOCIO';
        $preference->external_reference = 'Reference_1234';
        $preference->expires = true;
        $preference->expiration_date_from = '2016-02-01T12:00:00.000-04:00';
        $preference->expiration_date_to = '2016-02-28T12:00:00.000-04:00';
        $preferencia = new PreferenceClient($preference);
        // $preference->save();
        dd($preference);
        return redirect()->back()->with('preferenceId', $preferencia->id);
    }


    public function estadoPago(Request $request) {  #requestUri: "/procesar-respuesta-pago?collection_id=1319284021&collection_status=approved&payment_id=1319284021&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=12946912919&preference_id=1530492018-53f07270-d110-46e7-a46c-eb541e69636e&site_id=MLA&processing_mode=aggregator&merchant_account_id=null ◀"
        $_GET['status'];

        $payment_info = $_GET;
        dd($payment_info);
        switch ($payment_info['status']) {
            case 'approved':
                $payment = new Payment();

                $payment->external_reference = $payment_info['external_reference'];
                $payment->status = $payment_info['status'];
                $payment->site_id = $payment_info['site_id'];
                $payment->processing_mode = $payment_info['processing_mode'];
                dd($payment);
                break;

            default:
                # code...
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
