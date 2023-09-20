import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";

const Index = ({ usuarios, auth }) => {
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
        <AuthenticatedLayout
            auth={auth}
                   >
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
        </AuthenticatedLayout>
    );
};

export default Index;
