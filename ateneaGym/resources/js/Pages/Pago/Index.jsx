import Table from "@/Components/Table";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import { useForm, usePage } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import Swal from "sweetalert2";
const Index = ({ membresia_id, auth }) => {
    const { props } = usePage();
    const obtenerFechaActual = () => {
        const fechaActual = new Date();
        const anio = fechaActual.getFullYear();
        const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
        return `${anio}-${mes}`;
    };
    const { data, setData, put, post, processing, errors, reset } = useForm({
        user_id: auth.user.id,
        membresia_id: membresia_id || "",
        medio_pago: "",
        numero_tarjeta: "",
        fecha_vencimiento: obtenerFechaActual(),
        cod_seguridad: "",
        nombre_completo: "",
    });
    const medios = ["Debito", "Credito"];

    const handleFechaChange = (e) => {
        setData("fecha_vencimiento", e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("pago.store"));
    };
    useEffect(() => {
        if (props.errors.message && Object.keys(props.errors).length > 0) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: props.errors.message, // Puedes ajustar esto según la estructura de tu objeto de errores
            });
        }
    }, [props.errors.message]);
    console.log(props.errors);
    return (
        <Authenticated auth={auth}>
            <div className="py-6 flex justify-center ">
                <form
                    onSubmit={handleSubmit}
                    className="border-2 border-gray-700 rounded-md p-6"
                >
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="medio_pago"
                            value="Medio de Pago"
                        />

                        <select
                            name="medio_pago"
                            id="medio_pago"
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                            value={data.medio_pago}
                            onChange={(e) =>
                                setData("medio_pago", e.target.value)
                            }
                        >
                            <option value="">
                                Seleccione la descripción de la especialidad
                            </option>
                            {medios.map((medio, index) => (
                                <option key={index} value={index}>
                                    {medio}
                                </option>
                            ))}
                        </select>

                        <InputError
                            message={errors.medio_pago}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="numero_tarjeta"
                            value="Número de tarjeta"
                        />

                        <TextInput
                            id="numero_tarjeta"
                            type="number"
                            name="numero_tarjeta"
                            value={data.numero_tarjeta}
                            className="mt-1  "
                            autoComplete="numero_tarjeta"
                            onChange={(e) =>
                                setData("numero_tarjeta", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.numero_tarjeta}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="cod_seguridad"
                            value="Código de Seguridad"
                        />

                        <TextInput
                            id="cod_seguridad"
                            type="number"
                            name="cod_seguridad"
                            value={data.cod_seguridad}
                            className="mt-1  "
                            autoComplete="cod_seguridad"
                            onChange={(e) =>
                                setData("cod_seguridad", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.cod_seguridad}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="nombre_completo"
                            value="Nombre Completo"
                        />

                        <TextInput
                            disabled
                            id="nombre_completo"
                            type="text"
                            name="nombre_completo"
                            value={auth.user.name + " " + auth.user.apellido}
                            className="mt-1  "
                            autoComplete="nombre_completo"
                            onChange={(e) =>
                                setData("nombre_completo", e.target.value)
                            }
                        />

                        <InputError
                            message={errors.nombre_completo}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <InputLabel
                            htmlFor="fecha_vencimiento"
                            value="Fecha de Vencimiento"
                        />

                        <TextInput
                            id="fecha_vencimiento"
                            type="month"
                            name="fecha_vencimiento"
                            value={data.fecha_vencimiento}
                            className="mt-1"
                            autoComplete="fecha_vencimiento"
                            onChange={handleFechaChange}
                        />

                        <InputError
                            message={errors.fecha_vencimiento}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            hidden
                            disabled
                            id="user_id"
                            type="text"
                            name="user_id"
                            value={auth.user.id}
                            className="mt-1  "
                            autoComplete="user_id"
                        />
                    </div>
                    <div className="mt-4">
                        <TextInput
                            hidden
                            disabled
                            id="membresia_id"
                            type="text"
                            name="membresia_id"
                            value={membresia_id}
                            className="mt-1  "
                            autoComplete="membresia_id"
                        />
                    </div>
                    <div className="flex items-center justify-end mt-4">
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Confirmar
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </Authenticated>
    );
};

export default Index;
