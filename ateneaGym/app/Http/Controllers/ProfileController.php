<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller {
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response {
        $membresia = $this->membresia();
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'), 'membresia' => $membresia
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
    public function membresia() {
        $user = new User();

        $user = User::find(Auth::user()->id);
        $ultimaMembresia = $user->membresiaActual();
        // dd($ultimaMembresia);
        return $ultimaMembresia;
        // return Inertia::render('Profile/Edit',  ['membresia' => $ultimaMembresia]);
        // return Inertia::render('profile.edit', ['membresia' => $ultimaMembresia]);
    }

    public function diasDisponibles (String $idUser) {
        $user = new User();
        $user = User::find(Auth::user()->id);
        $pagos = $user->ultimoPago();
return $pagos->dias_disponibles;
//      return response()->json(['diasDisp' => $pagos->dias_disponibles]);
    }
}
