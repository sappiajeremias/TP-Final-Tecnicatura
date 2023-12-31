<?php

namespace App\Http\Controllers;

use App\Models\Membresia;
use App\Models\Pago;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Resources\Preference;
use MercadoPago\Resources\Preference\Item;
use MercadoPago\Resources\Preference\Payer;

class MembresiaController extends Controller {
    public function index() {
        $membresias = Membresia::all();
        $pagos = Pago::all();
        return Inertia::render('Membresia/Index', ['membresias' => $membresias, 'pagos' => $pagos]);
    }


    public function store(Request $request) {
    }

    public function realizarPago(Request $request) {
        $ultimoPago = Auth::user()->ultimoPago();
        $aux = true;
        // dd((!empty($ultimoPago) && (Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 3)));
        if (!empty($ultimoPago)) {
            if ((Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 3) == false) {
                // dd('pago no vencido')
                return back()->withErrors(['message' => 'Todavía no se ha vencido su membresía.']);
            }
        }

        if ($aux) {
            $membresia = Membresia::where('id', $request->membresia_id)->first();
            MercadoPagoConfig::setAccessToken('TEST-1348754680884105-110109-6707e699579e65cd614043f0f8f76ce8-1530492018');

            $preference = new Preference;
            $item = new Item();
            $item->id = $membresia->id;
            $item->title = $membresia->descripcion;
            $item->quantity = 1;
            $item->currency_id = 'ARS';
            $item->unit_price = $membresia->valor;
            //    $payer = new Payer();
            //     $payer->name = Auth()->user() ->name;
            //     // $payer->surname = 'Silva';
            //     $payer->email = Auth()->user()->email;
            $preference->items = array($item);
            $preference->back_urls = array(
                "success" => route('procesar.respuesta'),
                "failure" => route('procesar.respuesta'),
                "pending" => route('procesar.respuesta')
            );
            $valorTotal = 0;
            foreach ($preference->items as $item) {
                $valorTotal += $item->unit_price;
            }
            $preference->total_amount = $valorTotal;

            $client = new PreferenceClient();
            $cliente = $client->create([
                $preference
            ]);
            return Inertia::render('Pago/Index', ['preference' => $cliente]);
        }
    }

    public function update(Request $request, Membresia $membresia) {
    }
    public function destroy(Membresia $membresia) {
    }
    public function verificarMembresiaActiva() {
        $user = Auth::user();
        if ($user) {
            $ultimoPago = $user->ultimoPagoVigente();
            return $ultimoPago;
        } else {
            return null;
        }
    }
}
