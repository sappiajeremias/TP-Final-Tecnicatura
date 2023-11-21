import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import CrearRelacion from "./CrearRelacion";
import Busqueda from "@/Components/tabla/Busqueda";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import ReactPaginate from "react-paginate";
import Thead from "@/Components/tabla/Thead";

export default function ListarRelaciones({
    especialidadesProfesores,
    especialidades,
    profesores,
}) {
    const [especialidadesFiltradas, setEspecialidadesFiltradas] = useState(
        especialidadesProfesores
    );
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items to show per page

    useEffect(() => {
        handleSearch(searchValue);
    }, [especialidadesProfesores, searchValue]);

    const handleSearch = (newValue) => {
        // Filter especialidadesProfesores based on the new search value
        const filteredEspecialidades = especialidadesProfesores.filter(
            (esp) => {
                return nombreProp.some((nombre) => {
                    return esp[nombre]
                        .toString()
                        .toLowerCase()
                        .includes(newValue.toLowerCase());
                });
            }
        );

        setEspecialidadesFiltradas(filteredEspecialidades);
        setCurrentPage(0); // Reset to the first page after filtering
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedEspecialidades = especialidadesFiltradas.slice(
        offset,
        offset + itemsPerPage
    );

    const nombreColumnas = ["ID", "Nombre Profesor", "Descripcion", "Acciones"];
    const nombreProp = ["id", "nombre", "descripcion"];

    const deleteHandler = (especialidad) => {
        Swal.fire({
            title: "Confirmar",
            text: "Eliminar especialidad? ",
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#938592",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/especialidad/${especialidad.id}`);
                location.reload();
            }
        });
    };

    const pageCount = Math.ceil(especialidadesFiltradas.length / itemsPerPage);

    return (
        <div className="container m-auto max-w-6xl p-5">
            <Table
                titulo={"Tabla relaciones especialidades y profesores"}
                boton={[
                    <ModalEditar isEdit={false} title={"ASIGNAR PROFESOR"}>
                        <CrearRelacion
                            isEdit={false}
                            objeto={""}
                            especialidadesProfesores={especialidadesProfesores}
                            especialidades={especialidades}
                            profesores={profesores}
                        ></CrearRelacion>
                    </ModalEditar>,
                ]}
                busqueda={<Busqueda onSearch={handleSearch} />}
            >
                <Thead nombreColumnas={nombreColumnas} />
                <tbody>
                    {paginatedEspecialidades.map((esp) => (
                        <React.Fragment key={esp.id}>
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={esp.id}
                            >
                                {nombreProp.map((nombre, index) => (
                                    <td className="px-6 py-4" key={index}>
                                        {esp[nombre]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 flex">
                                    <ModalEditar isEdit={true}>
                                        <CrearRelacion
                                            isEdit={true}
                                            objeto={esp}
                                            especialidadesProfesores={
                                                especialidadesProfesores
                                            }
                                            especialidades={especialidades}
                                            profesores={profesores}
                                        />
                                    </ModalEditar>
                                    <BotonEliminar
                                        click={() => deleteHandler(esp)}
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
                <div className="flex ms-4 my-4">
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
                        onPageChange={handlePageChange}
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
            </Table>
        </div>
    );
}
