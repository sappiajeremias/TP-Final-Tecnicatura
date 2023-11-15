import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Thead from "@/Components/tabla/Thead";

import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import CrearRelacion from "./CrearRelacion";
import CrearEspecialidad from "./CrearEspecialidad";
import Busqueda from "@/Components/tabla/Busqueda";

export default function ListarEspecialidades({
    especialidades,
}) {
    const nombreColumnas = ["ID", "Descripcion", "Acciones"];
    const nombreProp = ["id", "descripcion"];

    const deleteHandler = (especialidad) => {
        Swal.fire({
            title: "Confirmar",
            text: "Eliminar especialidad? ",
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
            showCancelButton: true,
            cancelButtonText:'Cancelar',
            cancelButtonColor:'"#938592",'
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/esp/${especialidad.id}`);
                
            }
        });
    };
    const [especialidadesFiltradas, setEspecialidadesFiltradas] = useState(
        especialidades
    );
   

    const handleSearch = (newValue) => {
        // Filtrar las actividades según el nuevo valor de búsqueda
        const filteredEspecialidad = especialidades.filter((esp) => {
            return nombreProp.some((nombre) => {
                return esp[nombre]
                    .toString()
                    .toLowerCase()
                    .includes(newValue.toLowerCase());
            });
        });

        setEspecialidadesFiltradas(filteredEspecialidad);
    };
    return (
        <>
            <div className="container m-auto max-w-6xl p-5">
                <Table
                    titulo={"Tabla especialidades"}
                    boton={[
                        <ModalEditar
                            isEdit={false}
                            title={"NUEVA ESPECIALIDAD"}
                        >
                            <CrearEspecialidad objeto={""}></CrearEspecialidad>
                        </ModalEditar>,
                    ]}
                    busqueda={<Busqueda onSearch={handleSearch} />}
                >
                    <Thead nombreColumnas={nombreColumnas} />
                    <tbody>
                        {especialidadesFiltradas.map((esp) => (
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
                                        
                                        <BotonEliminar
                                            click={() => deleteHandler(esp)}
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
}
