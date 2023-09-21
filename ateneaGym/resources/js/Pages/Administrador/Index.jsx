import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import RegistrarUsuario from "./RegistrarUsuario";

const Index = ({ usuarios, auth }) => {
    return (
        <AuthenticatedLayout auth={auth}>
            <ModalEditar>
                <Register></Register>
            </ModalEditar>
            <RegistrarUsuario usuarios={usuarios}></RegistrarUsuario>
        </AuthenticatedLayout>
    );
};

export default Index;
