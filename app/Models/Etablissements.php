<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Equipes;

class Etablissements extends Model
{
    use HasFactory;

    protected $with = ['equipes'];

    public function equipes() {
        return $this->hasMany(Equipes::class, 'etablissements_code_regate', 'code_regate');
    }
}
