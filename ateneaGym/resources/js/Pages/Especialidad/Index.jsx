import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ListarEspecialidades from "./ListarEspecialidades";

const Index = ({ auth, especialidadesProfesores, especialidades }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <ListarEspecialidades
                especialidadesProfesores={especialidadesProfesores} especialidades={especialidades}
            ></ListarEspecialidades>
        </AuthenticatedLayout>
    );
};

export default Index;
