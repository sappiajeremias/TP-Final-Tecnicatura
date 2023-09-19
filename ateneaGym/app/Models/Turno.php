<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    use HasFactory;
    protected $fillable = [
        'alumno_id',
        'actividad_id',
        'fecha',
        'hora'
    ];
}
