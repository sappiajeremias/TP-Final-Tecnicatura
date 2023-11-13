import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import CardEjercicio from "../Ejercicios/CardEjercicio";

const EjerciciosRutina = ({ auth, ejercicios }) => {
    return (
        <Authenticated auth={auth}>
            <h1>EjerciciosRutina</h1>
            {ejercicios.map((ejercicio) => (
                <div className="p-3">
                    <a className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img
                            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={ejercicio.ejercicio.imagen}
                            alt=""
                        />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {ejercicio.ejercicio.name}
                            </h5>
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {ejercicio.ejercicio.parte_cuerpo}
                            </h5>
                            {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {ejercicio.description}
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                {ejercicio.equipment}
                            </p> */}
                        </div>
                    </a>
                </div>
            ))}
        </Authenticated>
    );
};

export default EjerciciosRutina;
