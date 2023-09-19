<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        /*$this->call(RoleSeeder::class);
        $this->call(EjercicioSeeder::class);
        $this->call(UserSeeder::class);
        $this->call(AlumnoSeeder::class);
        $this->call(ProfesorSeeder::class);
        $this->call(EspecialidadSeeder::class);
        $this->call(EspecialidadProfesorSeeder::class);
        $this->call(ActividadSeeder::class);
        $this->call(TurnoSeeder::class);
        $this->call(RutinaSeeder::class);
        $this->call(RutinaAlumnoSeeder::class);*/
        $this->call(EjercicioRutinaSeeder::class);
        $this->call(MembresiaSeeder::class);
        $this->call(PagoSeeder::class);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
