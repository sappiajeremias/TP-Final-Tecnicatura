import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import React, { useEffect, useState } from "react";
import ListaCards from "./ListaCards";

const Index = ({ membresias, pagos, auth, roles }) => {

    return (
        <AuthenticatedLayout auth={auth}>
            <ListaCards membresias={membresias} auth={auth}></ListaCards>
        </AuthenticatedLayout>
    );
};

export default Index;
