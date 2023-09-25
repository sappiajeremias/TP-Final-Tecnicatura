import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import TablaUsuarios from "./TablaUsuarios";

const Index = ({ usuarios, auth }) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <ModalEditar isEdit={false}>
                <Register isEdit={false} objeto={''}></Register>
            </ModalEditar>
            <TablaUsuarios usuarios={usuarios} ></TablaUsuarios>
        </AuthenticatedLayout>
    );
};

export default Index;
