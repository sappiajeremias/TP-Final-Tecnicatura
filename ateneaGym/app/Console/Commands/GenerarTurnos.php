<?php

namespace App\Console\Commands;

use App\Models\Actividad;
use App\Models\Turno;
use Carbon\Carbon;
use Illuminate\Console\Command;

class GenerarTurnos extends Command {
    protected $signature = 'turnos:generar';

    protected $description = 'Generar los turnos para la próxima semana';


    public function handle() {
        // Obtiene la fecha actual
        $fecha = Carbon::now();
        // comienzo de la semana de la fecha actual
        $fechaActual = $fecha->startOfWeek();


        // Definimos un arreglo con los días de la semana
        $diasSemana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];

        // Bucle para generar turnos para cada día de la semana
        for ($i = 0; $i < 7; $i++) {
            // devuelve el dia en escrito
            $diaActual = $diasSemana[$fechaActual->dayOfWeek];
            // recupera las actividades con el dia escrito
            $actividades = Actividad::where('dia_semana', $diaActual)->get();

            // recorre cada actividad recuperada
            foreach ($actividades as $actividad) {
                $horaInicio = Carbon::parse($fechaActual->toDateString() . ' ' . $actividad->hora_inicio);
                $horaFin = Carbon::parse($fechaActual->toDateString() . ' ' . $actividad->hora_fin);

                // 
                while ($horaInicio->lte($horaFin)) {
                    // crea cada turno con el id de actividad la fecha y la hora 
                    for ($i = 0; $i < $actividad->cupos; $i++) {


                        $turno = new Turno();
                        $turno->actividad_id = $actividad->id;
                        $turno->fecha = $fechaActual->format('Y-m-d');
                        $turno->hora = $horaInicio->format('H:i');
                        $turno->save();
                        // le suma los minutos de la duracion para avanzar
                        $horaInicio->addMinutes($actividad->duracion);
                    }
                }
            }

            // Avanzamos al siguiente día para generar turnos para la próxima fecha 

            $fechaActual->addDay();
        }

        $this->info('Se han generado los turnos para la semana actual y la próxima semana.');
    }
}
