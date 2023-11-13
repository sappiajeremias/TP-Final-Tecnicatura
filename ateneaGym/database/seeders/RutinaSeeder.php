<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rutina;

class RutinaSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        //
        $rutina1 = Rutina::create(['mes' => 'noviembre', 'profesor_id' => 1, 'dia_semana' => 'lunes']);
        $rutina2 = Rutina::create(['mes' => 'noviembre', 'profesor_id' => 1, 'dia_semana' => 'miercoles']);
        $rutina3 = Rutina::create(['mes' => 'noviembre', 'profesor_id' => 1, 'dia_semana' => 'viernes']);
        $rutina4 = Rutina::create(['mes' => 'noviembre', 'profesor_id' => 2, 'dia_semana' => 'martes']);
        $rutina5 = Rutina::create(['mes' => 'noviembre', 'profesor_id' => 2, 'dia_semana' => 'jueves']);
    }
}
