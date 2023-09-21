import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React from "react";

const RegistrarUsuario = ({ usuarios }) => {
    const nombreColumnas = [
        "Nombre",
        "Apellido",
        "Dni",
        "Fecha De Nacimiento",
        "Email",
        "Acciones",
    ];
    const nombreProp = ["name", "apellido", "dni", "fecha_nac", "email"];
    return (
        <>
            <h1 className="text-red-600 text-center text-2xl pt-5">
                Tabla Usuarios
            </h1>
            <div className="container m-auto max-w-6xl p-5">
                <Table
                    nombreColumnas={nombreColumnas}
                    coleccion={usuarios}
                    nombreProp={nombreProp}
                ></Table>
            </div>
        </>
    );
};

export default RegistrarUsuario;
