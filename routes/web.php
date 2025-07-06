<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('me', ['ilhmdsite' => 'ilhmdsite']);
});
