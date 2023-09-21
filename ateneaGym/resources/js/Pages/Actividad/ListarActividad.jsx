import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";

export default function ListarActs({ actividades }) {
    const nombreColumnas = [
        "ID",
        "Dias Semana",
        "Hora Inicio",
        "Hora Fin",
        "Duracion",
        "Descripcion",
        "Acciones",
    ];
    const nombreController = "actividad";
    const nombreProp = [
        "id",
        "dia_semana",
        "hora_inicio",
        "hora_fin",
        "duracion",
        "descripcion",
    ];
    return (
        <>
            <h1 className="text-red-600 text-center text-2xl pt-5">
                Tabla Actividades
            </h1>
            <div className="container m-auto max-w-6xl p-5">
                <Table
                    nombreColumnas={nombreColumnas}
                    coleccion={actividades}
                    nombreProp={nombreProp}
                    nombreController={nombreController}
                ></Table>
            </div>
        </>
    );
}
