import React from "react";
import TablaTurnos from "./TablaTurnos";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const Index = ({ turnos, auth,actividades }) => {
   
    return (
        <AuthenticatedLayout auth={auth}>
            <TablaTurnos turnos={turnos} actividades={actividades}></TablaTurnos>
        </AuthenticatedLayout>
    );
};

export default Index;
