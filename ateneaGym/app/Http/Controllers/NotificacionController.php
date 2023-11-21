<?php

namespace App\Http\Controllers;

use App\Models\Notificacion;
use Illuminate\Http\Request;

class NotificacionController extends Controller {
    public function index() {
        $user = auth()->user();
        $notifications = Notificacion::where('user_id', $user->id)->orderByDesc('created_at')->get();

        return inertia('Notifications', ['notifications' => $notifications]);
    }
}
