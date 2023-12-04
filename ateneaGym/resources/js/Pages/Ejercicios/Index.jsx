import React, { useState, useEffect } from "react";
import CardEjercicio from "./CardEjercicio";
import ReactPaginate from "react-paginate";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import NuevoEjercicio from "./NuevoEjercicio";
import Modal from "@/Components/Modal";
import Busqueda from "@/Components/tabla/Busqueda";

const Index = ({ auth, ejercicios }) => {
    const [coleccionEjercicio, setColeccionEjercicio] = useState(ejercicios);
    const [searchValue, setSearchValue] = useState("");
    const [rutina, setRutina] = useState("");
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 3;
    const pagesVisited = pageNumber * itemsPerPage;
    const [modalOpen, setModalOpen] = useState(false);

    const pageCount = Math.ceil(coleccionEjercicio.length / itemsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const cerrarModal = () => {
        setModalOpen(false);
    };

    const abrirModal = () => {
        setModalOpen(true);
    };

    useEffect(() => {
        handleSearch(searchValue);
    }, [searchValue, ejercicios]);

    const handleSearch = (newValue) => {
        // Filter exercises based on multiple attributes
        const filteredEjercicios = ejercicios.filter((ejercicio) => {
            const searchLower = newValue.toLowerCase();
            return (
                ejercicio.nombre.toLowerCase().includes(searchLower) ||
                ejercicio.musculo.toLowerCase().includes(searchLower) ||
                ejercicio.parte_cuerpo.toLowerCase().includes(searchLower)
            );
        });

        setColeccionEjercicio(filteredEjercicios);
        setPageNumber(0); // Reset to the first page after filtering
    };
    return (
        <Authenticated auth={auth}>
            <div className="px-5 pt-6">
                <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    Ejercicios
                </h1>{" "}
                <div>
                    <div className="flex justify-end pe-3">
                        <div className="w-52 me-5">
                            <Busqueda
                                searchValue={searchValue}
                                setSearchValue={setSearchValue}
                                onSearch={handleSearch}
                            />
                        </div>
                        <button
                            onClick={abrirModal}
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Agregar Nuevo Ejercicio
                        </button>
                    </div>
                </div>
                <div>
                    {coleccionEjercicio ? (
                        coleccionEjercicio
                            .slice(pagesVisited, pagesVisited + itemsPerPage)
                            .map((ejercicio, index) => (
                                <div key={index} className="card">
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
                <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                    <NuevoEjercicio
                        cerrarModal={cerrarModal}
                        setModalOpen
                    ></NuevoEjercicio>
                </Modal>
            </div>
        </Authenticated>
    );
};

export default Index;
