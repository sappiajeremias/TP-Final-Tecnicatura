import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
export default function CrearEspecialidad({ objeto }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        descripcion: objeto.descripcion || ""
    });



    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("esp.store"));

    };


    return (
        <>

            <Head title="Especialidades" />

            <form onSubmit={handleSubmit}>

                <div className="mt-2">
                    <InputLabel htmlFor="descripcion" value="Descripcion" />

                    <TextInput
                        id="descripcion"
                        name="descripcion"
                        value={data.descripcion}
                        className="mt-1 block w-full"
                        autoComplete="descripcion"
                        isFocused={true}
                        onChange={(e) => setData("descripcion", e.target.value)}

                    />

                    <InputError message={errors.descripcion} className="mt-2" />
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
