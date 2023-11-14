import React, { useState, useEffect } from "react";
import CardEjercicio from "../Ejercicios/CardEjercicio";
import ReactPaginate from "react-paginate";

const AgregarEjercicio = ({ auth, ejercicios}) => {
    const [coleccionEjercicio, setColeccionEjercicio] = useState(ejercicios);

    console.log(ejercicios);
    const [pageNumber, setPageNumber] = useState(0);
    console.log(ejercicios);
    const itemsPerPage = 4;
    const pagesVisited = pageNumber * itemsPerPage;
    const [modalOpen, setModalOpen] = useState(false);
    const pageCount = Math.ceil(coleccionEjercicio.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="container">
            <div className="">
                {coleccionEjercicio ? (
                    coleccionEjercicio
                        .slice(pagesVisited, pagesVisited + itemsPerPage)
                        .map((ejercicio, index) => (
                            <div key={index} className="card flex bg">
                                <CardEjercicio
                                    ejercicio={ejercicio}
                                ></CardEjercicio>
                            </div>
                        ))
                ) : (
                    <div>
                        <h1>No se encontraron ejercicios</h1>
                    </div>
                )}
            </div>
            <div className="px-4 mb-3">
                <ReactPaginate
                    previousLabel={
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500  border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Previous</span>
                            <svg
                                className="w-2.5 h-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 1 1 5l4 4"
                                />
                            </svg>
                        </a>
                    }
                    nextLabel={
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            <span className="sr-only">Next</span>
                            <svg
                                className="w-2.5 h-2.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                        </a>
                    }
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={
                        "flex items-center -space-x-px h-8 text-sm"
                    }
                    previousLinkClassName={
                        "flex items-center justify-center h-8 ml-0 leading-tight text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                    nextLinkClassName={
                        "flex items-center justify-center h-8 leading-tight text-gray-500 border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                    disabledClassName={"paginationDisabled"}
                    activeClassName={
                        "z-10 flex items-center justify-center h-8 leading-tight text-blue-600 bg-pink-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    }
                    pageLinkClassName={
                        "flex items-center justify-center px-3 h-8 leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                />
            </div>
        </div>
    );
};

export default AgregarEjercicio;
