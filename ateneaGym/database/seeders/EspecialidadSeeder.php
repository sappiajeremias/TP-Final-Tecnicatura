<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Especialidad;

class EspecialidadSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $especialidad = Especialidad::create(['descripcion' => 'Musculacion']);
        //
        $especialidad1 = Especialidad::create(['descripcion' => 'Funcional']);
        $especialidad2 = Especialidad::create(['descripcion' => 'GAP']);
        $especialidad3 = Especialidad::create(['descripcion' => 'Yoga']);
        $especialidad4 = Especialidad::create(['descripcion' => 'Spinning']);
        $especialidad5 = Especialidad::create(['descripcion' => 'Pilates']);
        $especialidad6 = Especialidad::create(['descripcion' => 'P.F. Boxeo']);
    }
}
