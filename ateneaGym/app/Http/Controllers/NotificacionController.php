<?php

namespace App\Http\Controllers;

use App\Models\Notificacion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NotificacionController extends Controller {
    public function index() {
        $notificaciones = Notificacion::where('read_at', null)->get(); // Puedes ajustar esto según tus necesidades

        return $notificaciones;
    }
    public function marcarLeida($id) {
        $noti = Notificacion::find($id);

        if ($noti) {
            $noti->read_at = Carbon::now();
            $noti->save();
        }
    }
}
