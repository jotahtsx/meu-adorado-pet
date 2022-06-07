<?php

namespace App\Http\Controllers;

use App\Models\Adoption;
use Illuminate\Http\Request;

class AdoptionController extends Controller
{

    public function index()
    {
        return Adoption::with('pet')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            "email" => ['required', 'email'],
            "allowance_amount" => ['required', 'numeric', 'between:10,100'],
            "pet_id" => ['required', 'int', 'exists:pets,id']
        ]);

        $adoptionData = $request->all();

        return Adoption::create($adoptionData);
    }
}
