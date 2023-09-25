import React from "react";
import Thead from "./tabla/Thead";
import TrBody from "./tabla/TrBody";

const Table = ({ children }) => {
    // const columnas = ["nombre", "dni"];

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                {children}

            </table>
        </div>
    );
};

export default Table;
