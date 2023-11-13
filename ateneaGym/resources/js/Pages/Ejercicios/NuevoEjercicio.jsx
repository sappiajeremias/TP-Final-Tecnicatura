import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";

const NuevoEjercicio = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        descripcion: "",
        parte_cuerpo: "",
        musculo: "",
        imagen: "",
    });

    const submit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submit}>
                <div className="mt-2">
                    <InputLabel htmlFor="nombre" value="Nombre" />

                    <TextInput
                        id="nombre"
                        type="text"
                        name="nombre"
                        value={data.nombre}
                        className="mt-1 block w-full"
                        autoComplete="nombre"
                        isFocused={true}
                        onChange={(e) => setData("nombre", e.target.value)}
                    />

                    <InputError message={errors.nombre} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="descripcion" value="descripcion" />

                    <TextInput
                        id="descripcion"
                        type="text"
                        name="descripcion"
                        value={data.descripcion}
                        className="mt-1 block w-full"
                        autoComplete="descripcion"
                        isFocused={true}
                        onChange={(e) => setData("descripcion", e.target.value)}
                    />

                    <InputError message={errors.descripcion} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="parte_cuerpo" value="parte_cuerpo" />

                    <TextInput
                        id="parte_cuerpo"
                        type="text"
                        name="parte_cuerpo"
                        value={data.parte_cuerpo}
                        className="mt-1 block w-full"
                        autoComplete="parte_cuerpo"
                        isFocused={true}
                        onChange={(e) =>
                            setData("parte_cuerpo", e.target.value)
                        }
                    />

                    <InputError
                        message={errors.parte_cuerpo}
                        className="mt-2"
                    />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="musculo" value="musculo" />

                    <TextInput
                        id="musculo"
                        type="text"
                        name="musculo"
                        value={data.musculo}
                        className="mt-1 block w-full"
                        autoComplete="musculo"
                        isFocused={true}
                        onChange={(e) => setData("musculo", e.target.value)}
                    />

                    <InputError message={errors.musculo} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="imagen" value="imagen" />

                    <TextInput
                        id="imagen"
                        type="text"
                        name="imagen"
                        value={data.imagen}
                        className="mt-1 block w-full"
                        autoComplete="imagen"
                        isFocused={true}
                        onChange={(e) => setData("imagen", e.target.value)}
                    />

                    <InputError message={errors.imagen} className="mt-2" />
                </div>
                <div className="flex items-center justify-end mt-2">
                    {/* <button
                        onClick={cerrarModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-4"
                    >
                        Cancelar
                    </button> */}
                    <PrimaryButton
                        className="ml-4 bg-red-600"
                        onClick={props.cerrarModal}
                        disabled={processing}
                    >
                        Cancelar
                    </PrimaryButton>
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default NuevoEjercicio;
