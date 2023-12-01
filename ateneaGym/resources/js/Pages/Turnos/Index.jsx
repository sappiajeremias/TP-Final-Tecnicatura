import React from "react";
import TablaTurnos from "./TablaTurnos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ turnos, auth, actividades,especialidades}) => {
    console.log(auth);
    return (
        <AuthenticatedLayout auth={auth}>
            <TablaTurnos
                turnos={turnos}
                especialidades={especialidades}
                actividades={actividades}
                auth={auth}
            ></TablaTurnos>
        </AuthenticatedLayout>
    );
};

export default Index;
