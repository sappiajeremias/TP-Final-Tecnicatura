<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RutinaAlumno extends Model {
    use HasFactory;
    protected $fillable = [
        'alumno_id',
        'rutina_id',
    ];

    public function rutinas() {
        return $this->hasMany(Rutina::class, 'rutina_id');
    }
}
