import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm } from "@inertiajs/react";
import React from "react";
import Swal from "sweetalert2";

const NuevaRutina = (props) => {
    console.log(props);
    const cerrar = props.cerrarModal;
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        mes: "",
        dificultad: "",
        profesor_id: props.profesor.id,
        dia_semana: "",
    });
    const submit = (e) => {
        e.preventDefault();
        post(`/rutina`, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    text: "Rutina agregada.",
                });
                cerrar();
                location.reload();
            },
        });
    };
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];
    const diasSemana = [
        
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        
    ];
    const dificultades = [
        "Facil",
        "Medio",
        "Dificil",
    ];

    return (
        <div>
            {" "}
            <form onSubmit={submit}>
                <div className="mt-2">
                    <InputLabel htmlFor="nombre" value="Nombre" />

                    <TextInput
                        id="nombre"
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
                    <InputLabel htmlFor="mes" value="Mes" />

                    <select
                        name="mes"
                        id="mes"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.mes}
                        onChange={(e) => setData("mes", e.target.value)}
                    >
                        <option value={1}>
                            Seleccione la descripcion de la actividad
                        </option>
                        {meses.map((mes, index) => (
                            <option key={index} value={mes}>
                                {mes}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.mes} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="dia_semana" value="Dia de la semana" />

                    <select
                        name="dia_semana"
                        id="dia_semana"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.dia_semana}
                        onChange={(e) => setData("dia_semana", e.target.value)}
                    >
                        <option value={1}>
                            Seleccione la descripcion de la actividad
                        </option>
                        {diasSemana.map((dia, index) => (
                            <option key={index} value={dia}>
                                {dia}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.dia_semana} className="mt-2" />
                </div>
                <div className="mt-2">
                    <InputLabel htmlFor="dificultad" value="Dificultad" />

                    <select
                        name="dificultad"
                        id="dificultad"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.dificultad}
                        onChange={(e) => setData("dificultad", e.target.value)}
                    >
                        <option value={1}>
                            Seleccione la dificultad
                        </option>
                        {dificultades.map((dif, index) => (
                            <option key={index} value={dif}>
                                {dif}
                            </option>
                        ))}
                    </select>
                    <InputError message={errors.dificultad} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-2">
                    <button
                        onClick={props.cerrarModal}
                        type="button"
                        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-xs px-5 py-3 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ml-4 mt-2"
                    >
                        CANCELAR
                    </button>

                    <PrimaryButton
                        className="ml-4 py-2.5 "
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

export default NuevaRutina;
