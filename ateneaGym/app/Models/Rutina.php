<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Rutina extends Model {
    use HasFactory;
    protected $fillable = [
        'mes',
        'profesor_id',
        'dia_semana'
    ];
    public function profesor() {
        return $this->belongsTo(Profesor::class);
    }
}
