import React, { useEffect, useState } from "react";

// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const Nav = ({ children }) => {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const openSidebar = () => {
        setSidebarVisible(true);
    };

    const closeSidebar = () => {
        setSidebarVisible(false);
    };

    // Función para verificar el tamaño de la pantalla
    const checkScreenWidth = () => {
        if (window.innerWidth > 500) {
            setSidebarVisible(true);
        } else {
            setSidebarVisible(false);
        }
    };

    // Agregar un listener para el cambio en el tamaño de la pantalla
    useEffect(() => {
        checkScreenWidth();
        window.addEventListener("resize", checkScreenWidth);

        // Limpia el listener cuando el componente se desmonta
        return () => {
            window.removeEventListener("resize", checkScreenWidth);
        };
    }, []);

    return (
        // ALTO DEL NAVBAR
        <div className="flex flex-no-wrap h-screen">
            <button
                aria-label="toggle sidebar"
                id="openSideBar"
                className={`sm:hidden h-10 w-10 bg-gray-800 absolute left-0 mt-5 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800 z-50 ${
                    !sidebarVisible ? "" : "hidden"
                }`}
                onClick={openSidebar}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-adjustments"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#FFFFFF"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx="6" cy="10" r="2" />
                    <line x1="6" y1="4" x2="6" y2="8" />
                    <line x1="6" y1="12" x2="6" y2="20" />
                    <circle cx="12" cy="16" r="2" />
                    <line x1="12" y1="4" x2="12" y2="14" />
                    <line x1="12" y1="18" x2="12" y2="20" />
                    <circle cx="18" cy="7" r="2" />
                    <line x1="18" y1="4" x2="18" y2="5" />
                    <line x1="18" y1="9" x2="18" y2="20" />
                </svg>
            </button>

            <div
                className={` w-64 z-40 absolute bg-gray-800 shadow h-full flex flex-col justify-between transition duration-150 ease-in-out ${
                    sidebarVisible ? "" : "hidden"
                }`}
                
            >
                <button
                    aria-label="Close sidebar"
                    id="closeSideBar"
                    className={`sm:hidden h-10 w-10 bg-gray-800 absolute right-0 mt-5 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white ${
                        sidebarVisible ? "" : "hidden"
                    }`}
                    onClick={closeSidebar}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-x"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>
                <div className="px-8">
                    <div className="h-20 w-full flex items-center justify-center pt-8 ">
                        <img
                            src="./assets/img/logo/logo_atenea.svg"
                            alt=""
                            className="bg-white h-24 rounded-lg"
                        />
                    </div>
                    <ul className="mt-12">
                        <li className="flex w-full justify-between text-gray-300 hover:text-gray-500 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-grid"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <rect
                                        x="4"
                                        y="4"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="4"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="4"
                                        y="14"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                    <rect
                                        x="14"
                                        y="14"
                                        width="6"
                                        height="6"
                                        rx="1"
                                    ></rect>
                                </svg>
                                <span className="text-sm ml-2">Dashboard</span>
                            </a>
                            <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                5
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-puzzle"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                </svg>
                                <span className="text-sm ml-2">Products</span>
                            </a>
                            <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                8
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-compass"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <polyline points="8 16 10 10 16 8 14 14 8 16"></polyline>
                                    <circle cx="12" cy="12" r="9"></circle>
                                </svg>
                                <span className="text-sm ml-2">
                                    Performance
                                </span>
                            </a>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-code"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <polyline points="7 8 3 12 7 16"></polyline>
                                    <polyline points="17 8 21 12 17 16"></polyline>
                                    <line x1="14" y1="4" x2="10" y2="20"></line>
                                </svg>
                                <span className="text-sm ml-2">
                                    Deliverables
                                </span>
                            </a>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-puzzle"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1"></path>
                                </svg>
                                <span className="text-sm ml-2">Invoices</span>
                            </a>
                            <div className="py-1 px-3 bg-gray-600 rounded text-gray-300 flex items-center justify-center text-xs">
                                25
                            </div>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center mb-6">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-stack"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                                    <polyline points="4 12 12 16 20 12" />
                                    <polyline points="4 16 12 20 20 16" />
                                </svg>
                                <span className="text-sm ml-2">Inventory</span>
                            </a>
                        </li>
                        <li className="flex w-full justify-between text-gray-400 hover:text-gray-300 cursor-pointer items-center">
                            <a
                                href="#"
                                className="flex items-center focus:outline-none focus:ring-2 focus:ring-white"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-settings"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                    <circle cx="12" cy="12" r="3" />
                                </svg>
                                <span className="text-sm ml-2">Settings</span>
                            </a>
                        </li>
                    </ul>
                    {/* <div className="flex justify-center mt-48 mb-4 w-full">
                        <div className="relative">
                            <div className="text-gray-300 absolute ml-4 inset-0 m-auto w-4 h-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-search"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <circle cx="10" cy="10" r="7"></circle>
                                    <line
                                        x1="21"
                                        y1="21"
                                        x2="15"
                                        y2="15"
                                    ></line>
                                </svg>
                            </div>
                            <input
                                className="bg-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-100  rounded w-full text-sm text-gray-300 placeholder-gray-400 bg-gray-100 pl-10 py-2"
                                type="text"
                                placeholder="Search"
                            />
                        </div>
                    </div> */}
                </div>

                <div className="flex px-8 border-t border-gray-700">
                    <ul className="w-full flex items-center justify-between bg-gray-800">
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button
                                aria-label="show notifications"
                                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-bell"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"></path>
                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button
                                aria-label="open chats"
                                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-messages"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10"></path>
                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2"></path>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button
                                aria-label="open settings"
                                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-settings"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </button>
                        </li>
                        <li className="cursor-pointer text-white pt-5 pb-3">
                            <button
                                aria-label="open logs"
                                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="icon icon-tabler icon-tabler-archive"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                    ></path>
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="4"
                                        rx="2"
                                    ></rect>
                                    <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
                                    <line
                                        x1="10"
                                        y1="12"
                                        x2="14"
                                        y2="12"
                                    ></line>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <main
                className={`w-full h-full ${
                    sidebarVisible ? "ps-[256px]" : "pe-0"
                }`}
            >
                {children}
            </main>
        </div>
    );
};

export default Nav;
