<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TodoController;
use app\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('users',UserController::class);
Route::apiResource('todos',TodoController::class);


Route::post('/login', [UserController::class,'login']);
Route::post('/register', [UserController::class,'register']);

// Route::post('login', [AuthController::class, 'login']);
// // Route::post('register', [AuthController::class, 'register']);
// Route::middleware('auth:api')->group(function () {
//     Route::post('logout', [AuthController::class, 'logout']);
//     Route::post('refresh', [AuthController::class, 'refresh']);
//     Route::get('me', [AuthController::class, 'me']);
// });
// routes/api.php

Route::group(['middleware' => ['jwt.auth']], function () {
    // Protected routes here, such as the dashboard route
    Route::get('/dashboard', 'DashboardController@index');
});
