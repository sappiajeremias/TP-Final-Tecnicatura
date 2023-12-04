import React, { useEffect, useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import VistaRutinas from "./VistaRutinas";
const Index = ({ auth, rutinasAlumno, pago }) => {
    const rutinas = rutinasAlumno.map((rutinaAlumno) => rutinaAlumno.rutinas);
    console.log(pago);
    const [pagoValido, setPagoValido] = useState("");
    useEffect(() => {
        const today = new Date().toISOString().split("T")[0];
        const fechaVencimiento = new Date(pago.fecha_vencimiento)
            .toISOString()
            .split("T")[0];

        // Verificar si la fecha actual es menor a la fecha de vencimiento o si días disponibles son mayores a 0
        const verificarPago =
            today < fechaVencimiento && pago.dias_disponibles > 0;

        setPagoValido(verificarPago);
    }, []);

    console.log(pagoValido);
    return (
        <Authenticated auth={auth}>
            {pagoValido === true ? (
                <VistaRutinas rutinas={rutinasAlumno}></VistaRutinas>
            ) : (
                <div
                    className="p-4 mt-10 mb-4 text-sm  rounded-lg bg-red-200 dark:bg-gray-800 dark:text-blue-400 max-w-lg m-auto"
                    role="alert"
                >
                    <span className="font-medium">Atencion!</span> Su membresia
                    esta vencida o no posee dias disponibles.
                    {/* {turno.actividad.especialidad.descripcion} */}
                </div>
            )}
        </Authenticated>
    );
};

export default Index;
