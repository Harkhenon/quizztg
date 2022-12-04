<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Tournees;

class Equipes extends Model
{
    use HasFactory;

    protected $with = ['tournees'];

    public function tournees() {
        return $this->hasMany(Tournees::class, 'equipes_number', 'number');
    }
}
