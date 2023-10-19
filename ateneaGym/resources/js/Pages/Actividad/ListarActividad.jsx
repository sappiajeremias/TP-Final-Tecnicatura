import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import React, { useState } from "react";

import Thead from "@/Components/tabla/Thead";

import BotonEliminar from "@/Components/tabla/BotonEliminar";
import { router } from "@inertiajs/react";
import CrearActividad from "./CrearActividad";
import Busqueda from "@/Components/tabla/Busqueda";

export default function ListarActs({
    actividades,
    profesores,
    especialidades,
}) {
    const [actividadesFiltradas, setActividadesFiltradas] =
        useState(actividades);
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (newValue) => {
        // Filtrar las actividades según el nuevo valor de búsqueda
        const filteredActivities = actividades.filter((act) => {
            return nombreProp.some((nombre) => {
                if (nombre === "especialidad_id") {
                    const especialidadDescripcion =
                        especialidades.find(
                            (esp) => esp.id === act.especialidad_id
                        )?.descripcion || "";
                    return especialidadDescripcion
                        .toLowerCase()
                        .includes(newValue.toLowerCase());
                }
                return act[nombre]
                    .toString()
                    .toLowerCase()
                    .includes(newValue.toLowerCase());
            });
        });

        setActividadesFiltradas(filteredActivities);
    };
  
    const nombreColumnas = [
        "ID",
        "Dias Semana",
        "Hora Inicio",
        "Hora Fin",
        "Duracion",
        "Descripcion",
        "Cupos",
        "Acciones",
    ];
    const nombreProp = [
        "id",
        "dia_semana",
        "hora_inicio",
        "hora_fin",
        "duracion",
        "especialidad_id",
        "cupos",
    ];

    const deleteHandler = (actividad) => {
        router.delete(`/actividad/${actividad.id}`, {
            onBefore: () => confirm("Estas seguro?"),
            onSuccess: () => alert("Actividad Eliminada"),
        });
    };

    return (
        <>
            <div className="container m-auto max-w-6xl p-5">
                <Table
                    titulo={"Tabla Actividades"}
                    boton={
                        <ModalEditar isEdit={false}>
                            <CrearActividad
                                isEdit={false}
                                objeto={""}
                                profesores={profesores}
                                especialidades={especialidades}
                            ></CrearActividad>
                        </ModalEditar>
                    }
                    busqueda={
                        <Busqueda
                           
                            onSearch={handleSearch}
                        />
                    }
                >
                    <Thead nombreColumnas={nombreColumnas} />
                    <tbody>
                        {actividadesFiltradas.map((act) => (
                            <React.Fragment key={act.id}>
                                <tr
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                    key={act.id}
                                >
                                    {nombreProp.map((nombre, index) => (
                                        <td className="px-6 py-4" key={index}>
                                            {nombre === "especialidad_id"
                                                ? // Buscar la descripción de la especialidad correspondiente
                                                  especialidades.find(
                                                      (esp) =>
                                                          esp.id ===
                                                          act.especialidad_id
                                                  )?.descripcion || ""
                                                : act[nombre]}
                                        </td>
                                    ))}

                                    <td className="px-6 py-4 flex">
                                        <ModalEditar isEdit={true}>
                                            <CrearActividad
                                                isEdit={true}
                                                objeto={act}
                                                profesores={profesores}
                                                especialidades={especialidades}
                                            />
                                        </ModalEditar>
                                        <BotonEliminar
                                            click={() => deleteHandler(act)}
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
