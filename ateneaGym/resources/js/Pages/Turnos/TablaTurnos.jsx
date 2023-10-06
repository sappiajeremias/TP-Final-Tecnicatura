import React, { useState } from "react";
import Calendario from "./Calendario";

const TablaTurnos = ({ turnos, actividades }) => {
    const [actividadSeleccionada, setActividadSeleccionada] = useState(""); // Estado para almacenar la actividad seleccionada
    const [turnosFiltrados, setTurnosFiltrados] = useState([]); // Estado para almacenar los turnos filtrados
    const [listaTurnos, setListaTurnos] = useState([]);
    // Función para manejar el cambio de la actividad seleccionada
    const handleActividadChange = (e) => {
        const actividadId = e.target.value;
        setActividadSeleccionada(actividadId);

        // Filtrar los turnos por la actividad seleccionada
        const turnosFiltrados = turnos.filter(
            (turno) => turno.actividad.id == actividadId
        );
        setListaTurnos(turnos.map((turno) => turno.fecha));
        setTurnosFiltrados(turnosFiltrados);
    };

    return (
        <div className="mt-2">
            <label htmlFor="actividad">Seleccione una actividad</label>
            <select
                name="actividad"
                id="actividad"
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm"
                onChange={handleActividadChange}
                value={actividadSeleccionada}
            >
                <option value="">Seleccione una actividad</option>
                {actividades.map((actividad, index) => (
                    <option key={index} value={actividad.id}>
                        {actividad.id}
                    </option>
                ))}
            </select>

            {/* Mostrar la tabla de turnos filtrados */}
            {actividadSeleccionada && <Calendario turnos={listaTurnos} />}
        </div>
    );
};

export default TablaTurnos;
