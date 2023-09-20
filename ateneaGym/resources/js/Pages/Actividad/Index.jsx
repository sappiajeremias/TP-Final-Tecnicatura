import React from "react";
import CrearActividad from "./CrearActividad";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ListarActs from "./ListarActividad";
function Index({ auth }) {
    return (
        <Authenticated auth={auth}>
            <CrearActividad></CrearActividad>
            <ListarActs></ListarActs>
        </Authenticated>
    );
}

export default Index;
