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
        Schema::create('equipes', function (Blueprint $table) {
            $table->id()->autoIncrement();
            $table->integer('number')->index();
            $table->integer('etablissements_code_regate');
            $table->timestamps();
        });


        Schema::table('equipes', function (Blueprint $table) {
            $table->foreign('etablissements_code_regate')
                  ->references('code_regate')
                  ->on('etablissements');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('equipes');
    }
};
