<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\Storage;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(1)->create();
        $postData = Storage::get('data.json');
        $postData = json_decode($postData);

        \App\Models\Etablissements::factory(1)->create();

        $tournees = [];
        $equipes = [];
        foreach($postData as $d) {
            if(!in_array($d->tournee, $tournees)) {
                array_push($tournees, $d->tournee);
            }

            $equipe = str_split($d->tournee, 1)[2];
            if(!in_array($equipe, $equipes)) {
                array_push($equipes, $equipe);
            }
        }

        foreach($equipes as $e) {
            \App\Models\Equipes::factory()->create([
                'number' => $e,
                'etablissements_code_regate' => 315870
            ]);
        }

        foreach($tournees as $t) {
            $equipe = str_split($t, 1);
            \App\Models\Tournees::factory()->create([
                'number' => $t,
                'equipes_number' => $equipe[2]
            ]);
        }

        foreach($postData as $d):
            \App\Models\Rues::factory()->create([
                'name' => $d->streetName,
                'fullStreetName' => $d->fullStreetName,
                'tournees_number' => $d->tournee,
                'options' => (function() use ($d) {
                    if(!isset($d->options)) {
                        return "";
                    }
                    return $d->options;
                })()
            ]);
        endforeach;
    }
}
