<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pago;

class PagoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $pago1 = Pago::create(['user_id'=>4,'dias_disponibles'=>12, 'membresia_id'=>2, 'fecha_vencimiento' => date('2023-09-18'), 'medio_pago'=>'Debito']);
        $pago2 = Pago::create(['user_id'=>5,'dias_disponibles'=>12, 'membresia_id'=>2, 'fecha_vencimiento' => date('2024-09-18'), 'medio_pago'=>'Efectivo']);
    }
}
