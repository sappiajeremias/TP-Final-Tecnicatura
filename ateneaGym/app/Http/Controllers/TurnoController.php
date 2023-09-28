<?php

namespace App\Http\Controllers;

use App\Models\Turno;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TurnoController extends Controller {
    public function index() {
        return Inertia::render('Turnos/Index', ['turnos' => Turno::all()]);
    }
    public function store(Request $request) {
    }
    public function update(Request $request, Turno $turno) {
    }
    public function destroy(Turno $turno) {
    }
}
