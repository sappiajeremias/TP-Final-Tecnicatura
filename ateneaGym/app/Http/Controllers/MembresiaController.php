<?php

namespace App\Http\Controllers;

use App\Models\Membresia;
use App\Models\Pago;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembresiaController extends Controller {
    public function index() {
        $membresias = Membresia::all();
        $pagos = Pago::all();
        return Inertia::render('Membresia/Index', ['membresias' => $membresias, 'pagos' => $pagos]);
    }


    public function store(Request $request) {
    }

    public function show(Request $request)
    {
        return Inertia::render('Pago/Index', [
            'membresia_id' => $request->membresia_id
        ]);
    }
    public function update(Request $request, Membresia $membresia) {
    }
    public function destroy(Membresia $membresia) {
    }
}
