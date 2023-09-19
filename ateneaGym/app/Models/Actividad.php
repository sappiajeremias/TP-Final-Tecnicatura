<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;
    protected $fillable = [
        'dia_semana',
        'hora_inicio',
        'hora_fin',
        'duracion',
        'descripcion',
        'profesor_id'
    ];
}
