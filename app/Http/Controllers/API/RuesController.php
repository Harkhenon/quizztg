<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\API\BaseController;
use Illuminate\Http\Request;
use App\Models\Rues;
use App\Http\Resources\RuesResource;
use Illuminate\Support\Facades\Validator;

class RuesController extends BaseController {
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index() {
        $domains = Rues::all();
        return $this->sendResponse(
            RuesResource::collection($domains)->resolve(),
            'Rues retrieved successfully.'
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

        $rues = Rues::create($input);

        if(!$rues) {
            return $this->sendError('Database error', $rues, 500);
        }

        return $this->sendResponse(
            new RuesResource($rues),
             'Rues created successfully.'
        );
    }



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function show($id) {

        $rues = Rues::where('id', $id)->get();
        if (is_null($rues)) {
            return $this->sendError('Rues not found.');
        }

        return $this->sendResponse(
            new RuesResource($rues),
            'Rues retrieved successfully.'
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

        $updateRues = Rues::where('id', $id)
                ->update([
                    'name' => $input['name'],
                    'code_regate' => $input['code_regate']
                ]);

        if(!$updateRues) {
            return $this->sendError('Database failed', $updateRues);
        }

        return $this->sendResponse(
            $updateRues,
            'Rues updated successfully.'
        );

    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  string  $fqdn
     * @return \Illuminate\Http\Response
     */

    public function destroy($id, Request $request) {

        $deleteRues = Rues::where('id', $id)->delete();

        if(!$deleteRues) {
            return $this->sendError('Database failed', $deleteRues);
        }

        return $this->sendResponse(
            $deleteRues,
            'Rues updated successfully.'
        );
    }
}
