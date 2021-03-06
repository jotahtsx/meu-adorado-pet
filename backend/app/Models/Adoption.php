<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Adoption extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'allowance_amount', 'pet_id'];

    public function pet()
    {
        return $this->belongsTo(Pet::class);
    }
}
