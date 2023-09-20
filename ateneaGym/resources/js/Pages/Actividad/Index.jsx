import React from "react";
import CrearActividad from "./CrearActividad";
import Authenticated from "@/Layouts/AuthenticatedLayout";
function Index({ auth }) {
    return (
        <Authenticated user={auth.user}>
            <CrearActividad></CrearActividad>
        </Authenticated>
    );
}

export default Index;
