import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
export default function CrearEspecialidad({ isEdit, objeto, especialidadesProfesores }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        descripcion: objeto.descripcion || "",
        nombre: objeto.nombre || "",
        profesor_id: objeto.profesor_id || "",
        especialidad_id: objeto.especialidad_id || ""
    });



    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/especialidad/${objeto.id}`, {
                onSuccess: () => {
                    alert("Relacion Actualizada");
                    document.getElementById('cierreModal').click();
                },
            });
        } else {
            post(route("especialidad.store"));
        }
    };


    return (
        <>

            <Head title="Especialidades" />

            <form onSubmit={handleSubmit}>

                <div className="mt-4">
                    <InputLabel htmlFor="descripcion" value="Descripcion" />

                    <select
                        name="descripcion"
                        id="descripcion"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        value={data.descripcion}
                        onChange={(e) => setData("descripcion", e.target.value)}
                    >
                        <option value="">Seleccione la descripción de la especialidad</option>
                        {Array.from(new Set(especialidadesProfesores.map((esp) => esp.especialidad_id))).map((especialidad_id, index) => {
                            const descripcionEspecialidad = especialidadesProfesores.find((esp) => esp.especialidad_id === especialidad_id).descripcion;
                            return (
                                <option key={index} value={especialidad_id}>
                                    {descripcionEspecialidad}
                                </option>
                            );
                        })}
                    </select>

                    <InputError
                        message={errors.descripcion}
                        className="mt-2"
                    />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="profesor_id" value="ID Profesor" />
                    <select
                        name="profesor_id"
                        id="profesor_id"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                        value={data.profesor_id}
                        onChange={(e) => setData("profesor_id", e.target.value)}
                    >
                        <option value="">Seleccione el nombre del profesor</option>
                        {Array.from(new Set(especialidadesProfesores.map((profe) => profe.profesor_id))).map((profesor_id, index) => {
                            const nombreProfesor = especialidadesProfesores.find((profe) => profe.profesor_id === profesor_id).nombre;
                            return (
                                <option key={index} value={profesor_id}>
                                    {nombreProfesor}
                                </option>
                            );
                        })}
                    </select>

                    <InputError
                        message={errors.profesor_id}
                        className="mt-2"
                    />
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
