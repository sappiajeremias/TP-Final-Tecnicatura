import React from "react";
import TituloTabla from "./tabla/TituloTabla";

const Table = ({ children, titulo, boton, busqueda }) => {
    return (
        <div className="overflow-x-auto shadow-lg sm:rounded-lg border-solid border-pink-400 border-2 bg-white">
            <TituloTabla titulo={titulo} />
            <div className="flex flex-col sm:flex-row justify-between align-baseline px-5 pb-2 sm:pb-5 pt-2">
                <div className="w-full sm:w-1/2 mb-2 sm:mb-0">{busqueda}</div>
                {boton}
            </div>
            <div className="w-full overflow-x-scroll">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    {children}
                </table>
            </div>
        </div>
    );
};

export default Table;
