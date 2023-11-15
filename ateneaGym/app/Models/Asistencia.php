<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asistencia extends Model {
    use HasFactory;
    protected $fillable = [
        'alumno_id',
        'especialidad_id',
        'fecha',
        'estado'
    ];

    public function alumno() {
        return $this->belongsTo(Alumno::class);
    }
    public function especialidad() {
        return $this->belongsTo(Especialidad::class);
    }
}
