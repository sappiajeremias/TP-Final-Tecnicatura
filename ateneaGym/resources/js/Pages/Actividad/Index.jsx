import React from "react";
import CrearActividad from "./CrearActividad";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import ListarActs from "./ListarActividad";
import ModalEditar from "@/Components/tabla/ModalEditar";
function Index({ auth, actividades }) {
    return (
        <Authenticated auth={auth}>
            <ModalEditar>
                <CrearActividad></CrearActividad>
            </ModalEditar>
            <ListarActs actividades={actividades}></ListarActs>
        </Authenticated>
    );
}

export default Index;
