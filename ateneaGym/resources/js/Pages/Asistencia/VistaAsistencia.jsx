import React from "react";

const VistaAsistencia = ({ asistencia }) => {
    console.log(asistencia);
    return (
        <div className="m-auto pt-10">
            <h1 className="text-center font-semibold text-2xl py-5">
                Asistencia
            </h1>
            {asistencia.map((item) => (
                <div
                    key={item.id} // Make sure to add a unique key for each item in the array
                    className="max-w-xs mx-auto bg-white shadow-md rounded overflow-hidden mb-4 sm:max-w-md md:max-w-lg lg:max-w-xl"
                >
                    <div className="border-l-4 border-rosa-600 p-4 flex flex-col sm:flex-row justify-between items-center">
                        <div className="mb-2 sm:mb-0">
                            <span className="text-lg font-bold">
                                {item.especialidad.descripcion}
                            </span>
                            <span
                                className={`block mt-2 text-sm rounded-xl ${
                                    item.estado === "presente"
                                        ? "bg-green-200 text-green-700"
                                        : "bg-red-200 text-red-700"
                                } px-2 `}
                            >
                                {item.estado}
                            </span>
                        </div>
                        <span className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="23"
                                height="23"
                                fill="currentColor"
                                className="bi bi-calendar-check "
                                viewBox="0 0 20 20"
                            >
                                <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                            </svg>
                            {item.fecha}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VistaAsistencia;
