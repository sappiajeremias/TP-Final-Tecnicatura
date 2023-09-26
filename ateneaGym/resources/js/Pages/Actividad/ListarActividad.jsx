import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState } from "react";
import Register from "../Auth/Register";
import Thead from "@/Components/tabla/Thead";
import TrBody from "@/Components/tabla/TrBody";
import { TdBody } from "@/Components/tabla/TdBody";
import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import CrearActividad from "./CrearActividad";

export default function ListarActs({ actividades, profesores }) {
    const nombreColumnas = [
        "ID",
        "Dias Semana",
        "Hora Inicio",
        "Hora Fin",
        "Duracion",
        "Descripcion",
        "Acciones",
    ];
    const nombreProp = [
        "id",
        "dia_semana",
        "hora_inicio",
        "hora_fin",
        "duracion",
        "descripcion",
    ];

    const deleteHandler = (actividad) => {
        router.delete(`/actividad/${actividad.id}`, { onBefore: () => confirm('Estas seguro?'), onSuccess: () => alert('Actividad Eliminada') })
    }

    return (
        <>
            <h1 className="text-pink-500  text-center text-2xl pt-5">
                Tabla Actividades
            </h1>
            <ModalEditar isEdit={false}>
                <CrearActividad isEdit={false} objeto={''} profesores={profesores}></CrearActividad>
            </ModalEditar>
            <div className="container m-auto max-w-6xl p-5">
                <Table>
                    <Thead nombreColumnas={nombreColumnas} />

                    {actividades.map((act) => (
                        <React.Fragment key={act.id}>

                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={act.id}>


                                {nombreProp.map((nombre, index) => (

                                    <td className="px-6 py-4" key={index}>{act[nombre]}</td>
                                    // <TdBody key={index}>{usuario[nombre]}</TdBody>
                                ))}

                                <td className="px-6 py-4 flex">


                                    <ModalEditar isEdit={true}>

                                        <CrearActividad
                                            isEdit={true} objeto={act} profesores={profesores}
                                        />
                                    </ModalEditar>
                                    <BotonEliminar
                                        click={() => deleteHandler(act)}
                                    />


                                </td >

                            </tr>
                        </React.Fragment>
                    ))}


                </Table >
            </div >
        </>
    );
}
