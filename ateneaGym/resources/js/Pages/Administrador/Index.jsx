import Table from "@/Components/Table";
import ModalEditar from "@/Components/tabla/ModalEditar";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import Register from "../Auth/Register";
import TablaUsuarios from "./TablaUsuarios";

const Index = ({ usuarios, auth,roles }) => {

    return (
        <AuthenticatedLayout auth={auth}>
           
            <TablaUsuarios usuarios={usuarios} roles={roles}></TablaUsuarios>
        </AuthenticatedLayout>
    );
};

export default Index;
