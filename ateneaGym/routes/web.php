<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\EjercicioController;
use App\Http\Controllers\EspecialidadProfesorController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfesorController;
use App\Http\Controllers\RutinaController;
use App\Http\Controllers\TurnoController;
use App\Models\Alumno;
use App\Models\Especialidad;

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



Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('actividad', ActividadController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);


Route::resource('usuarios', UserController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('turnos', TurnoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('especialidad', EspecialidadProfesorController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('alumno', AlumnoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('profesor', ProfesorController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('rutina', RutinaController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('ejercicio', EjercicioController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);


require __DIR__ . '/auth.php';
