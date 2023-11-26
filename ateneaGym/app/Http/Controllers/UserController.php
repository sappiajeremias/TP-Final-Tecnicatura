<?php

namespace App\Http\Controllers;

use App\Models\Alumno;
use App\Models\Notificacion;
use App\Models\Profesor;
use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;

use Spatie\Permission\Models\Permission;

class UserController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {

        $usuarios = User::join('model_has_roles', 'users.id', '=', 'model_has_roles.model_id')
            ->join('roles', 'model_has_roles.role_id', '=', 'roles.id')
            ->select('users.*', 'roles.name as rol')
            ->get();
        // $usuarios = User::with('roles')->get();
        $roles = Role::all();
        return Inertia::render('Administrador/Index', ['usuarios' => $usuarios, 'roles' => $roles]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:' . User::class],
            'apellido' => ['required', 'string', 'max:255'],
            'fecha_nac' => ['required', 'date', 'before_or_equal:' . now()->subYears(13)->format('Y-m-d')],
            'dni' => ['required', 'numeric', 'digits:8', 'unique:' . User::class,],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ], [

            'fecha_nac.before_or_equal' => 'La fecha de nacimiento ingresada debe ser mayor de 13 años.',

        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'apellido' => $request->apellido,
            'dni' => $request->dni,
            'fecha_nac' => $request->fecha_nac,
            'password' => Hash::make($request->password),
        ]);

        $user->assignRole($request->rol);
        if ($request->rol == 'Profesor') {
            $profesor = Profesor::create([
                'user_id' => $user->id,
                'matricula' => $request->matricula
            ]);
            $profesor->save();
        }
        if ($request->rol == 'Alumno') {
            $alumno = Alumno::create([
                'user_id' => $user->id,
            ]);
            $alumno->save();
        }
        $noti = Notificacion::create([
            'user_id' => $user->id,
            'message' => '¡Bienvenido a AteneaGym!',
        ]);
        $noti->save();
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, String $id) {

        $usuario = User::find($id);

        $usuario->name = $request->name;
        $usuario->email = $request->email;
        $usuario->apellido = $request->apellido;
        $usuario->dni = $request->dni;
        $usuario->fecha_nac = $request->fecha_nac;
        // $roles = Role::all();

        if ($usuario->rol() && $usuario->rol()[0] != 'Administrador') {
            //   dd($usuario->rol()[0]);
            // foreach ($roles as $rol) {
            $usuario->removeRole($usuario->rol()[0]);
            // }
        }

        $usuario->assignRole($request->rol);
        $usuario->save();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(String $id) {
        $usuario = User::find($id);
        $usuario->delete();
        // $usuario::destroy;


        // return redirect()->route('dashboard');
    }
}
