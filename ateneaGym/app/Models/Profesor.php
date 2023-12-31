<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'matricula'
    ];

    public function usuario()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}
