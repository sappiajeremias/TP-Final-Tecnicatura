<?php

namespace App\Console\Commands;

use App\Models\Alumno;
use App\Models\Notificacion;
use App\Models\Pago;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;

class GenerarNotis extends Command {
    protected $signature = 'notificaciones:generar';
    protected $description = 'Notificaciones generadas';

    public function handle() {
        $alumnos = Alumno::all();


        foreach ($alumnos as $alumno) {
            $user = User::find($alumno->user_id);

            // Notificación de bienvenida al usuario
            // if ($user->created_at == $user->updated_at) {
            //     $this->crearNotificacion($user, '¡Bienvenido a AteneaGym!');
            // }

            // Obtener el último pago vigente
            $ultimoPago = $user->pagos()->latest('fecha_vencimiento')->first();


            if ($ultimoPago && Carbon::now()->diffInDays($ultimoPago->fecha_vencimiento, false) <= 7 && $ultimoPago->fecha_vencimiento > now()) {
                $this->crearNotificacion($user, 'Le recordamos que su membresía vence en 7 días. No olvide renovarla.');
            }

            // Notificación de vencimiento del plan
            if ($ultimoPago && $ultimoPago->fecha_vencimiento < now()) {
                $this->crearNotificacion($user, 'Su membresía ha vencido. No olvide renovarla.');
            }
        }

        $this->info('Se han generado las notificaciones.');
    }


    protected function crearNotificacion(User $user, $mensaje) {
        $noti = Notificacion::create([
            'user_id' => $user->id,
            'message' => $mensaje,
        ]);
        $noti->save();
    }
}
