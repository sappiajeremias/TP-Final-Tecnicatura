import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";

const ConfirmarTurno = ({ auth, turno, actividad, setModalOpen }) => {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        name: auth.user.name,
        apellido: auth.user.apellido,
        email: auth.user.email,
        dni: auth.user.dni,
        hora: turno.hora,
        fecha: turno.fecha,
        especialidad_id: actividad[0].especialidad_id,
    });
    console.log(actividad[0].especialidad_id);
    console.log(turno);
    const submit = (e) => {
        e.preventDefault();

        put(`/turnos/${turno.id}`, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    text: "Turno sacado con exito!",
                }).then(() => {
                    setModalOpen(false);
                });
            },
            onError: (response) => {
                console.log(response);
                Swal.fire({
                    icon: "error",
                    text: response.message,
                }).then(() => {
                    setModalOpen(false);
                });
            },
        });

        setModalOpen(false);
        // if (isEdit) {
        //     /turnos/${auth.id}`, {
        // //         onSuccess: (put(`) => {
        //             alert("Usuario Actualizado");
        //             document.getElementById("cierreModal").click();
        //         },
        //     });
        // } else {
        //     post(route("usuarios.store"));
        // }
    };

    return (
        <div className="container">
            <form onSubmit={submit}>
                <div className="mt-2">
                    <InputLabel htmlFor="name" value="Nombre" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        disabled
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
                        disabled
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
                        disabled
                        isFocused={true}
                        onChange={(e) => setData("dni", e.target.value)}
                    />

                    <InputError message={errors.dni} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        disabled
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div
                    className="p-4 m-6 mb-4 text-sm text-blue-800 rounded-lg bg-blue-100 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                >
                    <span className="font-medium">Atencion!</span> Confirme sus
                    datos para el turno del dia: {data.fecha} Hora del turno:{" "}
                    {data.hora} para la actividad:{" "}
                    {actividad[0].especialidad.descripcion}
                    {/* {turno.actividad.especialidad.descripcion} */}
                </div>
                <div className="flex items-center justify-end mt-2">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default ConfirmarTurno;
