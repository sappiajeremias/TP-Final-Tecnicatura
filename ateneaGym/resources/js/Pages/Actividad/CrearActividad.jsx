import { useEffect, useState } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
export default function CrearActividad({ isEdit, objeto, profesores }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        dia_semana: [],
        hora_inicio: objeto.hora_inicio || "",
        hora_fin: objeto.hora_fin || "",
        duracion: objeto.duracion || "",
        descripcion: objeto.descripcion || "",
        profesor_id: objeto.profesor_id || "",
    });

    const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];

    //const [diasSelected, setDiasSelected] = useState(objeto.dia_semana.split(",")); // Inicializa con los valores desde el objeto


    const handleCheckboxChange = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;
        let updatedDiaSemana;

        if (isChecked) {
            // Agrega el día seleccionado solo si no está en la lista
            if (!data.dia_semana.includes(value)) {
                updatedDiaSemana = [...data.dia_semana, value];
            } else {
                updatedDiaSemana = data.dia_semana;
            }
        } else {
            // Elimina el día deseleccionado de la lista
            updatedDiaSemana = data.dia_semana.filter((dia) => dia !== value);
        }

        // Actualiza el estado data con los nuevos valores seleccionados
        setData("dia_semana", updatedDiaSemana);
    };





    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data.dia_semana)
        if (isEdit) {
            put(`/actividad/${objeto.id}`, {
                dia_semana: data.dia_semana, // Envia solo los días seleccionados
                hora_inicio: data.hora_inicio,
                hora_fin: data.hora_fin,
                duracion: data.duracion,
                descripcion: data.descripcion,
                profesor_id: data.profesor_id,
                onSuccess: () => {
                    alert('Actividad actualizada');
                    document.getElementById('cierreModal').click();
                },
            });
        } else {
            post(route('actividad.store'), {
                dia_semana: data.dia_semana, // Envia solo los días seleccionados
                hora_inicio: data.hora_inicio,
                hora_fin: data.hora_fin,
                duracion: data.duracion,
                descripcion: data.descripcion,
                profesor_id: data.profesor_id,
            });
        }
    };


    return (
        <>

            <Head title="Actividades" />

            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel htmlFor="descripcion" value="Descripcion" />

                    <TextInput
                        id="descripcion"
                        name="descripcion"
                        value={data.descripcion}
                        className="mt-1 block w-full"
                        autoComplete="Descripcion"
                        isFocused={true}
                        onChange={(e) =>
                            setData("descripcion", e.target.value)
                        }
                        
                    />

                    <InputError
                        message={errors.descripcion}
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
                            <label key={dia} className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    id={dia.toLowerCase()}
                                    name="dia_semana[]"
                                    value={dia.toLowerCase()}
                                    checked={data.dia_semana.includes(dia.toLowerCase())}
                                    onChange={handleCheckboxChange}
                                />
                                <span className="ml-2">{dia}</span>
                            </label>
                        ))}
                    </div>

                    <InputError
                        message={errors.dia_semana}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="hora_inicio"
                        value="Hora de inicio"
                    />

                    <select
                        id="hora_inicio"
                        name="hora_inicio"
                        value={data.hora_inicio}
                        className="mt-1 block w-full"
                        autoComplete="hora_inicio"
                        onChange={(e) => setData("hora_inicio", e.target.value)}
                        
                    >
                        <option value="">Selecciona una hora</option>
                        {Array.from({ length: 14 }, (_, index) => {
                            const hour = index + 8; // Empieza en 8:00 AM y suma cada hora
                            const formattedHour = `${hour.toString().padStart(2, "0")}:00`; // Formatea la hora a "HH:00"
                            return (
                                <option key={formattedHour} value={formattedHour}>
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
                <div>
                    <InputLabel
                        htmlFor="hora_fin"
                        value="Hora de finalizacion"
                    />

                    <select
                        id="hora_fin"
                        name="hora_fin"
                        value={data.hora_fin}
                        className="mt-1 block w-full"
                        autoComplete="hora_fin"
                        onChange={(e) => setData("hora_fin", e.target.value)}
                        
                    >
                        <option value="">Seleccione una hora</option>
                        {Array.from({ length: 14 }, (_, index) => {
                            const hour = index + 9; // Empieza en 9:00 AM y suma cada hora
                            const formattedHour = `${hour.toString().padStart(2, "0")}:00`; // Formatea la hora a "HH:00"
                            return (
                                <option key={formattedHour} value={formattedHour}>
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
                        className="mt-1 block w-full"
                        autoComplete="duracion"
                        onChange={(e) =>
                            setData("duracion", e.target.value)
                        }
                        
                    />

                    <InputError
                        message={errors.duracion}
                        className="mt-2"
                    />
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
                        {profesores.map((profe, index) =>
                        (
                            <option key={index} value={profe.id}>
                                {profe.nombre_apellido}
                            </option>
                        )
                        )}
                    </select>
                    <InputError
                        message={errors.profesor_id}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Editar
                    </PrimaryButton>
                </div>
                
            </form>

        </>
    );
}
