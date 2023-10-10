import { router } from "@inertiajs/react";
import React from "react";

function TarjetaTurnos({ turnos }) {
    const cancelarTurno = (id) => {
        console.log(id);
        router.put(`/misTurnos/${id}`, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    text: "Turno Cancelado!",
                });
            },
        });
    };

    return (
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 m-auto mt-5">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                    Mis Turnos
                </h5>
            </div>
            <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
            >
                {turnos.map((turno) => (
                    <li className="py-3 sm:py-4" key={turno.id}>
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <img
                                    className="w-8 h-8 rounded-md"
                                    src="./assets/img/icon/turno.png"
                                    alt="Neil image"
                                />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {turno.actividad.especialidad.descripcion}
                                </p>
                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {turno.fecha}
                                </p>
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                {turno.hora}
                            </div>
                            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                <button
                                    onClick={() => cancelarTurno(turno.id)}
                                    title="cancelar"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="currentColor"
                                        className="bi bi-x-circle-fill text-red-700 hover:text-red-800"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TarjetaTurnos;
