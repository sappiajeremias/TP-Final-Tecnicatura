import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, router, useForm } from "@inertiajs/react";
export default function CrearActividad({ isEdit, objeto, profesores }) {
    const { data, setData, put, post, processing, errors, reset } = useForm({
        dia_semana: objeto.dia_semana || "",
        hora_inicio: objeto.hora_inicio || "",
        hora_fin: objeto.hora_fin || "",
        duracion: objeto.duracion || "",
        descripcion: objeto.descripcion || "",
        profesor_id: objeto.profesor_id || "",
    });



    const submit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(`/actividad/${objeto.id}`, { onSuccess: () => { alert('Actividad actualizada'); location.reload() } });
        } else {
            post(route("actividad.store"));
        }
    };

    return (
        <>

            <Head title="Actividades" />

            <form onSubmit={submit}>
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
                        required
                    />

                    <InputError
                        message={errors.descripcion}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="dia_semana"
                        value="Dias de la semana(Separados por comas)"
                    />

                    <TextInput
                        id="dia_semana"
                        name="dia_semana"
                        value={data.dia_semana}
                        className="mt-1 block w-full"
                        autoComplete="dia_semana"
                        isFocused={true}
                        onChange={(e) =>
                            setData("dia_semana", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.dia_semana}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="hora_inicio"
                        value="Hora de inicio (Formato: 09:00)"
                    />

                    <TextInput
                        id="hora_inicio"
                        name="hora_inicio"
                        value={data.hora_inicio}
                        className="mt-1 block w-full"
                        autoComplete="hora_inicio"
                        isFocused={true}
                        onChange={(e) =>
                            setData("hora_inicio", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.hora_inicio}
                        className="mt-2"
                    />
                </div>
                <div>
                    <InputLabel
                        htmlFor="hora_fin"
                        value="Hora de finalizacion (Formato: 09:00)"
                    />

                    <TextInput
                        id="hora_fin"
                        name="hora_fin"
                        value={data.hora_fin}
                        className="mt-1 block w-full"
                        autoComplete="hora_fin"
                        isFocused={true}
                        onChange={(e) =>
                            setData("hora_fin", e.target.value)
                        }
                        required
                    />

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
                        required
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
                                    {profe.id} 
                                </option>
                            )
                        )}
                    </select>
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
