import TarjetaTurnos from "@/Components/turno/TarjetaTurnos";
import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const TurnosAlumno = ({ auth, turnos, pago }) => {
    console.log(pago);

    const [diasDisponibles, setDiasDisponibles] = useState(0);

    useEffect(() => {
        if (pago) {
            setDiasDisponibles(pago.dias_disponibles);
        }
    }, []);

    return (
        <>
            <AuthenticatedLayout auth={auth}>
                <TarjetaTurnos turnos={turnos}></TarjetaTurnos>
                <h1 className="text-xl font-semibold mt-2">
                    Dias disponibles: {diasDisponibles}
                </h1>
            </AuthenticatedLayout>
        </>
    );
};

export default TurnosAlumno;
