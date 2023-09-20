import React from "react";
import Thead from "./tabla/Thead";
import TrBody from "./tabla/TrBody";

const Table = ({ nombreColumnas, coleccion, nombreProp }) => {
    // const columnas = ["nombre", "dni"];

    return (
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <Thead nombreColumnas={nombreColumnas}></Thead>
                <tbody>
                    <TrBody
                        coleccion={coleccion}
                        nombreProp={nombreProp}
                    ></TrBody>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
