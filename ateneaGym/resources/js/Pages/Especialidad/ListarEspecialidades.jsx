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
import Busqueda from "@/Components/tabla/Busqueda";

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
    const [especialidadesFiltradas, setEspecialidadesFiltradas] = useState(
        especialidadesProfesores
    );
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = (newValue) => {
        // Filtrar las actividades según el nuevo valor de búsqueda
        const filteredEspecialidad = especialidadesProfesores.filter((esp) => {
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
                        <ModalEditar isEdit={false} title={"ASIGNAR PROFESOR"}>
                            <CrearRelacion
                                isEdit={false}
                                objeto={""}
                                especialidadesProfesores={
                                    especialidadesProfesores
                                }
                                especialidades={especialidades}
                            ></CrearRelacion>
                        </ModalEditar>,
                        <ModalEditar
                            isEdit={false}
                            title={"NUEVA ESPECIALIDAD"}
                        >
                            <CrearEspecialidad objeto={""}></CrearEspecialidad>
                        </ModalEditar>,
                    ]}
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
                    </tbody>
                </Table>
            </div>
        </>
    );
}
