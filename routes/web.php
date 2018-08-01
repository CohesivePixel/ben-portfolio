<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/v1/works/{page}/image', function($path) {
    $image = App\Work::where('pagenumber', '=', $path)->pluck('path');
    $vertical = App\Work::where('pagenumber', '=', $path)->pluck('vertical');
    return [$image[0], $vertical[0]];
});

Route::get('/v1/works/{page}/information', function($page) {
    $title = App\Work::where('pagenumber', '=', $page)->pluck('title');
    $description = App\Work::where('pagenumber', '=', $page)->pluck('description');
    return [$title[0], $description[0]];
});
