import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Swal from "sweetalert2";
import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import Register from "../Auth/Register";
import Thead from "@/Components/tabla/Thead";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import Busqueda from "@/Components/tabla/Busqueda";

const TablaUsuarios = ({ usuarios, roles }) => {
    const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; // Number of items to show per page

    useEffect(() => {
        handleSearch(searchValue);
    }, [usuarios, searchValue]);

    const handleSearch = (newValue) => {
        // Filter users based on the new search value
        const filteredUsuarios = usuarios.filter((user) => {
            return nombreProp.some((nombre) => {
                return user[nombre]
                    .toString()
                    .toLowerCase()
                    .includes(newValue.toLowerCase());
            });
        });

        setUsuariosFiltrados(filteredUsuarios);
        setCurrentPage(0); // Reset to the first page after filtering
    };

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const offset = currentPage * itemsPerPage;
    const paginatedUsuarios = usuariosFiltrados.slice(
        offset,
        offset + itemsPerPage
    );

    const nombreColumnas = [
        "Nombre",
        "Apellido",
        "Dni",
        "Fecha De Nacimiento",
        "Email",
        "Rol",
        "Acciones",
    ];

    const nombreProp = ["name", "apellido", "dni", "fecha_nac", "email", "rol"];

    const handleDelete = (usuario) => {
        Swal.fire({
            title: "Confirmar",
            text: "Eliminar usuario?",
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#938592",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/usuarios/${usuario.id}`);
                location.reload();
            }
        });
    };

    const pageCount = Math.ceil(usuariosFiltrados.length / itemsPerPage);

    return (
        <div className="container m-auto p-5 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
            <Table
                titulo={"  Tabla Usuarios"}
                boton={
                    <ModalEditar isEdit={false}>
                        <Register isEdit={false} objeto={""} roles={roles} />
                    </ModalEditar>
                }
                busqueda={
                    <Busqueda
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onSearch={handleSearch}
                    />
                }
            >
                <Thead nombreColumnas={nombreColumnas} />
                <tbody>
                    {paginatedUsuarios.map((usuario) => (
                        <React.Fragment key={usuario.id}>
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={usuario.id}
                            >
                                {nombreProp.map((nombre, index) => (
                                    <td
                                        className="px-6 py-4 sm:px-4 sm:py-2"
                                        key={index}
                                    >
                                        {usuario[nombre]}
                                    </td>
                                ))}
                                <td className="px-6 py-4 flex">
                                    <ModalEditar isEdit={true}>
                                        <Register
                                            isEdit={true}
                                            objeto={usuario}
                                            roles={roles}
                                        />
                                    </ModalEditar>
                                    <BotonEliminar
                                        click={() => handleDelete(usuario)}
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>

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
            </Table>
        </div>
    );
};

export default TablaUsuarios;
