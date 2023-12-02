<?php

namespace Database\Seeders;

use App\Models\EspecialidadProfesor;
use Illuminate\Database\Seeder;

class EspecialidadProfesorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $especialidadProfesor1 = EspecialidadProfesor::create(['profesor_id' => 1, 'especialidad_id' => 2]);
        $especialidadProfesor2 = EspecialidadProfesor::create(['profesor_id' => 1, 'especialidad_id' => 4]);
        $especialidadProfesor3 = EspecialidadProfesor::create(['profesor_id' => 2, 'especialidad_id' => 1]);
        $especialidadProfesor4 = EspecialidadProfesor::create(['profesor_id' => 2, 'especialidad_id' => 3]);
        $especialidadProfesor5 = EspecialidadProfesor::create(['profesor_id' => 3, 'especialidad_id' => 6]);
        $especialidadProfesor6 = EspecialidadProfesor::create(['profesor_id' => 3, 'especialidad_id' => 5]);
        $especialidadProfesor7 = EspecialidadProfesor::create(['profesor_id' => 4, 'especialidad_id' => 7]);
    }
}
