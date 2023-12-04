import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import ListaUsuariosAsistencia from "./ListaUsuariosAsistencia";
const Index = ({ usuarios, auth, asistencia }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <ListaUsuariosAsistencia
                usuarios={usuarios}
                asistencia={asistencia}
            ></ListaUsuariosAsistencia>
        </AuthenticatedLayout>
    );
};

export default Index;
