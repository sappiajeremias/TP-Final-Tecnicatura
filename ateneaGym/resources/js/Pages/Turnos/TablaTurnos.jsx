import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";
import Modal from "@/Components/Modal";
import ConfirmarTurno from "./ConfirmarTurno";
import "../../Evo Calendar/js/evo-calendar.js";
import "../../Evo Calendar/css/evo-calendar.css";
const TablaTurnos = ({ turnos, actividades, auth }) => {
    const [actividadSeleccionada, setActividadSeleccionada] = useState(""); // Estado para almacenar la actividad seleccionada
    const [actividad, setActividad] = useState([]); // Estado para almacenar la actividad seleccionada
    const [turnosFiltrados, setTurnosFiltrados] = useState([]); // Estado para almacenar los turnos filtrados
    const [listaTurnos, setListaTurnos] = useState([]);
    const [diaSeleccionado, setdiaSeleccionado] = useState("");
    const [idTurno, setIdTurno] = useState([]);
    // Función para manejar el cambio de la actividad seleccionada

    const handleActividadChange = (e) => {
       
        $("#calendar").evoCalendar("clearCalendarEvents");

        const actividadId = e.target.value;
        setActividadSeleccionada(actividadId);

        // Filtrar los turnos por la actividad seleccionada
        const turnosFiltrados = turnos.filter(
            (turno) =>
                turno.actividad.id == actividadId && turno.alumno_id === null
        );
        const actividad = actividades.filter(
            (actividad) => actividad.id == actividadId
        );
        setActividad(actividad);
        setTurnosFiltrados(turnosFiltrados);
        setListaTurnos(turnosFiltrados.map((turno) => turno.fecha));
        
        turnosFiltrados.map((turno) => {
            // console.log(actividad[0].especialidad.descripcion);
            const partesFecha = turno.fecha.split("-");

            // const nuevasFechas = fecha.map((item) => {
            //     console.log(item);
            // });
            $("#calendar").evoCalendar("addCalendarEvent", {
                id: turno.id,
                name: actividad[0].especialidad.descripcion,
                description: "Lorem ipsum dolor sit..",
                date: `${partesFecha[0]}/${partesFecha[1]}/${partesFecha[2]}`,
                type: "event",
            });
        });
    };

    const [turnosPorFecha, setTurnosPorFecha] = useState([]);

    useEffect(() => {
        // Inicializar el calendario al cargar el componente
        $("#calendar").evoCalendar({
            language: "es",
            sidebarDisplayDefault: false,
            sidebarToggler: false,
        });
    }, []);

    useEffect(() => {
        $("#calendar").on("selectDate", (event, newDate) => {
            // Aquí puedes manejar la lógica para asignar un turno a la fecha seleccionada
            // const fechaSeleccionada = `${newDate.getFullYear()}-${
            //     newDate.getMonth() + 1
            // }-${newDate.getDate()}`;
            // console.log(event);
            // console.log(newDate);
            // ... (código para asignar el turno a la fecha seleccionada)
        });

        $("#calendar").on("selectEvent", (event, activeEvent) => {
            // Aquí puedes manejar la lógica para capturar el evento seleccionado
            const eventoSeleccionado = activeEvent;
            // console.log(event);
            console.log(activeEvent);
            // ... (código para manejar el evento seleccionado, por ejemplo, asignar un turno)
            // Por ejemplo, podrías utilizar el ID del evento para asignar un turno a ese evento específico

            // setIdTurno(eventoSeleccionado.id); // Ejemplo de cómo podrías utilizar el ID del evento seleccionado
        });

        if (diaSeleccionado && turnosFiltrados.length > 0) {
            // Convertir la fecha seleccionada y las fechas de los turnos a las zonas horarias adecuadas
            const fechaSeleccionada = new Date(
                diaSeleccionado.getFullYear(),
                diaSeleccionado.getMonth(),
                diaSeleccionado.getDate()
            );

            const turnosFechaSeleccionada = turnosFiltrados.filter((turno) => {
                const fechaTurno = new Date(turno.fecha);

                // Comparar las fechas sin tener en cuenta la zona horaria
                return (
                    fechaTurno.getUTCFullYear() ===
                        fechaSeleccionada.getUTCFullYear() &&
                    fechaTurno.getUTCMonth() ===
                        fechaSeleccionada.getUTCMonth() &&
                    fechaTurno.getUTCDate() === fechaSeleccionada.getUTCDate()
                );
            });

            setTurnosPorFecha(turnosFechaSeleccionada);
        } else {
            setTurnosPorFecha([]); // Si no hay fecha seleccionada, reiniciar la lista de turnos por fecha
        }
    }, [diaSeleccionado, turnosFiltrados]);

    const [modalOpen, setModalOpen] = useState(false);

    const sacarTurno = (e) => {
        // console.log(e);
        // console.log(auth.user.name);
        setIdTurno(e);
        // Abre el modal cuando se hace clic en el botón de turno
        setModalOpen(true);
    };
    // console.log(listaTurnos);
    return (
        <div className="">
            <div className="pt-5 flex justify-center items-center">
                <label htmlFor="actividad" className="pe-5">
                    Seleccione una actividad
                </label>
                <select
                    name="actividad"
                    id="actividad"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
                    onChange={handleActividadChange}
                    value={actividadSeleccionada}
                >
                    <option value="">Seleccione una actividad</option>
                    {actividades.map((actividad, index) => (
                        <option key={index} value={actividad.id}>
                            {actividad.especialidad.descripcion}
                        </option>
                    ))}
                </select>
            </div>
            {/* Mostrar la tabla de turnos filtrados */}
            <div className="flex justify-center gap-10 pt-10">
                {/* <div className="">
                    {actividadSeleccionada && (
                        <Calendario
                            turnos={listaTurnos}
                            setdiaSeleccionado={setdiaSeleccionado}
                        />
                    )}
                </div>
                <div>
                    {diaSeleccionado && (
                        <div>
                            <h2>
                                Turnos disponibles para el{" "}
                                {diaSeleccionado.toLocaleDateString()}
                            </h2>
                            <ul className="py-3">
                                {turnosPorFecha.map((turno, index) => (
                                    <li key={index}>
                                        <button
                                            type="button"
                                            className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                            onClick={() => sacarTurno(turno)}
                                        >
                                            {turno.hora}
                                        </button>

                                       
                                    </li>
                                ))}
                            </ul>

                            <Modal
                                show={modalOpen}
                                onClose={() => setModalOpen(false)}
                            >
                                <ConfirmarTurno
                                    auth={auth}
                                    turno={idTurno}
                                    actividad={actividad}
                                    setModalOpen={setModalOpen}
                                />
                            </Modal>
                        </div>
                    )}
                </div> */}
            </div>
            <div className="max-w-5xl m-auto pb-5">
                <div id="calendar"></div>
            </div>
        </div>
    );
};

export default TablaTurnos;
