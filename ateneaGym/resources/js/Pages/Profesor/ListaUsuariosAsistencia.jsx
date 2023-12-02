import Table from "@/Components/Table";
import React, { useState } from "react";
import Thead from "@/Components/tabla/Thead";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import Busqueda from "@/Components/tabla/Busqueda";

const ListaUsuariosAsistencia = ({ usuarios }) => {
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
    const [searchValue, setSearchValue] = useState("");
    const { put } = useForm();
    const handleSearch = (newValue) => {
        // Filtrar las actividades según el nuevo valor de búsqueda
        const filteredUsuarios = usuarios.filter((user) => {
            return nombreProp.some((nombre) => {
                return user[nombre]
                    .toString()
                    .toLowerCase()
                    .includes(newValue.toLowerCase());
            });
        });

        setUsuariosFiltrados(filteredUsuarios);
    };

    const nombreColumnas = ["Nombre", "Dni", "Confirmar asistencia"];

    const nombreProp = ["nombre", "dni"];
    // const [usuario, setusuario] = useState('');
    const handleUpdate = (usuario) => {
        put(`/actualizarAsistencia/${usuario.id}`, {
            onSuccess: () => {
                Swal.fire({
                    icon: "success",
                    text: "Asistencia confirmada!",
                });
            },
        });
    };

    return (
        <>
            <div className="container m-auto p-5 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                <Table
                    titulo={"Asistencias a sala de musculación"}
                    boton={""}
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
                        {usuariosFiltrados.map((usuario) => (
                            <React.Fragment key={usuario.id}>
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={usuario.id}
                                >
                                    {nombreProp.map((nombre, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {usuario[nombre]}
                                        </td>
                                        // <TdBody key={index}>{usuario[nombre]}</TdBody>
                                    ))}

                                    <td className="px-16 py-4 ">
                                        <button
                                            className="m-auto"
                                            onClick={() =>
                                                handleUpdate(usuario)
                                            }
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="25"
                                                height="25"
                                                fill="currentColor"
                                                className="bi bi-check2-square ms-4"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z" />
                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                                            </svg>
                                        </button>

                                        {/* <BotonEliminar
                                            click={() => handleUpdate(usuario)}
                                        /> */}
                                    </td>
                                </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    );
};

export default ListaUsuariosAsistencia;
