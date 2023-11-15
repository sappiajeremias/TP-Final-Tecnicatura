import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CardEjercicio = (props) => {
    const ejercicio = props.ejercicio;
    console.log(ejercicio);
    const [coleccionEjercicio, setColeccionEjercicio] = useState([]);
    const [rutina, setRutina] = useState("");
    console.log(ejercicio);
    const { data, setData, post, put, processing, errors, reset } = useForm({
        ejercicio_id: ejercicio.id,
        rutina_id: "" || ejercicio.rutina_id,
        repeticiones: 0 || ejercicio.repeticiones,
        peso: 0 || ejercicio.peso,
        series: 0 || ejercicio.series,
    });
    useEffect(() => {
        if (ejercicio.length > 0 && ejercicio[0].ejercicio) {
            const nuevosEjercicios = ejercicio.map((item) => {
                // Aquí puedes realizar cualquier procesamiento adicional si es necesario
                return item.ejercicio;
            });

            setColeccionEjercicio(nuevosEjercicios);
            data.ejercicio_id = ejercicio.ejercicio.id;
            data.rutina_id = ejercicio.rutina_id;
            data.repeticiones = ejercicio.repeticiones;
            data.peso = ejercicio.peso;
            data.series = ejercicio.series;
        }
        const obtenerIdDesdeURL = () => {
            const partesDeLaRuta = window.location.pathname.split("/");
            const id = partesDeLaRuta[partesDeLaRuta.length - 1];
            return parseInt(id, 10);
        };

        const id = obtenerIdDesdeURL();
        data.rutina_id = id;
    }, []);
    console.log(data);

    const [modalOpen, setModalOpen] = useState(false);
    const submit = (e) => {
        e.preventDefault();
        if (props.isEdit) {
            post(`/ejercicioRutinaEditar`, data);
            console.log(editar);
        } else {
            post(`/agregarEjercicio`, data);
            console.log(nuevo);
        }

        setModalOpen(false);
    };

    const eliminarEjercicio = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción no se puede deshacer",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
        }).then((result) => {
            if (result.isConfirmed) {
                // Utiliza el método 'delete' del router para eliminar el ejercicio
                router
                    .post(`/ejercicioRutina`, ejercicio)
                    .then(() => {
                        Swal.fire({
                            title: "¡Eliminado!",
                            text: "El ejercicio ha sido eliminado correctamente.",
                            icon: "success",
                        });
                    })
                    .catch((error) => {
                        console.error(
                            "Error al intentar eliminar el ejercicio",
                            error
                        );
                        Swal.fire({
                            title: "Error",
                            text: "Hubo un error al intentar eliminar el ejercicio.",
                            icon: "error",
                        });
                    });
            }
        });
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
            <div className="container p-3">
                {ejercicio.ejercicio ? (
                    <div className="flex bg-white border border-gray-200 rounded-lg shadow  md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <a
                            onClick={() => seleccionarEjercicio()}
                            className="flex flex-col max-w-6xl items-center md:flex-row"
                        >
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={ejercicio.ejercicio.imagen}
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal w-96">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {ejercicio.ejercicio.nombre}
                                </h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    <span className="text-1xl font-semibold">
                                        Parte del cuerpo:{" "}
                                    </span>{" "}
                                    {ejercicio.ejercicio.parte_cuerpo}
                                </h5>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className="text-1xl font-semibold">
                                        Repeticiones:{" "}
                                    </span>{" "}
                                    {ejercicio.repeticiones}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className="text-1xl font-semibold">
                                        Series:{" "}
                                    </span>{" "}
                                    {ejercicio.series}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className="text-1xl font-semibold">
                                        Kg:{" "}
                                    </span>{" "}
                                    {ejercicio.peso}
                                </p>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    <span className="text-1xl font-semibold me-2">
                                        Musculo:
                                    </span>
                                    {ejercicio.ejercicio.musculo}
                                </p>
                            </div>
                        </a>{" "}
                        <button className="px-4" onClick={eliminarEjercicio}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="26"
                                height="26"
                                fill="currentColor"
                                className="bi bi-trash"
                                viewBox="0 0 16 16"
                            >
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                            </svg>
                        </button>
                    </div>
                ) : (
                    <a
                        className={`flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ${
                            data.rutina_id != null ? "cursor-pointer" : ""
                        }`}
                        onClick={() =>
                            data.rutina_id && seleccionarEjercicio()
                        }
                    >
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={ejercicio.imagen}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {ejercicio.nombre}
                            </h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <span className="text-1xl font-semibold">
                                    Parte del cuerpo:{" "}
                                </span>{" "}
                                {ejercicio.parte_cuerpo}
                            </h5>
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            <span className="text-1xl font-semibold">
                                Descripcion:{" "}
                            </span>{" "}
                            {ejercicio.descripcion}
                        </p> */}
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span className="text-1xl font-semibold me-2">
                                    Musculo:
                                </span>
                                {ejercicio.musculo}
                            </p>
                        </div>
                    </a>
                )}
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
