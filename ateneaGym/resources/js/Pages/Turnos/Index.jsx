import React from "react";
import TablaTurnos from "./TablaTurnos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ turnos, auth, actividades }) => {
    console.log(auth);
    return (
        <AuthenticatedLayout auth={auth}>
            <TablaTurnos
                turnos={turnos}
                actividades={actividades}
                auth={auth}
            ></TablaTurnos>
        </AuthenticatedLayout>
    );
};

export default Index;
