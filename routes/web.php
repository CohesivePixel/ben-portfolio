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

Route::get('/v1/works/{page}/title', function($title) {
    $title = App\Work::where('pagenumber', '=', $title)->pluck('title');
    return $title;
});

Route::get('/v1/works/{page}/description', function($description) {
    $description = App\Work::where('pagenumber', '=', $description)->pluck('description');
    return $description;
});
