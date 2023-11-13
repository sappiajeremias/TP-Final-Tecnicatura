import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

const CardEjercicio = ({ ejercicio, rutina }) => {
    const { data, setData, post, processing, errors, reset } = useForm({
        ejercicio_id: ejercicio.id,
        rutina_id: rutina.id,
        repeticiones: 0,
        peso: 0,
        series: 0,
    });
    const [modalOpen, setModalOpen] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        console.log(e.value);
        post(`/agregarEjercicio`, data, {
            // onSuccess: () => {
            //     Swal.fire({
            //         icon: "success",
            //         text: "Turno sacado con exito!",
            //     }).then(() => {
            //         setModalOpen(false);
            //     });
            // },
        });

        setModalOpen(false);
    };

    const seleccionarEjercicio = (e) => {
        console.log(e);
        // console.log(auth.user.name);
        // setIdTurno(e);
        // Abre el modal cuando se hace clic en el botón de turno
        setModalOpen(true);
    };
    return (
        <>
            <div className="p-3">
                <a
                    onClick={() => seleccionarEjercicio(ejercicio.id)}
                    className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                >
                    <img
                        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src={ejercicio.gifUrl}
                        alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ejercicio.name}
                        </h5>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {ejercicio.bodyPart}
                        </h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {ejercicio.description}
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {ejercicio.equipment}
                        </p>
                    </div>
                </a>{" "}
            </div>
            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <div>
                    <form onSubmit={submit}>
                        <div className="mt-2">
                            <InputLabel
                                htmlFor="repeticiones"
                                value="Repeticiones"
                            />

                            <TextInput
                                id="repeticiones"
                                type="number"
                                name="repeticiones"
                                value={data.repeticiones}
                                className="mt-1 block w-full"
                                autoComplete="repeticiones"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("repeticiones", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.repeticiones}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <InputLabel htmlFor="series" value="Series" />

                            <TextInput
                                id="series"
                                type="number"
                                name="series"
                                value={data.series}
                                className="mt-1 block w-full"
                                autoComplete="series"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("series", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.series}
                                className="mt-2"
                            />
                        </div>
                        <div className="mt-2">
                            <InputLabel htmlFor="peso" value="Peso" />

                            <TextInput
                                id="peso"
                                type="number"
                                name="peso"
                                value={data.peso}
                                className="mt-1 block w-full"
                                autoComplete="peso"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("peso", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.peso}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-end mt-2">
                            <PrimaryButton
                                className="ml-4"
                                disabled={processing}
                            >
                                Confirmar
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </Modal>
        </>
    );
};

export default CardEjercicio;
