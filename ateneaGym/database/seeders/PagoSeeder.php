<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pago;
use Carbon\Carbon;

class PagoSeeder extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        //
        $pago1 = Pago::create(['user_id' => 4, 'dias_disponibles' => 12, 'membresia_id' => 2, 'fecha_vencimiento' => date('2023-09-18'), 'medio_pago' => 'Debito', 'estado' => 'approved']);
        $pago1 = Pago::create(['user_id' => 4, 'dias_disponibles' => 12, 'membresia_id' => 2, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Debito', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 5, 'dias_disponibles' => 12, 'membresia_id' => 2, 'fecha_vencimiento' => date('2023-09-18'), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 6, 'dias_disponibles' => 10, 'membresia_id' => 2, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 7, 'dias_disponibles' => 12, 'membresia_id' => 2, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 8, 'dias_disponibles' => 16, 'membresia_id' => 3, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 9, 'dias_disponibles' => 8, 'membresia_id' => 2, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 10, 'dias_disponibles' => 2, 'membresia_id' => 1, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
        $pago2 = Pago::create(['user_id' => 11, 'dias_disponibles' => 5, 'membresia_id' => 2, 'fecha_vencimiento' => Carbon::now()->addWeek(), 'medio_pago' => 'Efectivo', 'estado' => 'approved']);
    }
}
