import { router } from "@inertiajs/react";
import React from "react";

const CardRutina = ({ rutina }) => {
    const verRutina = () => {
        router.get(`/rutina/${rutina.id}`);
    }
    return (
        <div>
            <button
                onClick={verRutina}
                className="mx-16 max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16 py-10"
            >
                <img
                    className="m-auto rounded-t-lg h-24 w-24"
                    src="/assets/img/rutina/rutina.svg"
                    alt=""
                />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {rutina.mes}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {rutina.dia_semana}
                    </p>
                    {/* <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a> */}
                </div>{" "}
            </button>
        </div>
    );
};

export default CardRutina;
