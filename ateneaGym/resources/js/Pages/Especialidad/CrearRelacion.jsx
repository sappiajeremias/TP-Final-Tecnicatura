import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from 'sweetalert2';

import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
export default function CrearRelacion({
    isEdit,
    objeto,
    especialidadesProfesores,
    especialidades,
    profesores
}) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        descripcion: objeto.descripcion || "",
        nombre: objeto.nombre || "",
        profesor_id: objeto.profesor_id || "",
        especialidad_id: objeto.especialidad_id || "",
    });

    /* const handleSubmit = (e) => {
         e.preventDefault();
         if (isEdit) {
             put(`/especialidad/${objeto.id}`, {
                 onSuccess: () => {
                     alert("Relacion Actualizada");
                     document.getElementById("cierreModal").click();
                 },
             });
         } else {
             post(route("especialidad.store"));
         }
     };*/
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/especialidad/${objeto.id}`, {
                onSuccess: (response) => {
                    console.log(response)
                    if (response.status === 200) {
                        
                        console.log(response);
                        document.getElementById("cierreModal").click();
                        location.reload();
                    } else {
                        Swal.fire({
                            title: "Error.",
                            text: response.data.message,
                            icon: "error"});
                    }
                },
            });
        } else {
            post(route("especialidad.store"), {
                onSuccess: (response) => {
                    if (response.status === 200) {
                        console.log(response);
                        document.getElementById("cierreModal").click();
                        location.reload();
                    } else {
                        Swal.fire({
                            title: "Error.",
                            text: response.data.message,
                            icon: "error"});
                    }
                },
            });
        }
    };

    return (
        <>
            <Head title="Especialidades" />

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <InputLabel htmlFor="especialidad_id" value="Descripcion" />

                    <select
                        name="especialidad_id"
                        id="especialidad_id"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        value={data.especialidad_id}
                        onChange={(e) => setData("especialidad_id", e.target.value)}
                    >
                        <option value="">
                            Seleccione la descripción de la especialidad
                        </option>
                        {especialidades.map((especialidad, index) => (
                            <option key={index} value={especialidad.id}>
                                {especialidad.descripcion}
                            </option>
                        ))}
                    </select>

                    <InputError message={errors.descripcion} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="profesor_id" value="ID Profesor" />
                    <select
                        name="profesor_id"
                        id="profesor_id"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.profesor_id}
                        onChange={(e) => setData("profesor_id", e.target.value)}
                    >
                        <option selected>Seleccione el id del profesor</option>
                        {profesores.map((profe, index) => (
                            <option key={index} value={profe.id}>
                                {profe.nombre_apellido}
                            </option>
                        ))}
                    </select>


                    <InputError message={errors.profesor_id} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </>
    );
}
