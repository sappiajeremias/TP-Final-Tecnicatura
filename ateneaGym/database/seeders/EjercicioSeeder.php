<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ejercicio;
use Illuminate\Support\Facades\DB;

class EjercicioSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        //
        {
            $jsonString = file_get_contents(database_path('seeders/ejercicios.json'));
            $ejercicios = json_decode($jsonString, true);
            $contador = 0;
            foreach ($ejercicios as $ejercicio) {
                if ($contador < 21) {
                    DB::table('ejercicios')->insert([
                        'parte_cuerpo' => $ejercicio['bodyPart'],
                        'imagen' => $ejercicio['gifUrl'],
                        'nombre' => $ejercicio['name'],
                        'musculo' => $ejercicio['target'],
                    ]);
                }
                $contador++;
            }
        }
    }
}
