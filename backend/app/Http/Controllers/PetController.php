<?php

namespace App\Http\Controllers;

use \App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{
    public function index()
    {
        return Pet::get();
    }

    public function store()
    {
        echo 'estou no meu controller de adicionar pet';
    }
}