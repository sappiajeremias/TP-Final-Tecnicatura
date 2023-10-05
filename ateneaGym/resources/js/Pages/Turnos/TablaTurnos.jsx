// import React, { useState } from "react";

// const TablaTurnos = ({ turnos, actividades }) => {
//     const [actividadSeleccionada, setActividadSeleccionada] = useState([]);

//     return (
//         <div className="mt-2">
//             {/* <InputLabel htmlFor="actividad" value="actividad" /> */}
//             <label htmlFor="actividad">Seleccione una actividad</label>
//             <select
//                 name="actividad"
//                 id="actividad"
//                 className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "
//                 onChange={(e) => setActividadSeleccionada(e.target.value)}
//             >
//                 <option>Seleccione un actividad</option>
//                 {actividades.map((actividad, index) => (
//                     <option key={index} value={actividad.id}>
//                         {actividad.descripcion}
//                     </option>
//                 ))}
//             </select>

//         </div>
//     );
// };

// export default TablaTurnos;
import React, { useState } from "react";

const TablaTurnos = ({ turnos, actividades }) => {
    const [actividadSeleccionada, setActividadSeleccionada] = useState(""); // Estado para almacenar la actividad seleccionada
    const [turnosFiltrados, setTurnosFiltrados] = useState([]); // Estado para almacenar los turnos filtrados

    // Función para manejar el cambio de la actividad seleccionada
    const handleActividadChange = (e) => {
        const actividadId = e.target.value;
        setActividadSeleccionada(actividadId);
        console.log("turnos filtrados");
        // Filtrar los turnos por la actividad seleccionada
        const turnosFiltrados = turnos.filter(
            (turno) => turno.actividad.id == actividadId
        );
        console.log(turnosFiltrados);
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
                        {actividad.descripcion}
                    </option>
                ))}
            </select>

            {/* Mostrar la tabla de turnos filtrados */}
            {actividadSeleccionada && (
                <div>
                    <h2>Turnos para la actividad seleccionada</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fecha</th>
                                <th>Hora</th>
                                {/* Otros encabezados de la tabla */}
                            </tr>
                        </thead>
                        <tbody>
                            {turnosFiltrados.map((turno) => (
                                <tr key={turno.id}>
                                    <td>{turno.id}</td>
                                    <td>{turno.fecha}</td>
                                    <td>{turno.hora}</td>
                                    {/* Otros datos de turno */}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TablaTurnos;
