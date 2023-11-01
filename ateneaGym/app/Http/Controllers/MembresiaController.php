<?php

namespace App\Http\Controllers;

use App\Models\Membresia;
use App\Models\Pago;
use Illuminate\Http\Request;
use Inertia\Inertia;
use MercadoPago\Client\Preference\PreferenceClient;
use MercadoPago\MercadoPagoConfig;
use MercadoPago\Resources\Preference;
use MercadoPago\Resources\Preference\Item;

class MembresiaController extends Controller
{
    public function index()
    {
        $membresias = Membresia::all();
        $pagos = Pago::all();
        return Inertia::render('Membresia/Index', ['membresias' => $membresias, 'pagos' => $pagos]);
    }


    public function store(Request $request)
    {
    }

    public function show(Request $request)
    {
        $membresia = Membresia::where('id', $request->membresia_id)->first();

        MercadoPagoConfig::setAccessToken(config('services.mercadopago.token'));

        $preference = new Preference();

        $item = new Item();
        $item->title = $membresia->descripcion;
        $item->quantity = 1;
        $item->currency_id = 'ARS';
        $item->unit_price = $membresia->valor;

        $preference->items = array($item);
        $preference->back_urls = array(
            "success" => route('procesar.respuesta.pago'),
            "failure" => route('procesar.respuesta.pago'),
            "pending" => route('procesar.respuesta.pago')
        );
        // $preference->auto_return = "approved";
        // $response = array(
        //     'id' => $preference->id,
        // );

        // echo json_encode($response);
        // $preference->save();
        $client = new PreferenceClient();

        $cliente = $client->create([
            $preference

        ]);
        // dd($cliente);
        return Inertia::render('Pago/Index', ['preference' => $cliente]);
    }
    public function procesarPago(Request $request)
    {  #requestUri: "/procesar-respuesta-pago?collection_id=1319284021&collection_status=approved&payment_id=1319284021&status=approved&external_reference=null&payment_type=account_money&merchant_order_id=12946912919&preference_id=1530492018-53f07270-d110-46e7-a46c-eb541e69636e&site_id=MLA&processing_mode=aggregator&merchant_account_id=null ◀"
       $_GET['status'];


        dd($_GET['status']);
        switch ($_GET['status']) {
            case 'aproved':
                # code...
                break;
            
            default:
                # code...
                break;
        }
    }
    public function update(Request $request, Membresia $membresia)
    {
    }
    public function destroy(Membresia $membresia)
    {
    }
}
