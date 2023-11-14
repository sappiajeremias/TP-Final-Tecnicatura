import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import VerRutinas from "./VerRutinas";

const Index = ({ auth, rutinas, profesor, ejerciciosT }) => {
    console.log(profesor);
    return (
        <Authenticated auth={auth}>
            <VerRutinas rutinas={rutinas} profesor={profesor}></VerRutinas>
        </Authenticated>
    );
};

export default Index;
