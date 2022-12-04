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
        Schema::create('rues', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->text('name');
            $table->integer('tournees_number');
            $table->text('fullStreetName');
            $table->text('options')->nullable();
            $table->timestamps();
        });

        Schema::table('rues', function (Blueprint $table) {
            $table->foreign('tournees_number')->references('number')->on('tournees');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('rues');
    }
};
