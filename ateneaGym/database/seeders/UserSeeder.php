<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;
class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $user1 = User::create([
            'name' => 'Admin',
            'apellido' => 'Gym',
            'dni' => 41978161,
            'fecha_nac' => date('1999-10-28'),
            'email' => 'jeremias@gmail.com',
            'email_verified_at' =>  now(),
            'password' => bcrypt('1234')
          ])->assignRole('Administrador');
        $user2 = User::create([
            'name' => 'Jeremias',
            'apellido' => 'Sappia',
            'dni' => 41978162,
            'fecha_nac' => date('1999-10-28'),
            'email' => 'profesor1@gmail.com',
            'email_verified_at' =>  now(),
            'password' => bcrypt('1234')
          ])->assignRole('Profesor');
        $user3 = User::create([
            'name' => 'Agustina',
            'apellido' => 'Rossi',
            'dni' => 41978163,
            'fecha_nac' => date('1998-10-28'),
            'email' => 'profesor2@gmail.com',
            'email_verified_at' =>  now(),
            'password' => bcrypt('1234')
          ])->assignRole('Profesor');
        $user4 = User::create([
            'name' => 'Maria',
            'apellido' => 'Rossi',
            'dni' => 41978164,
            'fecha_nac' => date('1985-10-28'),
            'email' => 'alumno1@gmail.com',
            'email_verified_at' =>  now(),
            'password' => bcrypt('1234')
          ])->assignRole('Alumno');
        $user5 = User::create([
            'name' => 'Teo',
            'apellido' => 'Sappia',
            'dni' => 41978165,
            'fecha_nac' => date('2002-10-28'),
            'email' => 'alumno2@gmail.com',
            'email_verified_at' =>  now(),
            'password' => bcrypt('1234')
          ])->assignRole('Alumno');
    }
}
