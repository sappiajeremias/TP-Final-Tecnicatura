<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\NotificacionController;
use Inertia\Inertia;

class LoadNotifications {
    public function handle($request, Closure $next) {
       
        $notificaciones = (new NotificacionController())->index();
        // dd($notificaciones);
        // Comparte las notificaciones con todas las vistas
        Inertia::share('notificaciones', $notificaciones);

        return $next($request);
    }
}
