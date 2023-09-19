<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Alumno;

class AlumnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $alumno1 = Alumno::create(['user_id' => 4]);
        $alumno2 = Alumno::create(['user_id' => 5]);
    }
}
