import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";

const NuevoEjercicio = (props) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        descripcion: "",
        parte_cuerpo: "",
        musculo: "",
        imagen: "",
    });
    const cerrar = props.cerrarModal;
    const listaParteCuerpo = ['Brazos', 'Pecho', 'Hombros', 'Espalda', 'Piernas','Abdominales'];
    const listaMusculos = ['Biceps', 'Triceps', 'Hombros', 'Trapecios', 'Dorsales','Pectorales', 'Abdominales', 'Gluteos','Cuadriceps','Aductores','Isquiotibiales', 'Gemélos'];
   //console.log(props.cerrarModal);
    const submit = (e) => {
        e.preventDefault();
        post(`/ejercicio`, {
            onSuccess: () => {
                Swal.fire({
                    title: "Exito.",
                    text: "Ejercicio agregado!",
                    icon: "success",
                });
                cerrar();
            },
        });
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
                    <InputLabel htmlFor="descripcion" value="Descripcion" />

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
                <div className="mt-4">
                    <InputLabel htmlFor="musculo" value="Músculo" />

                    <select
                        name="musculo"
                        id="musculo"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.musculo}
                        onChange={(e) => setData("musculo", e.target.value)}
                    >
                        <option value={1}>Seleccione el musculo</option>
                        {listaMusculos.map((musc, index) => (
                            <option key={index} value={musc}>
                                {musc}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.musculo} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="parte_cuerpo" value="Parte del cuerpo" />

                    <select
                        name="parte_cuerpo"

                        id="parte_cuerpo"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.parte_cuerpo}
                        onChange={(e) => setData("parte_cuerpo", e.target.value)}
                    >
                        <option value={1} >Seleccione la parte del cuerpo</option>
                        {listaParteCuerpo.map((musc, index) => (
                            <option key={index} value={musc}>
                                {musc}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.parte_cuerpo} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="imagen" value="Imagen" />

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
                    <button
                        onClick={props.cerrarModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-4"
                    >
                        Cancelar
                    </button>

                    <PrimaryButton
                        className="ml-4"
                        disabled={processing}
                        onClick={submit}
                    >
                        Confirmar
                    </PrimaryButton>
                </div>
            </form>
        </div>
    );
};

export default NuevoEjercicio;
