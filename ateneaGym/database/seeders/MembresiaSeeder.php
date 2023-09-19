<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Membresia;

class MembresiaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $membresia1 = Membresia::create(['descripcion'=>'Bronce', 'valor'=>8000, 'dias_disponibles'=>2]);
        $membresia2 = Membresia::create(['descripcion'=>'Oro', 'valor'=>10000, 'dias_disponibles'=>3]);
        $membresia3 = Membresia::create(['descripcion'=>'Diamante', 'valor'=>15000, 'dias_disponibles'=>5]);
    }
}
