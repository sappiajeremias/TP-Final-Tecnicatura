import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React from "react";

const Calendario = ({ turnos }) => {
    const [fecha, setFecha] = useState(new Date());
    function abrirTurnos(params) { }
    return (
        <div className="container w-50">
            <Calendar
                onChange={setFecha}
                value={fecha}
                onClickDay={(date, event) => console.log(date)}
                tileContent={({ activeStartDate, date, view }) => {
                    if (
                        view === "month" &&
                        turnos.includes(date.toISOString().slice(0, 10))
                    ) {
                        return (
                            <div className="bg-red-400 h-2 w-2 m-auto border rounded-lg mt-1"></div>
                        );
                    } else {
                        return null;
                    }
                }}
            />

            {/* {fecha} */}
        </div>
    );
};

export default Calendario;
