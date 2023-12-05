<?php

namespace Database\Seeders;

use App\Models\Asistencia;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AsistenciaSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $asistencia1 = Asistencia::create([
            'alumno_id' => 1,
            'especialidad_id' => 2,
            'fecha' => date('2023-10-02'),
            'estado' => 'presente'
        ]);
        $asistencia1 = Asistencia::create([
            'alumno_id' => 1,
            'especialidad_id' => 2,
            'fecha' => date('2023-10-04'),
            'estado' => 'presente'
        ]);
        $asistencia1 = Asistencia::create([
            'alumno_id' => 2,
            'especialidad_id' => 3,
            'fecha' => date('2023-10-06'),
            'estado' => 'presente'
        ]);
    }
}
