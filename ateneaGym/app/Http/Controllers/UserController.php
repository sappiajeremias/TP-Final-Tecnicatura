<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        $usuarios = User::all();
        return Inertia::render('Administrador/Index', ['usuarios' => $usuarios]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(User $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $id) {
        //
    }
}
