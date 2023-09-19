<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EspecialidadProfesor;


class EspecialidadProfesorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $especialidadProfesor1 = EspecialidadProfesor::create(['profesor_id'=> 1, 'especialidad_id'=> 1]);
        $especialidadProfesor2 = EspecialidadProfesor::create(['profesor_id'=> 1, 'especialidad_id'=>2]);
        $especialidadProfesor3 = EspecialidadProfesor::create(['profesor_id'=> 2, 'especialidad_id'=>3]);
    }
}
