<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\EjercicioController;
use App\Http\Controllers\EspecialidadProfesorController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfesorController;
use App\Http\Controllers\RutinaController;
use App\Http\Controllers\TurnoController;
use App\Http\Controllers\MembresiaController;
use App\Http\Controllers\PagoController;
use App\Models\Alumno;
use App\Models\Especialidad;
use App\Models\Membresia;
use Spatie\Permission\Traits\HasRoles;
use Symfony\Component\HttpKernel\Profiler\Profile;

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
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::group(['middleware' => ['role:Administrador']], function () {
});

Route::resource('actividad', ActividadController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('usuarios', UserController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('especialidad', EspecialidadProfesorController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('esp', EspecialidadController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('pago', PagoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::group(['middleware' => ['role:Alumno|Administrador']], function () {
});
Route::get('/misTurnos', [TurnoController::class, 'turnoAlumno'])->middleware(['auth'])->name('turnoAlumno');
Route::put('/misTurnos/{id}', [TurnoController::class, 'cancelarTurno'])->middleware(['auth'])->name('cancelar.turnoAlumno');


Route::resource('membresia', MembresiaController::class)
    ->only(['store', 'index', 'update', 'destroy',])
    ->middleware(['auth']);

Route::post('/realizarPago', [MembresiaController::class, 'realizarPago'])->middleware(['auth'])->name('mostrarMembresias');

Route::post('/procesar-pago', [PagoController::class, 'crearPreference'])->middleware(['auth'])->name('procesar.pago');

Route::get('/procesar-respuesta-pago', [PagoController::class, 'estadoPago'])->middleware(['auth'])->name('procesar.respuesta');

Route::resource('turnos', TurnoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);


Route::group(['middleware' => ['role:Profesor|Administrador']], function () {
});
Route::resource('rutina', RutinaController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('ejercicio', EjercicioController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);


/*Route::get('/mostrarMembresias/{membresia_id}', function ($membresia_id) {
    return Inertia::render('Pago/Index', [
        'membresia_id' => $membresia_id
    ]);
})->name('mostrarMembresias');*/

// Route::get('/mostrarMembresias', [PagoController::class, 'index'])->name('mostrarMembresias');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    // Route::get('profile', [ProfileController::class, 'membresia'])->name('profile.membresia');
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::resource('alumno', AlumnoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('profesor', ProfesorController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::get('/user-role', function () {

    return auth()->user()->getRoles();
});


// Route::get('/{any}', function () {
//     return Inertia::render('Error404');
// })->where('any', '.*');

Route::get('/error-403', function () {
    return Inertia::render('Error403');
});
// Route::get('/misTurnos', [TurnoController::class, 'turnoAlumno'])->name('misTurnos');
require __DIR__ . '/auth.php';
