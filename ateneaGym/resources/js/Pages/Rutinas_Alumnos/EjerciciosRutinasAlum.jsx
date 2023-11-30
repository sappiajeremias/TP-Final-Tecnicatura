import Authenticated from "@/Layouts/AuthenticatedLayout";
import React, { useState } from "react";
import CardEjercicioAlum from "./CardEjercicioAlum";


const EjerciciosRutinaAlum = ({ auth, ejercicios }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const cerrarModal = () => {
        setModalOpen(false);
    };
    const nuevaRutina = () => {
        setModalOpen(true);
    };

    const redireccion = () => {
        window.location.href = '/mis-rutinas';
    }
   
    console.log(ejercicios);
    return (
        <Authenticated auth={auth}>
            <h1 className="text-xl font-sans font-medium text-center py-3">
                Ejercicios Rutina
            </h1>
            
            <div className="grid justify-center">
                {ejercicios.map((ejercicio) => (
                    <CardEjercicioAlum
                        isEdit={true}
                        key={ejercicio.id}
                        ejercicio={ejercicio}
                    ></CardEjercicioAlum>
                ))}
            </div>
            <button
                            onClick={redireccion}
                            type="button"
                            className="ms-5 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Volver
                        </button>
        </Authenticated>
    );
};

export default EjerciciosRutinaAlum;
