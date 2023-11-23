<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Rutina extends Model {
    use HasFactory;
    protected $fillable = [
        'nombre',
        'mes',
        'dificultad',
        'profesor_id',
        'dia_semana'
    ];
    public function profesor() {
        return $this->belongsTo(Profesor::class);
    }
    public function ejercicios() {
        return $this->belongsToMany(Ejercicio::class, 'ejercicio_rutinas', 'rutina_id', 'ejercicio_id');
    }
}
