import React, { useState } from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import VistaRutinas from "./VistaRutinas";
const Index = ({ auth, rutinasAlumno }) => {
    const rutinas = rutinasAlumno.map((rutinaAlumno) => rutinaAlumno.rutinas);
    console.log(rutinasAlumno);
    return (
        <Authenticated auth={auth}>
            <VistaRutinas rutinas={rutinasAlumno}></VistaRutinas>
        </Authenticated>
    );
};

export default Index;
