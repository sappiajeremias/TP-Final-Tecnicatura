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
        if (fechaVencimiento > new Date()) {
            setDiasDisponibles(props.membresia.pago.dias_disponibles);
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <div>
                {" "}
                <h1 className="text-lg font-medium text-gray-900 pb-4">
                    Membresia Actual
                </h1>
                <CardMembresia membresia={membresia.membresia}></CardMembresia>
            </div>
            <div className="ps-14 pt-10">
                <h2 className="py-3 font-medium font-sans text-lg">
                    <span className="text-red-400 font-bold ">
                        Proximo vto:
                    </span>{" "}
                    {`${dia} ${mes} ${anio}`}{" "}
                </h2>
                <h3 className="py-3 font-medium font-sans text-lg">
                    <span className="text-red-400 font-bold ">
                        Dias Disponibles:
                    </span>{" "}
                    {`${diasDisponibles}`}
                </h3>
            </div>
        </div>
    );
};

export default MostrarMembresia;
