import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ListarRelaciones from "./ListarRelaciones";
import ListarEspecialidades from "./ListarEspecialidades";

const Index = ({ auth, especialidadesProfesores, especialidades, profesores }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <ListarRelaciones
                especialidadesProfesores={especialidadesProfesores} especialidades={especialidades} profesores={profesores}
            ></ListarRelaciones>
            <ListarEspecialidades
                especialidades={especialidades}>
            </ListarEspecialidades>
        </AuthenticatedLayout>
    );
};

export default Index;
