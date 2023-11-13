import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import CardEjercicio from "../Ejercicios/CardEjercicio";

const EjerciciosRutina = ({ auth, ejercicios }) => {
    return (
        <Authenticated auth={auth}>
            <h1 className="text-xl font-sans font-medium text-center py-3">
                Ejercicios Rutina {ejercicios[0].rutina_id}
            </h1>
            <div className="flex justify-end pe-3">
                <button
                    type="button"
                    className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                    Agregar ejercicio
                </button>
            </div>
            <div className="grid justify-center">
                {ejercicios.map((ejercicio) => (
                    <CardEjercicio ejercicio={ejercicio}></CardEjercicio>
                ))}
            </div>
        </Authenticated>
    );
};

export default EjerciciosRutina;
