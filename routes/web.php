<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/erasmus-courses', function () {
    return view('erasmusCourses'); // assuming the Blade file is named erasmusCourses.blade.php
});

Route::get('/gallery', function () {
    return view('gallery'); // assuming the Blade file is named gallery.blade.php
});

Route::get('/about-us', function() {
    return view('aboutUs'); // assuming the Blade file is named aboutUs.blade.php
});

require __DIR__.'/auth.php';
