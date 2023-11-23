<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\NotificacionController;
use Inertia\Inertia;

class LoadNotifications {
    public function handle($request, Closure $next) {
        // Verifica si el usuario está autenticado
        // dd('hola');
        // dd(Auth::authenticate()
        // $isLoggedIn = Auth::check();

        // Si está autenticado, obtén las notificaciones, de lo contrario, establece las notificaciones como vacías
        $notificaciones = (new NotificacionController())->index();
        // dd($notificaciones);
        // Comparte las notificaciones con todas las vistas
        Inertia::share('notificaciones', $notificaciones);

        return $next($request);
    }
}
