<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tournees', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->integer('number')->index();
            $table->integer('equipes_number');
            $table->timestamps();
        });


        Schema::table('tournees', function (Blueprint $table) {
            $table->foreign('equipes_number')->references('number')->on('equipes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tournees');
    }
};
