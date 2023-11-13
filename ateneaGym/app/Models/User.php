<?php

namespace App\Models;

/* use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;*/

use Spatie\Permission\Traits\HasRoles;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Models\Role;

class User extends Authenticatable {
    use HasApiTokens, HasFactory, Notifiable;
    use HasRoles;
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'apellido',
        'dni',
        'fecha_nac',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];
    public function rol() {
        $roles = $this->getRoleNames()->toArray();
        return $roles;
    }
    public function getRoles() {
        return $this->getRoleNames();
    }

    public function pagos() {
        return $this->hasMany(Pago::class);
    }
    public function ultimoPago() {
        $pagosOrdenados = $this->pagos()->get()->sortByDesc('fecha_vencimiento');

        $pagoReciente = $pagosOrdenados->first();
        return $pagoReciente;
    }
    public function membresiaActual() {

        // $pagosOrdenados = $this->pagos()->get()->sortByDesc('fecha_vencimiento');
        $pagoReciente = $this->ultimoPago();
        return ['pago' => $pagoReciente, 'membresia' => $pagoReciente->membresia];
    }

    public function pagosAlumno() {
        return $this->hasMany(Pago::class);
    }
    
}
