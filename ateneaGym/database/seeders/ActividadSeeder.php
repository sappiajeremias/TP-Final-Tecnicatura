<?php

namespace Database\Seeders;

use App\Models\Actividad;
use Illuminate\Database\Seeder;

class ActividadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $actividad1 = Actividad::create([
            'dia_semana' => 'lunes',
            'hora_inicio' => '09:00',
            'hora_fin' => '10:00',
            'duracion' => 60,
            'cupos' => 5,
            'especialidad_id' => 2,
            'profesor_id' => 1,
        ]);
        // Set the 'dia_semana' attribute separately as an array

        $actividad2 = Actividad::create([
            'dia_semana' => 'martes',
            'hora_inicio' => '09:00',
            'hora_fin' => '11:00',
            'duracion' => 60,
            'cupos' => 5,
            'especialidad_id' => 2,
            'profesor_id' => 1,
        ]);
        $actividad3 = Actividad::create([
            'dia_semana' => 'martes',
            'hora_inicio' => '19:00',
            'hora_fin' => '20:00',
            'duracion' => 60,
            'cupos' => 5,
            'especialidad_id' => 2,
            'profesor_id' => 1,
        ]);

        // Set the 'dia_semana' attribute separately as an array
        $actividad4 = Actividad::create([
            'dia_semana' => 'viernes',
            'hora_inicio' => '11:00',
            'hora_fin' => '12:00',
            'duracion' => 60,
            'cupos' => 5,
            'especialidad_id' => 3,
            'profesor_id' => 2,
        ]);
        $actividad5 = Actividad::create([
            'dia_semana' => 'miercoles',
            'hora_inicio' => '12:00',
            'hora_fin' => '15:00',
            'duracion' => 60,
            'cupos' => 3,
            'especialidad_id' => 7,
            'profesor_id' => 4,
        ]);
        $actividad6 = Actividad::create([
            'dia_semana' => 'jueves',
            'hora_inicio' => '17:00',
            'hora_fin' => '19:00',
            'duracion' => 60,
            'cupos' => 3,
            'especialidad_id' => 5,
            'profesor_id' => 3,
        ]);
        $actividad = Actividad::create([
            'dia_semana' => 'martes',
            'hora_inicio' => '17:00',
            'hora_fin' => '19:00',
            'duracion' => 60,
            'cupos' => 3,
            'especialidad_id' => 4,
            'profesor_id' => 3,
        ]);
        $actividad6 = Actividad::create([
            'dia_semana' => 'jueves',
            'hora_inicio' => '17:00',
            'hora_fin' => '19:00',
            'duracion' => 60,
            'cupos' => 3,
            'especialidad_id' => 6,
            'profesor_id' => 3,
        ]);
    }
}
