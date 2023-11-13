<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EjercicioRutina extends Model
{
    use HasFactory;
    protected $fillable = [
        'ejercicio_id',
        'rutina_id',
        'repeticiones',
        'series',
        'adicional'
    ];
    public function ejercicio(){
        return $this->belongsTo(Ejercicio::class);
    }
}
