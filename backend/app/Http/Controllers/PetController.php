<?php

namespace App\Http\Controllers;

use \App\Http\Requests\PetRequest;
use \App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return Pet::get();
    }

    public function store(PetRequest $request)
    {
        $petData = $request->all();
        
        return Pet::create($petData);
    }
}