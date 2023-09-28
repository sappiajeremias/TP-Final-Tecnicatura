<?php

namespace App\Http\Controllers;

use App\Models\Role;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\Request;
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
            'name' => ['required','string','max:255'],
            'email' => ['required','string','email','max:255','unique:' . User::class],
            'apellido' => ['required','string','max:255'],
            'fecha_nac' => ['required','date','before_or_equal:' . now()->subYears(13)->format('Y-m-d')],
            'dni' => ['required','integer','unique:' . User::class, 'max:8', 'min:8'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ],[
            'name.required' => 'Por favor, ingrese un nombre.',
            'name.max' => 'El nombre debe tener menos de 255 caracteres.',
            'email.required' => 'Por favor, ingrese un email.',
            'email.email' => 'Ingrese un email válido.',
            'email.unique' => 'Ya existe un usuario registrado con el mail ingresado.',
            'apellido.required' => 'Por favor, ingrese un apellido.',
            'apellido.max' => 'El apellido debe tener menos de 255 caracteres.',
            'fecha_nac.required' => 'Por favor, ingrese una fecha.',
            'fecha_nac.before_or_equal' => 'La fecha de nacimiento ingresada debe ser mayor de 13 años.',
            'dni.required' => 'Por favor, ingrese un DNI.',
            'dni.unique' => 'Ya existe un usuario registrado con el DNI ingresado.',
            'dni.integer' => 'El DNI ingresado debe ser numerico.',
            'dni.max' => 'Debe contener 8 caracteres.',
            'dni.min' => 'Debe contener 8 caracteres.',
            'password.required' => 'Por favor, ingrese una contraseña.'
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
        // event(new Registered($user));

        // Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
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
