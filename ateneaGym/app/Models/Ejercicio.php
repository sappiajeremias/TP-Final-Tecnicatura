<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ejercicio extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'descripcion',
        'parte_cuerpo',
        'musculo',
        'imagen'
    ];
}
