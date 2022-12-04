<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Models\Etablissements;
use App\Http\Resources\EtablissementsResource;
use Illuminate\Support\Facades\Validator;

class EtablissementsController extends BaseController {
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index() {
        $domains = Etablissements::all();
        return $this->sendResponse(
            EtablissementsResource::collection($domains),
            'Etablissements retrieved successfully.'
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

        $etablissement = Etablissements::create($input);

        if(!$etablissement) {
            return $this->sendError('Database error', $etablissement, 500);
        }

        return $this->sendResponse(
            new EtablissementsResource($etablissement),
             'Etablissements created successfully.'
        );
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id) {

        $etablissement = Etablissements::where('id', $id)->get();
        if (is_null($etablissement)) {
            return $this->sendError('Etablissements not found.');
        }

        return $this->sendResponse(
            new EtablissementsResource($etablissement),
            'Etablissements retrieved successfully.'
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

        $updateEtablissements = Etablissements::where('id', $id)
                ->update([
                    'name' => $input['name'],
                    'code_regate' => $input['code_regate']
                ]);

        if(!$updateEtablissements) {
            return $this->sendError('Database failed', $updateEtablissements);
        }

        return $this->sendResponse(
            $updateEtablissements,
            'Etablissements updated successfully.'
        );

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $fqdn
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, Request $request) {

        $deleteEtablissements = Etablissements::where('id', $id)->delete();

        if(!$deleteEtablissements) {
            return $this->sendError('Database failed', $deleteEtablissements);
        }

        return $this->sendResponse(
            $deleteEtablissements,
            'Etablissements updated successfully.'
        );
    }
}
