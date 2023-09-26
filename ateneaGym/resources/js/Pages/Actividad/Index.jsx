import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ListarActs from "./ListarActividad";
import CrearActividad from "./CrearActividad";

const Index = ({auth,actividades, profesores}) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <ListarActs actividades={actividades} profesores={profesores}></ListarActs>
        </AuthenticatedLayout>
    );
};

export default Index;
