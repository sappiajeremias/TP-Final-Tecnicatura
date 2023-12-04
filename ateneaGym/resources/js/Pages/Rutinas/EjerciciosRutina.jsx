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
