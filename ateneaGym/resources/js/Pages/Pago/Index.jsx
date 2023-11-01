import React from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import { Payment } from "@mercadopago/sdk-react";
import { router } from "@inertiajs/react";

const env = import.meta.env.VITE_MP_PUBLIC_KEY;
initMercadoPago(env);

const Index = ({ preference }) => {
    console.log(preference);

    const initialization = {
        amount: preference.items[0].unit_price,
        preferenceId: preference.id,
    };
    const customization = {
        paymentMethods: {
            creditCard: "all",
            debitCard: "all",
            mercadoPago: "all",
        },
    };
    const onSubmit = async ({ selectedPaymentMethod, formData }) => {
        // callback llamado al hacer clic en el botón enviar datos
        console.log(formData);
        // return new Promise((resolve, reject) => {
        //     fetch("/procesar-pago", {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(formData),
        //     })
        //         .then((response) => response.json())
        //         .then((response) => {
        //             console.log(response);
        //             // recibir el resultado del pago
        //             resolve();
        //         })
        //         .catch((error) => {
        //             // manejar la respuesta de error al intentar crear el pago
        //             reject();
        //         });
        // });
        router.post("/procesar-pago", formData, {
            onSuccess: (page) => {
                console.log("on success");
                console.log(page);
                console.log("cierre ");
                // Maneja la respuesta si es necesario
                // window.location.href = page.props.init_point; // Redirige a la página de pago de Mercado Pago
            },
            onError: (response) => {
                console.log(response);
            },
        });
    };
    const onError = async (error) => {
        // callback llamado para todos los casos de error de Brick
        console.log(error);
    };
    const onReady = async () => {
        console.log("entra OnReady");
        /*
    Callback llamado cuando el Brick está listo.
    Aquí puede ocultar cargamentos de su sitio, por ejemplo.
  */
    };

    return (
        <div className="max-w-3xl">
            <Payment
                initialization={initialization}
                customization={customization}
                onSubmit={onSubmit}
                onReady={onReady}
                onError={onError}
            />
        </div>
    );
};

export default Index;

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
