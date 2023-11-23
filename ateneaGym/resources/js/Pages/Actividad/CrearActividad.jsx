import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import Swal from "sweetalert2";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
export default function CrearActividad({
    isEdit,
    objeto,
    profesores,
    especialidades,
}) {
    const { props } = usePage();
    const { data, setData, put, post, processing, errors, reset } = useForm({
        dia_semana: [],
        hora_inicio: objeto.hora_inicio || "",
        hora_fin: objeto.hora_fin || "",
        duracion: objeto.duracion || "",
        especialidad_id: objeto.especialidad_id || "",
        cupos: objeto.cupos || "",
        profesor_id: objeto.profesor_id || "",
    });

    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    //const [diasSelected, setDiasSelected] = useState(objeto.dia_semana.split(",")); // Inicializa con los valores desde el objeto

    const handleRadioChange = (e) => {
        const value = e.target.value;

        // Actualiza el estado data con el valor seleccionado
        setData("dia_semana", value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(data.dia_semana);
        if (isEdit) {
            put(`/actividad/${objeto.id}`, {
                dia_semana: data.dia_semana, // Envia solo los días seleccionados
                hora_inicio: data.hora_inicio,
                hora_fin: data.hora_fin,
                duracion: data.duracion,
                especialidad_id: data.especialidad_id,
                cupos: data.cupos,
                profesor_id: data.profesor_id,
                onSuccess: () => {
                    // console.log("success");
                    // if (Object.keys(props.errors).length > 0) {
                    Swal.fire({
                        title: "Exito.",
                        text: "Se modifico exitosamente",
                        icon: "success",
                    });
                    // } else {
                    //     //  console.log(response);
                    document.getElementById("cierreModal").click();
                    location.reload();
                    // }
                },
                onError: (response) => {
                    //console.log(response);
                    Swal.fire({
                        title: "Error.",
                        text: response[1],
                        icon: "error",
                    });
                },
            });
        } else {
            post(route("actividad.store"), {
                dia_semana: data.dia_semana, // Envia solo los días seleccionados
                hora_inicio: data.hora_inicio,
                hora_fin: data.hora_fin,
                duracion: data.duracion,
                especialidad_id: data.especialidad_id,
                cupos: data.cupos,
                profesor_id: data.profesor_id,
                onSuccess: () => {
                    // console.log("success");
                    // if (Object.keys(props.errors).length > 0) {
                    Swal.fire({
                        title: "Exito.",
                        text: "Se asigno profe a la especialidad",
                        icon: "success",
                    });
                    // } else {
                    //     //  console.log(response);
                    document.getElementById("cierreModal").click();
                    location.reload();
                    // }
                },
                onError: (response) => {
                    //console.log(response);
                    Swal.fire({
                        title: "Error.",
                        text: response[1],
                        icon: "error",
                    });
                },
            });
        }
    };

    return (
        <>
            <Head title="Actividades" />

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <InputLabel htmlFor="especialidad_id" value="Descripcion" />

                    <select
                        name="especialidad_id"
                        id="especialidad_id"
                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                        value={data.especialidad_id}
                        onChange={(e) =>
                            setData("especialidad_id", e.target.value)
                        }
                    >
                        <option value={1}>
                            Seleccione la descripcion de la actividad
                        </option>
                        {especialidades.map((esp, index) => (
                            <option key={index} value={esp.id}>
                                {esp.descripcion}
                            </option>
                        ))}
                    </select>
                    <InputError
                        message={errors.especialidad_id}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="dia_semana"
                        value="Dias de la semana"
                    />

                    <div className="mt-2 space-y-2">
                        {dias.map((dia) => (
                            <>
                                <div className="inline-flex items-center mb-4 pe-2">
                                    <input
                                        id={dia.toLowerCase()}
                                        type="radio"
                                        name="dia_semana"
                                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        value={dia.toLowerCase()}
                                        checked={
                                            data.dia_semana ===
                                            dia.toLowerCase()
                                        }
                                        onChange={handleRadioChange}
                                    />
                                    <label
                                        for="default-radio-1"
                                        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {dia}
                                    </label>
                                </div>
                                {/* 
                                <label
                                    key={dia}
                                    className="inline-flex items-center"
                                >
                                    <input
                                        type="radio"
                                        id={dia.toLowerCase()}
                                        name="dia_semana"
                                        value={dia.toLowerCase()}
                                        checked={
                                            data.dia_semana ===
                                            dia.toLowerCase()
                                        }
                                        onChange={handleRadioChange}
                                    />
                                    <span className="ml-2"></span>
                                </label> */}
                            </>
                        ))}
                    </div>

                    <InputError message={errors.dia_semana} className="mt-2" />
                </div>

                <div className="grid-cols-2 flex p-2">
                    <div>
                        <InputLabel
                            htmlFor="hora_inicio"
                            value="Hora de inicio"
                        />

                        <select
                            id="hora_inicio"
                            name="hora_inicio"
                            value={data.hora_inicio}
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-10 w-28"
                            autoComplete="hora_inicio"
                            onChange={(e) =>
                                setData("hora_inicio", e.target.value)
                            }
                        >
                            <option  value={1}>Selecciona una hora</option>
                            {Array.from({ length: 14 }, (_, index) => {
                                const hour = index + 8; // Empieza en 8:00 AM y suma cada hora
                                const formattedHour = `${hour
                                    .toString()
                                    .padStart(2, "0")}:00`; // Formatea la hora a "HH:00"
                                return (
                                    <option
                                        key={formattedHour}
                                        value={formattedHour}
                                    >
                                        {formattedHour}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError
                            message={errors.hora_inicio}
                            className="mt-2"
                        />
                    </div>
                    <div className="ms-5">
                        <InputLabel
                            htmlFor="hora_fin"
                            value="Hora de finalizacion"
                        />

                        <select
                            id="hora_fin"
                            name="hora_fin"
                            value={data.hora_fin}
                            className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm h-10 w-28"
                            autoComplete="hora_fin"
                            onChange={(e) =>
                                setData("hora_fin", e.target.value)
                            }
                        >
                            <option  value={1}>Seleccione una hora</option>
                            {Array.from({ length: 14 }, (_, index) => {
                                const hour = index + 9; // Empieza en 9:00 AM y suma cada hora
                                const formattedHour = `${hour
                                    .toString()
                                    .padStart(2, "0")}:00`; // Formatea la hora a "HH:00"
                                return (
                                    <option
                                        key={formattedHour}
                                        value={formattedHour}
                                    >
                                        {formattedHour}
                                    </option>
                                );
                            })}
                        </select>

                        <InputError
                            message={errors.hora_fin}
                            className="mt-2"
                        />
                    </div>
                </div>

                <div className="mt-4">
                    <InputLabel
                        htmlFor="duracion"
                        value="Duracion en minutos"
                    />

                    <TextInput
                        id="duracion"
                        type="number"
                        name="duracion"
                        value={data.duracion}
                        className="mt-1  "
                        autoComplete="duracion"
                        onChange={(e) => setData("duracion", e.target.value)}
                    />

                    <InputError message={errors.duracion} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="cupos" value="Cupos" />

                    <TextInput
                        id="cupos"
                        type="number"
                        name="cupos"
                        value={data.cupos}
                        className="mt-1 block "
                        autoComplete="cupos"
                        onChange={(e) => setData("cupos", e.target.value)}
                    />

                    <InputError message={errors.cupos} className="mt-2" />
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
                        <option  value={1}>Seleccione el id del profesor</option>
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
