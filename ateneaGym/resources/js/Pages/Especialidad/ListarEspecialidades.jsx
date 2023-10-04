import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState } from "react";
import Register from "../Auth/Register";
import Thead from "@/Components/tabla/Thead";
import TrBody from "@/Components/tabla/TrBody";
import { TdBody } from "@/Components/tabla/TdBody";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import CrearRelacion from "./CrearRelacion";
import CrearEspecialidad from "./CrearEspecialidad";

export default function ListarEspecialidades({
    especialidadesProfesores,
    especialidades,
}) {
    const nombreColumnas = ["ID", "Nombre Profesor", "Descripcion", "Acciones"];
    const nombreProp = ["id", "nombre", "descripcion"];

    const deleteHandler = (especialidad) => {
        router.delete(`/especialidad/${especialidad.id}`, {
            onBefore: () => confirm("Estas seguro?"),
            onSuccess: () => alert("Relacion de especialidad eliminada"),
        });
    };

    return (
        <>
            <h1 className="text-pink-500  text-center text-2xl pt-5">
                Tabla especialidades
            </h1>
            <ModalEditar isEdit={false} title={"ASIGNAR PROFESOR"}>
                <CrearRelacion
                    isEdit={false}
                    objeto={""}
                    especialidadesProfesores={especialidadesProfesores}
                    especialidades={especialidades}
                ></CrearRelacion>
            </ModalEditar>
            <ModalEditar isEdit={false} title={"NUEVA ESPECIALIDAD"}>
                <CrearEspecialidad objeto={""} ></CrearEspecialidad>
            </ModalEditar>
            <div className="container m-auto max-w-6xl p-5">
                <Table>
                    <Thead nombreColumnas={nombreColumnas} />

                    {especialidadesProfesores.map((esp) => (
                        <React.Fragment key={esp.id}>
                            <tr
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                key={esp.id}
                            >
                                {nombreProp.map((nombre, index) => (
                                    <td className="px-6 py-4" key={index}>
                                        {esp[nombre]}
                                    </td>
                                    // <TdBody key={index}>{usuario[nombre]}</TdBody>
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
                                        />
                                    </ModalEditar>
                                    <BotonEliminar
                                        click={() => deleteHandler(esp)}
                                    />
                                </td>
                            </tr>
                        </React.Fragment>
                    ))}
                </Table>
            </div>
        </>
    );
}
