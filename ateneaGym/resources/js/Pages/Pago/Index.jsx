import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import Pagos from "./Pagos";

const Index = ({ auth, preference }) => {
    return (
        <div>
            <Authenticated auth={auth}>
                <Pagos preference={preference}></Pagos>
            </Authenticated>
        </div>
    );
};

export default Index;
