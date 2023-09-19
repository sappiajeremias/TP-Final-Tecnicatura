<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Rutina;

class RutinaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $rutina1 = Rutina::create(['profesor_id'=>1, 'dia_semana'=>'lunes,miercoles,viernes']);
        $rutina2 = Rutina::create(['profesor_id'=>2, 'dia_semana'=>'martes,jueves']);
    }
}
