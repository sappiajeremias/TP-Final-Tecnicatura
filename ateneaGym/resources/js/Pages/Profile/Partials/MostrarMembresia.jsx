import CardMembresia from "@/Pages/Membresia/CardMembresia";
import React, { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import Login from "@/Pages/Auth/Login";

const MostrarMembresia = ({ membresia }) => {
    console.log(membresia);
    const fechaVencimiento = new Date(membresia.pago.fecha_vencimiento);
    const dia = fechaVencimiento.getDate();
    const { props } = usePage();
    const [diasDisponibles, setDiasDisponibles] = useState(0);
    const mes = fechaVencimiento.toLocaleString("default", { month: "long" }); // Obtener el nombre del mes
    const anio = fechaVencimiento.getFullYear();

    useEffect(() => {
        // setDiasDisponibles(props.membresia.pago.dias_disponibles);
    }, []);

    return (
        <div>
            <h1 className="text-lg font-medium text-gray-900 pb-4">
                Membresia Actual
            </h1>
            <CardMembresia membresia={membresia.membresia}></CardMembresia>
            <h1>Proximo vto: {`${dia} ${mes} ${anio}`} </h1>
            <h1>Dias Disponibles: {`${diasDisponibles}`}</h1>
        </div>
    );
};

export default MostrarMembresia;
