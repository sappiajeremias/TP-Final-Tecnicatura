<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Actividad;

class ActividadSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        //
        $actividad1 = Actividad::create([
            'dia_semana' => 'lunes,miercoles,viernes',
            'hora_inicio' => '09:00',
            'hora_fin' => '10:00',
            'duracion' => 60,
            'cupos' => 10,
            'especialidad_id' => 1,
            'profesor_id' => 1,
        ]);
        // Set the 'dia_semana' attribute separately as an array

        $actividad2 = Actividad::create([
            'dia_semana' => 'martes,jueves',
            'hora_inicio' => '09:00',
            'hora_fin' => '11:00',
            'duracion' => 60,
            'cupos' => 10,
            'especialidad_id' => 2,
            'profesor_id' => 1,
        ]);

        // Set the 'dia_semana' attribute separately as an array
        $actividad3 =  Actividad::create([
            'dia_semana' => 'viernes',
            'hora_inicio' => '11:00',
            'hora_fin' => '12:00',
            'duracion' => 60,
            'cupos' => 10,
            'especialidad_id' => 3,
            'profesor_id' => 2,
        ]);
    }
}
