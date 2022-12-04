<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\EtablissementsController;
use App\Http\Controllers\API\EquipesController;
use App\Http\Controllers\API\TourneesController;
use App\Http\Controllers\API\RuesController;
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/create-personal-token', function () {

    $user = new App\Models\User();

    $token = $user->createToken('Harkhenon')->accessToken;
    echo $token;

    });

Route::middleware('auth:api')->group( function () {

});
Route::resource('etablissements', EtablissementsController::class);
Route::resource('equipes', EquipesController::class);
Route::resource('tournees', TourneesController::class);
Route::resource('rues', RuesController::class);
Route::resource('user', UserController::class);
Route::post('login', [RegisterController::class, 'login']);
