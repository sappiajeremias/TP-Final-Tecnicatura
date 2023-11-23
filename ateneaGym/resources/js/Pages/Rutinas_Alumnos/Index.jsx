import React, { useState } from "react";
import VerRutinas from "../Rutinas/VerRutinas";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = ({ auth, rutinasAlumno }) => {
    const rutinas = rutinasAlumno.map((rutinaAlumno) => rutinaAlumno.rutinas);
    console.log(rutinasAlumno);
    return (
        <Authenticated auth={auth}>
            <VerRutinas rutinas={rutinas}></VerRutinas>
        </Authenticated>
    );
};

export default Index;
