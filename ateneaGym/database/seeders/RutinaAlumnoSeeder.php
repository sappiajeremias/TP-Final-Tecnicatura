<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\RutinaAlumno;

class RutinaAlumnoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $rutinaAlumno1 = RutinaAlumno::create(['alumno_id'=>1, 'rutina_id'=>1]);
        $rutinaAlumno2 = RutinaAlumno::create(['alumno_id'=>2, 'rutina_id'=>2]);
    }
}
