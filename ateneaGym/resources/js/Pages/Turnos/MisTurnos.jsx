import TarjetaTurnos from "@/Components/turno/TarjetaTurnos";
import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const TurnosAlumno = ({ auth, turnos }) => {
    console.log(turnos);
    return (
        <AuthenticatedLayout auth={auth}>
            <TarjetaTurnos turnos={turnos}></TarjetaTurnos>
        </AuthenticatedLayout>
    );
};

export default TurnosAlumno;
