import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
import InputSelect from "@/Components/InputSelect";
import Swal from "sweetalert2";

export default function Register({ isEdit, objeto, roles }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        name: objeto.name || "",
        apellido: objeto.apellido || "",
        email: objeto.email || "",
        dni: objeto.dni || "",
        fecha_nac: objeto.fecha_nac || "",
        rol: objeto.rol || "",
        matricula: "",
        password: objeto.password || "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/usuarios/${objeto.id}`, {
                onSuccess: () => {
                    Swal.fire({
                        title: "Exito.",
                        text: "Usuario actualizado!",
                        icon: "success",
                    });
                    document.getElementById("cierreModal").click();
                },
            });
        } else {
            post(route("usuarios.store"), {
                onSuccess: () => {
                    Swal.fire({
                        title: "Exito.",
                        text: "Usuario creado!",
                        icon: "success",
                    });
                    document.getElementById("cierreModal").click();
                   
                },
            });
        }
    };

    return (
        <>
            <Head title="Register" />

            <form onSubmit={submit} className="max-w-md mx-auto mt-8">
                <div className="mt-2">
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="apellido" value="Apellido" />

                    <TextInput
                        id="apellido"
                        name="apellido"
                        value={data.apellido}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        isFocused={true}
                        onChange={(e) => setData("apellido", e.target.value)}
                    />

                    <InputError message={errors.apellido} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="dni" value="Dni" />

                    <TextInput
                        id="dni"
                        name="dni"
                        type="number"
                        value={data.dni}
                        className="mt-1 block w-full"
                        autoComplete="dni"
                        isFocused={true}
                        onChange={(e) => setData("dni", e.target.value)}
                    />

                    <InputError message={errors.dni} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel
                        htmlFor="fecha_nac"
                        value="Fecha de Nacimiento"
                    />

                    <TextInput
                        id="fecha_nac"
                        name="fecha_nac"
                        type="date"
                        value={data.fecha_nac}
                        className="mt-1 block w-full"
                        autoComplete="fecha_nac"
                        isFocused={true}
                        onChange={(e) => setData("fecha_nac", e.target.value)}
                    />

                    <InputError message={errors.fecha_nac} className="mt-2" />
                </div>

                <div className="mt-2">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="rol" value="Rol" />

                    <select
                        name="rol"
                        id="rol"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.rol}
                        onChange={(e) => setData("rol", e.target.value)}
                    >
                        {" "}
                        {data.rol ? "" : <option>Seleccione un rol</option>}
                        {roles.map((rol, index) =>
                            rol.name === "Administrador" ? (
                                ""
                            ) : (
                                <option key={index} value={rol.name}>
                                    {rol.name}
                                </option>
                            )
                        )}
                    </select>
                </div>
                {data.rol === "Profesor" ? (
                    <div className="mt-2">
                        <InputLabel
                            htmlFor="matricula"
                            value="Matricula Profesor"
                        />

                        <TextInput
                            id="matricula"
                            type="text"
                            name="matricula"
                            value={data.matricula}
                            className="mt-1 block w-full"
                            onChange={(e) =>
                                setData("matricula", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.matricula}
                            className="mt-2"
                        />
                    </div>
                ) : (
                    ""
                )}
                {!isEdit ? (
                    <>
                        <div className="mt-2">
                            <InputLabel htmlFor="password" value="Contraseña" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.password}
                                className="mt-2"
                            />
                        </div>

                        <div className="mt-2">
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirmar Contraseña"
                            />

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                            />

                            <InputError
                                message={errors.password_confirmation}
                                className="mt-2"
                            />
                        </div>
                    </>
                ) : (
                    ""
                )}
                <div className="flex items-center justify-end mt-2">
                    {/* <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link> */}

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
