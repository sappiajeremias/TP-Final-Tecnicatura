import React, { useState } from "react";

import TituloTabla from "./tabla/TituloTabla";

const Table = ({ children, titulo, boton, busqueda }) => {
    return (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border-solid border-pink-400 border-2 bg-white">
            <TituloTabla titulo={titulo}></TituloTabla>
            <div className="flex justify-between align-baseline px-5 pb-5 pt-2">
                <div className="w-full md:w-1/2">{busqueda}</div>
                {boton}
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                {children}
            </table>
        </div>
    );
};

export default Table;
