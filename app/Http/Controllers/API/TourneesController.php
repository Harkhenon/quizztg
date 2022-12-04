<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Models\Tournees;
use App\Http\Resources\TourneesResource;
use Illuminate\Support\Facades\Validator;

class TourneesController extends BaseController {
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index() {
        $domains = Tournees::all();
        return $this->sendResponse(
            TourneesResource::collection($domains),
            'Tournees retrieved successfully.'
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

        $tournee = Tournees::create($input);

        if(!$tournee) {
            return $this->sendError('Database error', $tournee, 500);
        }

        return $this->sendResponse(
            new TourneesResource($tournee),
             'Tournees created successfully.'
        );
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id) {

        $tournee = Tournees::where('id', $id)->get();
        if (is_null($tournee)) {
            return $this->sendError('Tournees not found.');
        }

        return $this->sendResponse(
            new TourneesResource($tournee),
            'Tournees retrieved successfully.'
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

        $updateTournees = Tournees::where('id', $id)
                ->update([
                    'name' => $input['name'],
                    'code_regate' => $input['code_regate']
                ]);

        if(!$updateTournees) {
            return $this->sendError('Database failed', $updateTournees);
        }

        return $this->sendResponse(
            $updateTournees,
            'Tournees updated successfully.'
        );

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $fqdn
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, Request $request) {

        $deleteTournees = Tournees::where('id', $id)->delete();

        if(!$deleteTournees) {
            return $this->sendError('Database failed', $deleteTournees);
        }

        return $this->sendResponse(
            $deleteTournees,
            'Tournees updated successfully.'
        );
    }
}
