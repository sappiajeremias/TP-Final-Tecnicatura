import React from "react";
import Thead from "./tabla/Thead";
import TrBody from "./tabla/TrBody";
import TituloTabla from "./tabla/TituloTabla";

const Table = ({ children, titulo, boton }) => {
    // const columnas = ["nombre", "dni"];

    return (
        <div className="relative overflow-x-auto shadow-lg sm:rounded-lg border-solid border-pink-400 border-2 bg-white">
            <TituloTabla titulo={titulo}></TituloTabla>
            <div className="flex justify-between align-baseline px-5 pb-5 pt-2">
                <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    aria-hidden="true"
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <input
                                type="text"
                                id="simple-search"
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search"
                                required
                            />
                        </div>
                    </form>
                </div>
                {boton}
            </div>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                {children}
            </table>
        </div>
    );
};

export default Table;
