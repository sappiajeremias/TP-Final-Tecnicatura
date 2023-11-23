import React from "react";

const CardEjercicioAlum = (props) => {
    const ejercicio = props.ejercicio;
   
   
    return (
        <>
            <div className="container p-3">
                    <div className="flex bg-white border border-gray-200 rounded-lg shadow md:max-w-6xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <a
                            onClick={() => seleccionarEjercicio()}
                            className="flex flex-col max-w-6xl items-center md:flex-row"
                        >
                            <img
                                className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src={ejercicio.ejercicio.imagen}
                                alt=""
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal w-full md:w-96">
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
                                {ejercicio.adicional ? (
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        <span className="text-1xl font-semibold me-2">
                                            Adicional:
                                        </span>
                                        {ejercicio.adicional}
                                    </p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </a>
                        
                    </div>
            </div>
          

        </>
    );
};

export default CardEjercicioAlum;
