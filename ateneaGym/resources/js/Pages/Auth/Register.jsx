import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";

export default function Register({ isEdit, objeto }) {

    const { data, setData, put, post, processing, errors, reset } = useForm({
        name: objeto.name || "",
        apellido: objeto.apellido || "",
        email: objeto.email || "",
        dni: objeto.dni || "",
        fecha_nac: objeto.fecha_nac || "",
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
            router.visit(`/usuarios/${objeto.id}`, { method: 'put' });
        } else {
            post(route("usuarios.store"));
        }

    };

    return (
        <>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="apellido" value="Apellido" />

                    <TextInput
                        id="apellido"
                        name="apellido"
                        value={data.apellido}
                        className="mt-1 block w-full"
                        autoComplete="apellido"
                        isFocused={true}
                        onChange={(e) => setData("apellido", e.target.value)}
                        required
                    />

                    <InputError message={errors.apellido} className="mt-2" />
                </div>
                <div>
                    <InputLabel htmlFor="dni" value="Dni" />

                    <TextInput
                        id="dni"
                        name="dni"
                        value={data.dni}
                        className="mt-1 block w-full"
                        autoComplete="dni"
                        isFocused={true}
                        onChange={(e) => setData("dni", e.target.value)}
                        required
                    />

                    <InputError message={errors.dni} className="mt-2" />
                </div>
                <div>
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
                        required
                    />

                    <InputError message={errors.fecha_nac} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="password_confirmation"
                        value="Confirm Password"
                    />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
