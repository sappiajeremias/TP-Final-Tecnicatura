import { useForm } from "@inertiajs/react";
import React from "react";

const NuevoEjercicio = () => {
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
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default NuevoEjercicio;
