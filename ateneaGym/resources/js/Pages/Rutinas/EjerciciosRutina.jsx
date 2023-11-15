import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import CardEjercicio from "../Ejercicios/CardEjercicio";
import Modal from "@/Components/Modal";
import Index from "../Ejercicios/Index";
import AgregarEjercicio from "./AgregarEjercicio";

const EjerciciosRutina = ({ auth, ejercicios, ejerciciosAll }) => {
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
                Ejercicios Rutina
            </h1>
            <div className="flex justify-end pe-3">
                <button
                    onClick={nuevaRutina}
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Agregar ejercicio
                </button>
            </div>
            <div className="grid justify-center">
                {ejercicios.map((ejercicio) => (
                    <CardEjercicio
                        isEdit={true}
                        key={ejercicio.id}
                        ejercicio={ejercicio}
                    ></CardEjercicio>
                ))}
            </div>
            <div className="py-3 max-w-xl">
                <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                    <div className="container flex pt-40">
                        <AgregarEjercicio
                            ejercicios={ejerciciosAll}
                        ></AgregarEjercicio>
                    </div>
                </Modal>
            </div>
        </Authenticated>
    );
};

export default EjerciciosRutina;
