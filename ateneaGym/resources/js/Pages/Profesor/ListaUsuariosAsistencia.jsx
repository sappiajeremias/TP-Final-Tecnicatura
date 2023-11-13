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

    const nombreColumnas = [
        "Nombre",
        "Dni",
        "Acciones",
    ];

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
                    titulo={"  Tabla Asistencias"}
                    boton={
                        ""
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

                                    <td className="px-6 py-4 flex">
                                        <BotonEliminar
                                            click={() => handleUpdate(usuario)}
                                        />
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
