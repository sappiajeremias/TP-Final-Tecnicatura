<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Profesor;

class ProfesorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $profesor1 = Profesor::create(['user_id' => 2, 'matricula' => '24A5S8D74S1']);
        $profesor2 = Profesor::create(['user_id' => 3, 'matricula' => 'SDFA45SD4F1']);
        $profesor3 = Profesor::create(['user_id' => 12, 'matricula' => '3DSFFSD4566']);
        $profesor4 = Profesor::create(['user_id' => 13, 'matricula' => '456FDSEESFSA']);
    }
}
