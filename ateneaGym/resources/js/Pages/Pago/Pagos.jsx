import React, { useEffect, useState } from "react";
import { Payment, Wallet, initMercadoPago } from "@mercadopago/sdk-react";
import { router, usePage } from "@inertiajs/react";

const Pagos = ({ preference }) => {
    console.log(preference);

    // const env = import.meta.env.VITE_MP_PUBLIC_KEY;
    initMercadoPago("TEST-97f01f23-0584-466a-95fe-9a526f6fa77b");

    const onReady = () => {
        console.log("app lista");
    };
    const onSubmit = (response) => {
        router.post("/procesar-pago", preference);
        console.log(response);
        console.log("app enviada");
    };
    const onError = (error) => {
        console.log(error);
    };
    return (
        <div className="max-w-xl m-auto">
            <div class="flex items-center justify-center min-h-screen">
                <div
                    aria-label="card"
                    class="p-8 rounded-3xl bg-white max-w-sm w-full"
                >
                    <div
                        aria-label="header"
                        class="flex items-center space-x-2"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11"></path>
                        </svg>
                        <div class="space-y-0.5 flex-1">
                            <h3 class="font-medium text-lg tracking-tight text-gray-900 leading-tight">
                                Detalle de compra
                            </h3>
                        </div>
                    </div>

                    <div aria-label="content" class="mt-9 grid gap-2.5">
                        <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                            <div class="flex flex-col flex-1">
                                <h2 class="text-sm font-semibold ms-3">
                                    Membresia:
                                </h2>
                                <h3 class="text-sm font-medium ms-3">
                                    {preference.items[0]["title"]}
                                </h3>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4 p-3.5 rounded-full bg-gray-100">
                            <div class="flex flex-col flex-1 ">
                                <h2 class="text-sm font-semibold ms-3">
                                    Precio:
                                </h2>
                                <h3 class="text-sm font-medium ms-3">
                                    {preference.items[0]["unit_price"]}
                                </h3>
                            </div>
                        </div>

                        <div class="flex items-center space-x-4 p-3.5 ">
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
                </div>
            </div>
        </div>
    );
};

export default Pagos;
