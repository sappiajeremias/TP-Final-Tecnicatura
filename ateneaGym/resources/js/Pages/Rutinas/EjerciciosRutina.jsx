import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import CardEjercicio from "../Ejercicios/CardEjercicio";
import Modal from "@/Components/Modal";
import Index from "../Ejercicios/Index";
import AgregarEjercicio from "./AgregarEjercicio";
import { router } from "@inertiajs/react";

import ModalEditar from "@/Components/tabla/ModalEditar";

const EjerciciosRutina = ({
    auth,
    ejercicios,
    ejerciciosAll,
    nombreRutina,
}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const cerrarModal = () => {
        setModalOpen(false);
    };
    const nuevaRutina = () => {
        setModalOpen(true);
    };

    console.log(ejercicios);
    return (
        <Authenticated auth={auth}>
            <h1 className="text-xl font-sans font-medium text-center py-3">
                Ejercicios Rutina {nombreRutina}
            </h1>{" "}
            <div className="flex justify-end pe-3">
                <ModalEditar
                    title="Agregar Ejercicio"
                    isEdit={false}
                    clase={"bg-gradient-to-br from-pink-500 to-orange-400"}
                >
                    <AgregarEjercicio
                        ejercicios={ejerciciosAll}
                    ></AgregarEjercicio>
                </ModalEditar>
            </div>
            {/* <div className="flex justify-end pe-3">
                {" "}
                <button
                    data-modal-target="select-modal"
                    data-modal-toggle="select-modal"
                    onClick={nuevaRutina}
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Agregar ejercicio
                </button>
            </div> */}
            <div className="grid justify-center">
                {ejercicios.map((ejercicio) => (
                    <CardEjercicio
                        isEdit={true}
                        key={ejercicio.id}
                        ejercicio={ejercicio}
                    ></CardEjercicio>
                ))}
            </div>
        </Authenticated>
    );
};

export default EjerciciosRutina;
