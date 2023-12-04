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
        $rutina1 = Rutina::create(['nombre'=>'Piernas','mes' => 'noviembre','dificultad'=>'Facil','profesor_id' => 1, 'dia_semana' => 'lunes']);
        $rutina2 = Rutina::create(['nombre'=>'Empuje','mes' => 'noviembre','dificultad'=>'Medio', 'profesor_id' => 1, 'dia_semana' => 'miercoles']);
        $rutina3 = Rutina::create(['nombre'=>'Fullbody','mes' => 'noviembre','dificultad'=>'Medio', 'profesor_id' => 1, 'dia_semana' => 'viernes']);
        $rutina4 = Rutina::create(['nombre'=>'Cardio','mes' => 'noviembre','dificultad'=>'Dificil', 'profesor_id' => 2, 'dia_semana' => 'martes']);
        $rutina5 = Rutina::create(['nombre'=>'Espalda y Bíceps','mes' => 'noviembre','dificultad'=>'Dificil', 'profesor_id' => 2, 'dia_semana' => 'jueves']);
    }
}
