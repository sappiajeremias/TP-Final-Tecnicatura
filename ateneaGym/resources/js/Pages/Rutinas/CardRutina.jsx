import { router } from "@inertiajs/react";
import React from "react";

const CardRutina = ({ rutina }) => {
    const verRutina = () => {
        router.get(`/rutina/${rutina.id}`);
    };
    const getDificultadStyle = () => {
        let styleClass = "";
        switch (rutina.dificultad) {
            case "facil":
                styleClass = "bg-green-200 text-green-700";
                break;
            case "medio":
                styleClass = "bg-blue-200 text-blue-700";
                break;
            default:
                styleClass = "bg-red-200 text-red-700";
        }
        return styleClass;
    };
    return (
        <div className="m-auto">
            <button
                onClick={verRutina}
                className="mx-4 md:mx-8 lg:mx-16 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-8 md:px-16 py-8 md:py-10"
            >
                <img
                    width={80}
                    className="m-auto max-w-full h-auto rounded-t-lg md:h-24 md:w-24"
                    src="/assets/img/rutina/rutina.svg"
                    alt=""
                />
                <div className="p-5">
                    <h5 className="mb-2 text-lg md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {rutina.nombre}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <span className="text-lg font-semibold text-gray-900">
                            mes:
                        </span>{" "}
                        {rutina.mes}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        <span className="text-lg font-semibold text-gray-900">
                            dia:
                        </span>{" "}
                        {rutina.dia_semana}
                    </p>
                </div>
                <div className="flex justify-center">
                    <span
                        className={`block w-16 text-center text-sm rounded-md ${getDificultadStyle()}`}
                    >
                        {rutina.dificultad}
                    </span>
                </div>
            </button>
        </div>
    );
};

export default CardRutina;
