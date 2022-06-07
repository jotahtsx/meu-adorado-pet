<?php

namespace App\Http\Controllers;

use App\Rules\OnlyPetAdoption;
use App\Http\Resources\AdoptionCollection;
use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{

    public function index()
    {
        $adoptions = Adoption::with('pet')->get();

        return new AdoptionCollection($adoptions);
    }

    public function store(Request $request)
    {
        $request->validate([
            "email" => ['required', 'email', new OnlyPetAdoption()],
            "allowance_amount" => ['required', 'numeric', 'between:10,100'],
            "pet_id" => ['required', 'int', 'exists:pets,id']
        ]);

        $adoptionData = $request->all();

        return Adoption::create($adoptionData);
    }
}
