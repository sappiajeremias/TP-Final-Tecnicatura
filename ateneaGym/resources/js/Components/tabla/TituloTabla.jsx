import React from "react";

const TituloTabla = ({ titulo }) => {
    return (
        <h1 className="text-pink-500 text-center text-2xl pt-5 sm:text-3xl lg:text-4xl">
            {titulo}
        </h1>
    );
};

export default TituloTabla;
