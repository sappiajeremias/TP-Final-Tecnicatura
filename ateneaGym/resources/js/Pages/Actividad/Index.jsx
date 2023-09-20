import React from "react";
import CrearActividad from "./CrearActividad";
import Authenticated from "@/Layouts/AuthenticatedLayout";
function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <CrearActividad></CrearActividad>
        </Authenticated>
    );
}

export default Index;
