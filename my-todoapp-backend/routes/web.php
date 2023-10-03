<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/login', 'AuthController@login')->name('login');
// Route::post('/logout', 'AuthController@logout')->name('logout');


// Route::group(['middleware' => 'auth'], function () {
   
// Route::post('/login', [UserController::class,'login']);
// Route::post('/register', [UserController::class,'register']);

//     // Your login and registration routes here
// });
Route::middleware(['auth'])->group(function () {

    Route::post('/login', [UserController::class,'login']);
    Route::post('/register', [UserController::class,'register']);

    // Your authenticated routes here
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
});



// Route::middleware([
//     'auth:sanctum',
//     config('jetstream.auth_session'),
//     'verified',
// ])->group(function () {
//     Route::get('/dashboard', 'DashboardController@index')->name('dashboard');
//     Route::get('/dashboard', function () {
//         return Inertia::render('Dashboard');
//     })->name('dashboard');
// });
