import React from "react";

import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Prueba1 = ({ preference }) => {
    const env = import.meta.env.VITE_MP_ACCESS_TOKEN;
    console.log("aca va el env");
    console.log(preference);

    initMercadoPago(env);
    return (
        <div>
            Index
            <div id="wallet_container"></div>
        </div>
    );
};
export default Prueba1;
