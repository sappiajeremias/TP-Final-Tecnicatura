import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import Thead from "@/Components/tabla/Thead";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import CrearActividad from "./CrearActividad";
import Busqueda from "@/Components/tabla/Busqueda";

export default function ListarActs({
    actividades,
    profesores,
    especialidades,
}) {
    const [actividadesFiltradas, setActividadesFiltradas] =
        useState(actividades);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 10; // Number of items to show per page

    useEffect(() => {
        handleSearch(searchValue);
    }, [actividades, searchValue]);

    const handleSearch = (newValue) => {
        setSearchValue(newValue);

        // Filter activities based on the new search value
        const filteredActivities = actividades.filter((act) => {
            return nombreProp.some((nombre) => {
                if (nombre === "especialidad_id") {
                    const especialidadDescripcion =
                        especialidades.find(
                            (esp) => esp.id === act.especialidad_id
                        )?.descripcion || "";
                    return especialidadDescripcion
                        .toLowerCase()
                        .includes(newValue.toLowerCase());
                }
                return act[nombre]
                    .toString()
                    .toLowerCase()
                    .includes(newValue.toLowerCase());
            });
        });

        setActividadesFiltradas(filteredActivities);
        setCurrentPage(0); // Reset to the first page after filtering
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedActividades = actividadesFiltradas.slice(
        offset,
        offset + itemsPerPage
    );

    const pageCount = Math.ceil(actividadesFiltradas.length / itemsPerPage);

    const nombreColumnas = [
        "ID",
        "Dias Semana",
        "Hora Inicio",
        "Hora Fin",
        "Duracion",
        "Descripcion",
        "Cupos",
        "Acciones",
    ];
    const nombreProp = [
        "id",
        "dia_semana",
        "hora_inicio",
        "hora_fin",
        "duracion",
        "especialidad_id",
        "cupos",
    ];

    const deleteHandler = (actividad) => {
        router.delete(`/actividad/${actividad.id}`, {
            onBefore: () => confirm("Estas seguro?"),
            onSuccess: () => alert("Actividad Eliminada"),
        });
    };

    return (
        <>
            <div className="container m-auto max-w-6xl p-5">
                <Table
                    titulo={"Tabla Actividades"}
                    boton={
                        <ModalEditar isEdit={false}>
                            <CrearActividad
                                isEdit={false}
                                objeto={""}
                                profesores={profesores}
                                especialidades={especialidades}
                            ></CrearActividad>
                        </ModalEditar>
                    }
                    busqueda={<Busqueda onSearch={handleSearch} />}
                >
                    <Thead nombreColumnas={nombreColumnas} />
                    <tbody>
                        {paginatedActividades.map((act) => (
                            <React.Fragment key={act.id}>
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={act.id}
                                >
                                    {nombreProp.map((nombre, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {nombre === "especialidad_id"
                                                ? // Find the description of the corresponding specialty
                                                  especialidades.find(
                                                      (esp) =>
                                                          esp.id ===
                                                          act.especialidad_id
                                                  )?.descripcion || ""
                                                : act[nombre]}
                                        </td>
                                    ))}

                                    <td className="px-6 py-4 flex">
                                        <ModalEditar isEdit={true}>
                                            <CrearActividad
                                                isEdit={true}
                                                objeto={act}
                                                profesores={profesores}
                                                especialidades={especialidades}
                                            />
                                        </ModalEditar>
                                        <BotonEliminar
                                            click={() => deleteHandler(act)}
                                        />
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                    <div className="flex justify-center my-4">
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
        </>
    );
}
