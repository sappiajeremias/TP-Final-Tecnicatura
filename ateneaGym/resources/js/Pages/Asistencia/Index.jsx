import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import VistaAsistencia from "./VistaAsistencia";

const Index = ({ auth, asistencia }) => {
    return (
        <Authenticated auth={auth}>
            <VistaAsistencia asistencia={asistencia}></VistaAsistencia>
        </Authenticated>
    );
};

export default Index;
