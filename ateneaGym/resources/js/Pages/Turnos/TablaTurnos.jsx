import React, { useEffect, useState } from "react";
import Calendario from "./Calendario";
import Modal from "@/Components/Modal";
import ConfirmarTurno from "./ConfirmarTurno";
import "../../Evo Calendar/js/evo-calendar.js";
import "../../Evo Calendar/css/evo-calendar.css";
const TablaTurnos = ({ turnos, actividades, auth, especialidades }) => {
    const [actividadSeleccionada, setActividadSeleccionada] = useState(""); // Estado para almacenar la actividad seleccionada
    const [especialidadSeleccionada, setEspecialidadSeleccionada] =
        useState(""); // Estado para almacenar la actividad seleccionada
    const [actividad, setActividad] = useState([]); // Estado para almacenar la actividad seleccionada
    const [turnosFiltrados, setTurnosFiltrados] = useState([]); // Estado para almacenar los turnos filtrados
    const [listaTurnos, setListaTurnos] = useState([]);
    const [diaSeleccionado, setdiaSeleccionado] = useState("");
    const [idTurno, setIdTurno] = useState([]);
    // Función para manejar el cambio de la actividad seleccionada

    const handleActividadChange = (e) => {
        $("#calendar").evoCalendar("clearCalendarEvents");

        const especialidad = e.target.value;

        setEspecialidadSeleccionada(especialidad);

        // console.log(turnos[0].actividad.especialidad_id);

        // setActividadSeleccionada(actividadId);

        // Filtrar los turnos por la actividad seleccionada
        const turnosFiltrados = turnos.filter(
            (turno) =>
                turno.actividad.especialidad_id == especialidad &&
                turno.alumno_id === null
        );

        const actividad = actividades.filter(
            (actividad) => actividad.especialidad_id == especialidad
        );
        setActividad(actividad);

        setTurnosFiltrados(turnosFiltrados);
        setListaTurnos(turnosFiltrados.map((turno) => turno.fecha));

        turnosFiltrados.map((turno) => {
            // console.log(actividad[0].especialidad.descripcion);
            const hoy = new Date();
            const partesFecha = turno.fecha.split("-");

            // const nuevasFechas = fecha.map((item) => {

            // });
            if (
                new Date(
                    `${partesFecha[0]}/${partesFecha[1]}/${partesFecha[2]}`
                ) > hoy ||
                new Date(
                    `${partesFecha[0]}/${partesFecha[1]}/${partesFecha[2]}`
                ) === hoy
            ) {
                $("#calendar").evoCalendar("addCalendarEvent", {
                    id: turno.id,
                    name: actividad[0].especialidad.descripcion,
                    // name: "turno",
                    description: turno.hora,
                    date: `${partesFecha[0]}/${partesFecha[1]}/${partesFecha[2]}`,
                    type: "event",
                });
            }
        });

        $("#calendar").on("selectEvent", (event, activeEvent) => {
            const eventoSeleccionado = activeEvent;
            // console.log(eventoSeleccionado);
            // console.log(turnosFiltrados);
            const turnoSeleccionado = turnosFiltrados.find(
                (turno) => turno.id === eventoSeleccionado.id
            );
            // console.log(turnoSeleccionado);
            if (turnoSeleccionado) {
                // Hacer algo con el turno seleccionado
                console.log(turnoSeleccionado); // Esto imprimirá el turno correspondiente en la consola
                sacarTurno(turnoSeleccionado);
            }
            // ...
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
        <div className=" bg-white">
            {" "}
            <h1 className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white text-center py-3">
                Turnos disponibles
            </h1>
            <div className="pt-5 flex justify-center items-center">
                <label
                    htmlFor="actividad"
                    className="pr-3 text-gray-700 text-lg"
                >
                    Seleccione una actividad:
                </label>
                <select
                    name="actividad"
                    id="actividad"
                    className="border-2 border-pink-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 rounded-md py-2 px-4 outline-none"
                    onChange={handleActividadChange}
                    value={especialidadSeleccionada}
                >
                    <option value="" className="text-gray-400">
                        Seleccione una actividad
                    </option>
                    {especialidades.map((actividad, index) => (
                        <option
                            key={index}
                            value={actividad.id}
                            className="text-gray-900"
                        >
                            {actividad.descripcion}
                        </option>
                    ))}
                </select>
            </div>
            <div className="max-w-5xl m-auto pb-5">
                <div id="calendar"></div>
                <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                    <ConfirmarTurno
                        auth={auth}
                        turno={idTurno}
                        actividad={actividad}
                        setModalOpen={setModalOpen}
                    />
                </Modal>
            </div>
        </div>
    );
};

export default TablaTurnos;
