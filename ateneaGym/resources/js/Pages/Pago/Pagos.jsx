import React, { useEffect, useState } from "react";
import { Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { usePage } from "@inertiajs/react";

const Pagos = ({ preference }) => {
    console.log(preference);

    // const env = import.meta.env.VITE_MP_PUBLIC_KEY;
    initMercadoPago("TEST-97f01f23-0584-466a-95fe-9a526f6fa77b");
    const onReady = (response) => {
        console.log(response);
        console.log("app lista");
    };
    const onSubmit = (response) => {
        console.log(response);
        console.log("app enviada");
    };
    const onError = (error) => {
        console.log(error);
    };
    return (
        <div className="max-w-3xl m-auto">
            <div>
                <Wallet
                    initialization={{
                        preferenceId: preference.id, // Utiliza la preferenceId recibida del backend
                        redirectMode: "modal",
                    }}
                    customization={{ locale: "es-AR" }}
                    onError={onError}
                    onSubmit={onSubmit}
                    onReady={onReady}
                />
            </div>
        </div>
    );
};

export default Pagos;

// import React, { useEffect } from "react";

// const Index = () => {

//     useEffect(() => {
//         const script = document.createElement("script");
//         script.src = "https://sdk.mercadopago.com/js/v2";
//         script.async = true;
//         document.body.appendChild(script);

//         script.onload = () => {
//             const mp = new window.MercadoPago(env, {
//                 locale: "es-AR",
//             });
//             const bricksBuilder = mp.bricks();
//             const renderCardPaymentBrick = async (bricksBuilder) => {
//                 const settings = {
//                     initialization: {
//                         amount: 100, // monto a ser pago
//                         payer: {
//                             email: "",
//                         },
//                     },
//                     customization: {
//                         visual: {
//                             style: {
//                                 customVariables: {
//                                     theme: "flat", // | 'dark' | 'bootstrap' | 'flat'
//                                 },
//                             },
//                         },
//                         paymentMethods: {
//                             maxInstallments: 1,
//                         },
//                     },
//                     callbacks: {
//                         onReady: () => {
//                             // callback llamado cuando Brick esté listo
//                         },
//                         onSubmit: (cardFormData) => {
//                             //  callback llamado cuando el usuario haga clic en el botón enviar los datos
//                             //  ejemplo de envío de los datos recolectados por el Brick a su servidor
//                             return new Promise((resolve, reject) => {
//                                 fetch("/procesar-pago", {
//                                     method: "POST",
//                                     headers: {
//                                         "Content-Type": "application/json",
//                                     },
//                                     body: JSON.stringify(cardFormData),
//                                 })
//                                     .then((response) => {
//                                         console.log(response);
//                                         console.log(resolve());
//                                         // recibir el resultado del pago
//                                         resolve();
//                                     })
//                                     .catch((error) => {
//                                         console.log(error);
//                                         console.log(reject());
//                                         // tratar respuesta de error al intentar crear el pago
//                                         reject();
//                                     });
//                             });
//                         },
//                         onError: (error) => {
//                             console.log(error);
//                             // callback llamado para todos los casos de error de Brick
//                         },
//                     },
//                 };

//                 window.cardPaymentBrickController = await bricksBuilder.create(
//                     "cardPayment",
//                     "cardPaymentBrick_container",
//                     settings
//                 );
//             };
//             renderCardPaymentBrick(bricksBuilder);
//         };
//     }, []);

//     return (
//         <div>
//             <div id="cardPaymentBrick_container"></div>
//         </div>
//     );
// };

// export default Index;
