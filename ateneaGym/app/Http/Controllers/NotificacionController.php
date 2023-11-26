<?php

namespace App\Http\Controllers;

use App\Models\Notificacion;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NotificacionController extends Controller {


    public function index() {
        if (auth()->check()) {
            $user = auth()->user()->id;
            $notificaciones = Notificacion::where('read_at', null)->where('user_id', $user)->get();
            return $notificaciones;
        } else {
            return null;
        }
    }

    public function marcarLeida($id) {
        $noti = Notificacion::find($id);

        if ($noti) {
            $noti->read_at = Carbon::now();
            $noti->save();
        }
    }
    public function generarNoti() {
        $user = Auth()->user();
        $ultimoPago = $user->pagos()->latest('fecha_vencimiento')->first();
        if ($ultimoPago && Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 7 && $ultimoPago->fecha_vencimiento > now()) {
            $noti = Notificacion::create([
                'user_id' => $user->id,
                'message' => 'Le recordamos que su membresía vence en 7 días. No olvide renovarla.',
            ]);
            $noti->save();
        }

        // Notificación de vencimiento del plan
        if ($ultimoPago && $ultimoPago->fecha_vencimiento < now()) {
            $noti = Notificacion::create([
                'user_id' => $user->id,
                'message' => 'Su membresía ha vencido. No olvide renovarla.',
            ]);
            $noti->save();
        }
    }
}
