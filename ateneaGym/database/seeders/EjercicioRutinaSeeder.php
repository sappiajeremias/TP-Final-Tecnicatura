<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\EjercicioRutina;

class EjercicioRutinaSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        //
        $ejercicioRutina1 = EjercicioRutina::create(['ejercicio_id' => 1, 'rutina_id' => 1, 'repeticiones' => 15, 'series' => 4, 'adicional' => '', 'peso' => 10]);
        $ejercicioRutina2 = EjercicioRutina::create(['ejercicio_id' => 2, 'rutina_id' => 1, 'repeticiones' => 12, 'series' => 5, 'adicional' => '', 'peso' => 20]);
        $ejercicioRutina3 = EjercicioRutina::create(['ejercicio_id' => 3, 'rutina_id' => 2, 'repeticiones' => 15, 'series' => 4, 'adicional' => '', 'peso' => 10]);
        $ejercicioRutina4 = EjercicioRutina::create(['ejercicio_id' => 4, 'rutina_id' => 2, 'repeticiones' => 20, 'series' => 5, 'adicional' => '', 'peso' => 10]);
    }
}
