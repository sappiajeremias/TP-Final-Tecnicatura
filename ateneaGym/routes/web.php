<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ActividadController;
use App\Http\Controllers\AlumnoController;
use App\Http\Controllers\AsistenciaController;
use App\Http\Controllers\EjercicioController;
use App\Http\Controllers\EjercicioRutinaController;
use App\Http\Controllers\EspecialidadProfesorController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProfesorController;
use App\Http\Controllers\RutinaController;
use App\Http\Controllers\TurnoController;
use App\Http\Controllers\MembresiaController;
use App\Http\Controllers\NotificacionController;
use App\Http\Controllers\PagoController;
use App\Http\Controllers\RutinaAlumnoController;
use App\Models\Alumno;
use App\Models\Asistencia;
use App\Models\EjercicioRutina;
use App\Models\Especialidad;
use App\Models\Membresia;
use App\Models\Rutina;
use App\Models\RutinaAlumno;
use Illuminate\Support\Facades\Auth;
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
    // Verifica si el usuario está autenticado

    // Si está autenticado, obtén las notificaciones, de lo contrario, establece las notificaciones como vacías


    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,


    ]);
});

Route::post('/notiLeida/{id}', [NotificacionController::class, 'marcarLeida'])->middleware(['auth'])->name('leer.noti');


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
    Route::resource('membresia', MembresiaController::class)
        ->only(['store', 'index', 'update', 'destroy'])
        ->middleware(['auth']);

    Route::post('/realizarPago', [MembresiaController::class, 'realizarPago'])->middleware(['auth'])->name('mostrarMembresias');
    Route::get('/misTurnos', [TurnoController::class, 'turnoAlumno'])->middleware(['auth'])->name('turnoAlumno');
    Route::put('/misTurnos/{id}', [TurnoController::class, 'cancelarTurno'])->middleware(['auth'])->name('cancelar.turnoAlumno');

    Route::get('/realizarPago', function () {
        return Inertia::render('Pago.Index');
    });
    Route::post('/procesar-pago', [PagoController::class, 'crearPreference'])->middleware(['auth'])->name('procesar.pago');

    Route::get('/procesar-respuesta-pago', [PagoController::class, 'estadoPago'])->middleware(['auth'])->name('procesar.respuesta');

    Route::resource('turnos', TurnoController::class)
        ->only(['store', 'index', 'update', 'destroy'])
        ->middleware(['auth']);
});


Route::get('/mis-rutinas', [RutinaAlumnoController::class, 'index'])->middleware(['auth'])->name('mis.rutinas');
Route::get('/mis-rutinas/{idRutina}', [RutinaAlumnoController::class, 'ejerciciosRutina'])->name('ejerciciosRutina');

// Route::get('/realizarPago', [MembresiaController::class, 'realizarPago'])->middleware(['auth']);
Route::resource('rutina', RutinaController::class)
    ->only(['store', 'index', 'update', 'destroy', 'show'])
    ->middleware(['auth']);



Route::group(['middleware' => ['role:Profesor|Administrador']], function () {

    Route::resource('ejercicio', EjercicioController::class)
        ->only(['store', 'index', 'update', 'destroy'])
        ->middleware(['auth']);

    Route::post('/ejercicioRutinaEditar', [EjercicioRutinaController::class, 'update'])->middleware(['auth'])->name('actualizar.ejercicio');

    Route::post('/ejercicioRutina', [EjercicioRutinaController::class, 'destroy'])->middleware(['auth'])->name('eliminar.ejercicio');

    Route::post('/agregarEjercicio', [RutinaController::class, 'agregarEjercicio'])->middleware(['auth'])->name('agregar.ejercicioR');

    Route::get('/asignarRutina', [RutinaAlumnoController::class, 'mostrarUsuarios'])->middleware(['auth'])->name('mostrarUsuario');


    Route::post('/asignarAlumno', [RutinaAlumnoController::class, 'agregarUsuarios'])->middleware(['auth'])->name('agregar.usuarios');
    // Ruta para eliminar la asignación
    Route::delete('/eliminarAsignacion/{rutina}/{alumno}', [RutinaAlumnoController::class, 'eliminarAsignacion'])->middleware(['auth'])->name('eliminar.usuarios');
});


Route::get('/dashboard', function () {

    $membresia = (new MembresiaController())->verificarMembresiaActiva();

    return Inertia::render('Dashboard', ['membresia' => $membresia]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('asistencia', AsistenciaController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::resource('asistenciaAlumno', AlumnoController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);

Route::put('/actualizarAsistencia/{id}', [AlumnoController::class, 'actualizarAsis'])->name('actualizar');
Route::get('/obtenerDiasDisp/{idUser}', [ProfileController::class, 'diasDisponibles'])->name('diasDisponibles');

Route::resource('profesor', ProfesorController::class)
    ->only(['store', 'index', 'update', 'destroy'])
    ->middleware(['auth']);


Route::get('/user-role', function () {

    return auth()->user()->getRoles();
});

Route::get('/error-403', function () {
    return Inertia::render('Error403');
});

require __DIR__ . '/auth.php';
