<?php

namespace App\Console\Commands;

use App\Models\Actividad;
use App\Models\Turno;
use Carbon\Carbon;
use Illuminate\Console\Command;

class GenerarTurnos extends Command {
    protected $signature = 'turnos:generar';

    protected $description = 'Generar los turnos para el próximo mes';

    public function handle() {
        // Obtiene la fecha actual
        $fecha = Carbon::now();

        // Obtén el primer día del mes siguiente
        $fechaActual = $fecha->firstOfMonth();

        // Obtén el último día del mes siguiente
        $ultimoDiaMes = $fechaActual->copy()->lastOfMonth();

        // Definimos un arreglo con los días de la semana
        $diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];


        // Bucle para generar turnos para cada día del mes
        while ($fechaActual <= $ultimoDiaMes) {
            // devuelve el día en escrito
            $diaActual = $diasSemana[$fechaActual->dayOfWeek];
            // recupera las actividades con el día escrito
            $actividades = Actividad::where('dia_semana', $diaActual)->get();

            // recorre cada actividad recuperada
            foreach ($actividades as $actividad) {
                $horaInicio = Carbon::parse($fechaActual->toDateString() . ' ' . $actividad->hora_inicio);
                $horaFin = Carbon::parse($fechaActual->toDateString() . ' ' . $actividad->hora_fin);
                $horaFin->subMinutes($actividad->duracion);

                // Crea turnos solo si hay cupos disponibles
                $cuposDisponibles = $actividad->cupos - Turno::where('actividad_id', $actividad->id)
                    ->where('fecha', $fechaActual->format('Y-m-d'))
                    ->count();

                // Si hay cupos disponibles, crea los turnos
                if ($cuposDisponibles > 0) {
                    while ($horaInicio->lte($horaFin) && $cuposDisponibles > 0) {
                        $turno = new Turno();
                        $turno->actividad_id = $actividad->id;
                        $turno->fecha = $fechaActual->format('Y-m-d');
                        $turno->hora = $horaInicio->format('H:i');
                        $turno->save();
                        // le suma los minutos de la duración para avanzar

                        $horaInicio->addMinutes($actividad->duracion);
                        $cuposDisponibles--;
                    }
                }
            }

            // Avanzamos al siguiente día para generar turnos para la próxima fecha
            $fechaActual->addDay();
        }

        $this->info('Se han generado los turnos para todo el mes.');
    }
}
