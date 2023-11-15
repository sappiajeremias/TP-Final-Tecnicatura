import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState } from "react";
import Register from "../Auth/Register";
import Thead from "@/Components/tabla/Thead";
import TrBody from "@/Components/tabla/TrBody";
import { TdBody } from "@/Components/tabla/TdBody";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import Swal from "sweetalert2";
import Busqueda from "@/Components/tabla/Busqueda";

const TablaUsuarios = ({ usuarios, roles }) => {
    const [usuariosFiltrados, setUsuariosFiltrados] = useState(usuarios);
    const [searchValue, setSearchValue] = useState("");

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
        "Apellido",
        "Dni",
        "Fecha De Nacimiento",
        "Email",
        "Rol",
        "Acciones",
    ];

    const nombreProp = ["name", "apellido", "dni", "fecha_nac", "email", "rol"];
    // const [usuario, setusuario] = useState('');
    const handleDelete = (usuario) => {
        // Lógica para eliminar el recurso
        Swal.fire({
            title: "Confirmar",
            text: "Eliminar usuario? ",
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
            showCancelButton: true,
            cancelButtonText:'Cancelar',
            cancelButtonColor:'"#938592",'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/usuarios/${usuario.id}`);
            }
        });
    };

    return (
        <>
            <div className="container m-auto p-5 sm:max-w-2xl md:max-w-4xl lg:max-w-6xl">
                <Table
                    titulo={"  Tabla Usuarios"}
                    boton={
                        <ModalEditar isEdit={false}>
                            <Register
                                isEdit={false}
                                objeto={""}
                                roles={roles}
                            ></Register>
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
                </Table>
            </div>
        </>
    );
};

export default TablaUsuarios;
