<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Rues;

class Tournees extends Model
{
    use HasFactory;

    protected $with = ['rues'];

    public function rues() {
        return $this->hasMany(Rues::class, 'tournees_number', 'number');
    }
}
