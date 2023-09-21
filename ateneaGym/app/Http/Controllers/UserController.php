<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

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
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class,
            'apellido' => 'required|string|max:255',
            'fecha_nac' => 'required|date|max:255',
            'dni' => 'required|integer|unique:' . User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'apellido' => $request->apellido,
            'dni' => $request->dni,
            'fecha_nac' => $request->fecha_nac,
            'password' => Hash::make($request->password),
        ]);

        // event(new Registered($user));

        // Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
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
