<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pago extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'membresia_id',
        'fecha_vencimiento',
        'medio_pago',
        'dias_disponibles'
    ];
}
