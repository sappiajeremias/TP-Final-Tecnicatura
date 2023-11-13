import Authenticated from "@/Layouts/AuthenticatedLayout";
import React from "react";
import VerRutinas from "./VerRutinas";

const Index = ({ auth, rutinas }) => {
    return (
        <Authenticated auth={auth}>
            <VerRutinas rutinas={rutinas}></VerRutinas>
        </Authenticated>
    );
};

export default Index;
