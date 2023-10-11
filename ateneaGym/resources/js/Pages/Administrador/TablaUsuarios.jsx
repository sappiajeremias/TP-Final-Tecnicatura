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

const TablaUsuarios = ({ usuarios, roles }) => {
    console.log(usuarios);
    const nombreColumnas = [
        "Nombre",
        "Apellido",
        "Dni",
        "Fecha De Nacimiento",
        "Email",
        "Acciones",
    ];

    const nombreProp = ["name", "apellido", "dni", "fecha_nac", "email"];
    // const [usuario, setusuario] = useState('');
    const handleDelete = (usuario) => {
        // Lógica para eliminar el recurso
        router.delete(`/usuarios/${usuario.id}`, {
            onBefore: () => confirm("Estas seguro?"),
            onSuccess: () =>
                Swal.fire({
                    icon: "success",
                    text: "Usuario Eliminado!",
                }),
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
                >
                    <Thead nombreColumnas={nombreColumnas} />

                    {usuarios.map((usuario) => (
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
                </Table>
            </div>
        </>
    );
};

export default TablaUsuarios;
