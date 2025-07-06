<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('pages.me', ['ilhmdsite' => 'ilhmdsite']);
});
Route::get('/home', function () {
    return view('pages.home');
});
