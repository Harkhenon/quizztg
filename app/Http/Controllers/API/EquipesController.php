<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Models\Equipes;
use App\Http\Resources\EquipesResource;
use Illuminate\Support\Facades\Validator;

class EquipesController extends BaseController
{
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index() {
        $domains = Equipes::all();
        return $this->sendResponse(
            EquipesResource::collection($domains),
            'Equipes retrieved successfully.'
        );
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function store(Request $request) {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'code_regate' => 'required'
        ]);

        if($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $equipe = Equipes::create($input);

        if(!$equipe) {
            return $this->sendError('Database error', $equipe, 500);
        }

        return $this->sendResponse(
            new EquipesResource($equipe),
             'Equipes created successfully.'
        );
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id) {

        $equipe = Equipes::where('id', $id)->get();
        if (is_null($equipe)) {
            return $this->sendError('Equipes not found.');
        }

        return $this->sendResponse(
            new EquipesResource($equipe),
            'Equipes retrieved successfully.'
        );
    }



    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function update($id, Request $request) {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            'code_regate' => 'required'
        ]);

        if($validator->fails()) {
            return $this->sendError('Validation Error.', $validator->errors());
        }

        $updateEquipes = Equipes::where('id', $id)
                ->update([
                    'name' => $input['name'],
                    'code_regate' => $input['code_regate']
                ]);

        if(!$updateEquipes) {
            return $this->sendError('Database failed', $updateEquipes);
        }

        return $this->sendResponse(
            $updateEquipes,
            'Equipes updated successfully.'
        );

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $fqdn
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, Request $request) {

        $deleteEquipes = Equipes::where('id', $id)->delete();

        if(!$deleteEquipes) {
            return $this->sendError('Database failed', $deleteEquipes);
        }

        return $this->sendResponse(
            $deleteEquipes,
            'Equipes updated successfully.'
        );
    }
}
