import CardMembresia from "@/Pages/Membresia/CardMembresia";
import React from "react";

const MostrarMembresia = ({ membresia }) => {
    return (
        <div>
            {" "}
            <h1 className="text-lg font-medium text-gray-900 pb-4">
                Membresia Actual
            </h1>
            <CardMembresia membresia={membresia}></CardMembresia>
        </div>
    );
};

export default MostrarMembresia;
