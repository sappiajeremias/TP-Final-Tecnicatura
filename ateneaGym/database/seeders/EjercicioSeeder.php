<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Ejercicio;
class EjercicioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $ejercicio1 = Ejercicio::create(['nombre'=>'Press Banco Plano', 'descripcion'=>'Con la barra olímpica, levantar y bajar a la altura del centro del pecho.', 'musculo'=>'Pectorales']);
        $ejercicio2 = Ejercicio::create(['nombre'=>'Sentadillas', 'descripcion'=>'Con la barra olímpica detras de la cabeza, subir y bajar con la espalda recta.', 'musculo'=>'Piernas']);
        $ejercicio3 = Ejercicio::create(['nombre'=>'Curl de biceps en banco Scott', 'descripcion'=>'En el banco Scott y con la barra Z, levantar y bajar la misma sin despegar el cuerpo.', 'musculo'=>'Bicep']);
        $ejercicio4 = Ejercicio::create(['nombre'=>'Remo con barra', 'descripcion'=>'Levantar la barra a la altura del centro del pecho con el cuerpo en 90° grados.', 'musculo'=>'Dorsales']);
    }
}
