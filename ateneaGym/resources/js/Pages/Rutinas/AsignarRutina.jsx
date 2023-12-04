import Authenticated from "@/Layouts/AuthenticatedLayout";
import { router } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const AsignarRutina = ({ auth, alumnos, rutinas, rutinaAlumnos }) => {
    const [rutinaActual, setRutinaActual] = useState("");
    const handleChangeRutina = (event) => {
        setRutinaActual(event.target.value);
    };

    // useEffect(() => {
    //     setRutinaActual(rutina);
    // }, []);
    console.log(rutinaActual);
    console.log(alumnos);
    console.log(rutinaAlumnos);

    const agregarAlumno = (idAlumno) => {
        const isChecked = rutinaAlumnos.some(
            (asignacion) =>
                asignacion.rutina_id == rutinaActual &&
                asignacion.alumno_id === idAlumno
        );

        if (isChecked) {
            // El checkbox está marcado, entonces eliminamos la asignación de la base de datos
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Esta acción eliminará la asignación.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Sí, eliminar",
            }).then((result) => {
                if (result.isConfirmed) {
                    // Realizar la eliminación si el usuario confirma
                    router
                        .delete(
                            `/eliminarAsignacion/${rutinaActual}/${idAlumno}`
                        )
                        .then(() => {
                            // Mostrar alerta de éxito
                            Swal.fire({
                                title: "Éxito",
                                text: "Asignación eliminada correctamente.",
                                icon: "success",
                            });
                        })
                        .catch((error) => {
                            // Mostrar alerta de error si ocurre un problema
                            Swal.fire({
                                title: "Error",
                                text: "Hubo un problema al eliminar la asignación.",
                                icon: "error",
                            });
                            console.error(error);
                        });
                }
            });
        } else {
            if (rutinaActual) {
                // El checkbox está desmarcado, entonces agregamos la asignación a la base de datos
                router
                    .post("/asignarAlumno", {
                        alumno: idAlumno,
                        rutina: rutinaActual,
                    })
                    .then(() => {
                        // Mostrar alerta de éxito
                        Swal.fire({
                            title: "Éxito",
                            text: "Asignación agregada correctamente.",
                            icon: "success",
                        });
                    })
                    .catch((error) => {
                        // Mostrar alerta de error si ocurre un problema
                        Swal.fire({
                            title: "Error",
                            text:
                                error.response.data.message ||
                                "Hubo un problema al agregar la asignación.",
                            icon: "error",
                        });
                        console.error(error);
                    });
            } else {
                Swal.fire({
                    title: "Error",
                    text: "Debe seleccionar una rutina",
                    icon: "error",
                });
            }
        }
    };

    return (
        <Authenticated auth={auth}>
            {" "}
            <div
                className="p-4 mt-10 mb-4 text-sm  rounded-lg bg-red-200 dark:bg-gray-800 dark:text-blue-400 max-w-lg m-auto"
                role="alert"
            >
                <span className="font-medium">Atencion!</span> Debe seleccionar
                una rutina para poder asignarle alumnos
                {/* {turno.actividad.especialidad.descripcion} */}
            </div>
            <div className="pt-5 mx-6 pb-10">
                <h1 className="pb-5 text-xl md:text-2xl  font-medium text-center">
                    Seleccione los alumnos{" "}
                </h1>
                <div className="pb-10 pt-5 ps-10">
                    <label htmlFor="rutinaSelect">Seleccionar Rutina:</label>
                    <select
                        id="rutinaSelect"
                        value={rutinaActual}
                        onChange={handleChangeRutina}
                        className="ms-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-rosa-500 focus:border-rosa-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-rosa-500 dark:focus:border-rosa-500"
                    >
                        <option value="">Seleccione una rutina</option>
                        {rutinas.map((rutina) => (
                            <option key={rutina.id} value={rutina.id}>
                                {rutina.nombre}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="p-4">
                                    {/* <div className="flex items-center">
                                        <input
                                            id="checkbox-all-search"
                                            type="checkbox"
                                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                        />
                                        <label
                                            htmlFor="checkbox-all-search"
                                            className="sr-only"
                                        >
                                            checkbox
                                        </label>
                                    </div> */}
                                    Seleccionar
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Apellido
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    DNI
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {alumnos.map((alumno) => (
                                <tr
                                    key={alumno.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                >
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            <input
                                                id={`checkbox-table-search-${alumno.id}`}
                                                type="checkbox"
                                                checked={
                                                    rutinaAlumnos &&
                                                    rutinaActual &&
                                                    rutinaAlumnos.some(
                                                        (asignacion) =>
                                                            asignacion.rutina_id ==
                                                                rutinaActual &&
                                                            asignacion.alumno_id ===
                                                                alumno.id
                                                    )
                                                }
                                                className="w-4 h-4 text-rosa-500 bg-gray-100 border-gray-300 rounded focus:ring-rosa-400 dark:focus:ring-rosa-500 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 m-auto"
                                                onClick={() =>
                                                    agregarAlumno(alumno.id)
                                                }
                                            />
                                            <label
                                                htmlFor={`checkbox-table-search-${alumno.id}`}
                                                className="sr-only"
                                            >
                                                checkbox
                                            </label>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white m-auto">
                                        {alumno.usuario.name}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white m-auto">
                                        {alumno.usuario.apellido}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white m-auto">
                                        {alumno.usuario.email}
                                    </td>
                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white m-auto">
                                        {alumno.usuario.dni}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Authenticated>
    );
};

export default AsignarRutina;
