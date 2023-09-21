import React from "react";
import CrearActividad from "./CrearActividad";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ListarActs from "./ListarActividad";
function Index({ auth, actividades }) {
    return (
        <Authenticated auth={auth}>
            
            <CrearActividad></CrearActividad>
            <ListarActs actividades={actividades}></ListarActs>
        </Authenticated>
    );
}

export default Index;
