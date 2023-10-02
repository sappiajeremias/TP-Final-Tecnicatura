import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ListarEspecialidades from "./ListarEspecialidad";
const Index = ({auth, especialidadesProfesores}) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <ListarEspecialidades especialidadesProfesores={especialidadesProfesores} ></ListarEspecialidades>
        </AuthenticatedLayout>
    );
};

export default Index;
