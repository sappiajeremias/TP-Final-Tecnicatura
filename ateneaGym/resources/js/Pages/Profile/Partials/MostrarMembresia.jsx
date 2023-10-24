import CardMembresia from "@/Pages/Membresia/CardMembresia";
import React from "react";

const MostrarMembresia = ({ membresia }) => {
    const fechaVencimiento = new Date(membresia.pago.fecha_vencimiento);
    const dia = fechaVencimiento.getDate();
    const mes = fechaVencimiento.toLocaleString("default", { month: "long" }); // Obtener el nombre del mes
    const anio = fechaVencimiento.getFullYear();
    console.log(membresia);
    return (
        <div>t
            {" "}
            <h1 className="text-lg font-medium text-gray-900 pb-4">
                Membresia Actual
            </h1>
            <CardMembresia membresia={membresia.membresia}></CardMembresia>
            <h1>Proximo vto: {`${dia} ${mes} ${anio}`} </h1>
        </div>
    );
};

export default MostrarMembresia;
