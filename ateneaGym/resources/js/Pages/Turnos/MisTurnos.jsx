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
                <div className="">
                    <h1 className="text-xl font-semibold mt-10  rounded-md max-w-xs text-center bg-teal-100 m-auto ">
                        Dias disponibles: {diasDisponibles}
                    </h1>
                </div>
            </AuthenticatedLayout>
        </>
    );
};

export default TurnosAlumno;
