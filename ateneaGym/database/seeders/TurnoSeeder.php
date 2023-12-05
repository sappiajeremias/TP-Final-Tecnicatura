<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Turno;

class TurnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $turno1 = Turno::create(['alumno_id' => 1, 'actividad_id' => 2, 'fecha'=>date('2023-10-02'), 'hora'=>'09:00']);
        $turno2 = Turno::create(['alumno_id' => 1, 'actividad_id' => 3, 'fecha'=>date('2023-10-04'), 'hora'=>'10:00']);
        $turno3 = Turno::create(['alumno_id' => 5, 'actividad_id' => 4, 'fecha'=>date('2023-10-06'), 'hora'=>'11:00']);
        // $turno4 = Turno::create(['alumno_id' => null, 'actividad_id' => 2, 'fecha'=>date('2023-10-03'), 'hora'=>'09:00']);
        // $turno5 = Turno::create(['alumno_id' => null, 'actividad_id' => 2, 'fecha'=>date('2023-10-05'), 'hora'=>'09:00']);
        // $turno6 = Turno::create(['alumno_id' => null, 'actividad_id' => 2, 'fecha'=>date('2023-10-03'), 'hora'=>'10:00']);
        // $turno7 = Turno::create(['alumno_id' => null, 'actividad_id' => 2, 'fecha'=>date('2023-10-05'), 'hora'=>'10:00']);
        // $turno8 = Turno::create(['alumno_id' => null, 'actividad_id' => 3, 'fecha'=>date('2023-10-06'), 'hora'=>'11:00']);
    }
}
