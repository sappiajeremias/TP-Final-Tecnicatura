import NavLink from "@/Components/NavLink";
import CerrarSesion from "@/Components/iconos/CerrarSesion";
import InicioSesion from "@/Components/iconos/InicioSesion";
import Mancuerna from "@/Components/iconos/Mancuerna";
import Notification from "@/Pages/Notificacion/Notification";
import { usePage } from "@inertiajs/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

// import { Sidebar } from 'flowbite-react';
// import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';

const Nav = ({ children, auth, notificaciones }) => {
    // const { props } = usePage();
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const openSidebar = () => {
        setSidebarVisible(true);
    };

    const [userRoles, setUserRoles] = useState([]);

    useEffect(() => {
        axios
            .get("/user-role")
            .then((response) => {
                setUserRoles(response.data);
            })
            .catch((error) => {
                console.error("Error fetching user roles:", error);
            });
    }, []);
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
        <>
            <div className="flex flex-no-wrap  ">
                <button
                    aria-label="toggle sidebar"
                    id="openSideBar"
                    className={`sm:hidden h-10 w-10 bg-gray-950 absolute left-0 mt-5 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 rounded focus:ring-gray-800 z-50 ${
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
                    className={` w-64 z-40 fixed bg-gray-950 shadow h-full flex flex-col justify-between transition duration-150 ease-in-out ${
                        sidebarVisible ? "" : "hidden"
                    }`}
                >
                    <button
                        aria-label="Close sidebar"
                        id="closeSideBar"
                        className={`sm:hidden h-10 w-10 bg-gray-950 absolute right-0 mt-5 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer text-white ${
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

                    <div className="px-8 h-full">
                        <div className="w-full flex items-center justify-center pt-5 ">
                            <img
                                src="/assets/img/logo/atenea_gym.svg"
                                alt=""
                                className=" max-h-32 md:max-h-40"
                            />
                        </div>
                        <ul className="mt-12 pt-3">
                            {auth.user ? (
                                ""
                            ) : (
                                <>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white justify-between gap-3">
                                            <InicioSesion></InicioSesion>
                                            <NavLink
                                                href={route("login")}
                                                active={route().current(
                                                    "login"
                                                )}
                                            >
                                                Login
                                            </NavLink>
                                        </div>
                                    </li>
                                </>
                            )}
                            {auth.user &&
                            userRoles.includes("Administrador") ? (
                                <>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("actividad.index")}
                                                active={route().current(
                                                    "actividad.index"
                                                )}
                                            >
                                                Registrar Actividad
                                            </NavLink>
                                        </div>
                                    </li>

                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("usuarios.index")}
                                                active={route().current(
                                                    "registrarUsuarios.index"
                                                )}
                                            >
                                                Registrar Usuarios
                                            </NavLink>
                                        </div>
                                    </li>

                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route(
                                                    "especialidad.index"
                                                )}
                                                active={route().current(
                                                    "especialidad.index"
                                                )}
                                            >
                                                Especialidades
                                            </NavLink>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                ""
                            )}
                            {auth.user && userRoles.includes("Alumno") ? (
                                <>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("membresia.index")}
                                                active={route().current(
                                                    "membresia.index"
                                                )}
                                            >
                                                Membresias
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("turnos.index")}
                                                active={route().current(
                                                    "turnos.index"
                                                )}
                                            >
                                                Reservar Turno
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("turnoAlumno")}
                                                active={route().current(
                                                    "turnoAlumno"
                                                )}
                                            >
                                                Mis turnos
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("asistencia.index")}
                                                active={route().current(
                                                    "asistencia.index"
                                                )}
                                            >
                                                Asistencia
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("mis.rutinas")}
                                                active={route().current(
                                                    "mis.rutinas"
                                                )}
                                            >
                                                Mis Rutinas
                                            </NavLink>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                ""
                            )}
                            {auth.user && userRoles.includes("Profesor") ? (
                                <>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("ejercicio.index")}
                                                active={route().current(
                                                    "ejercicio.index"
                                                )}
                                            >
                                                Ejercicios
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route("rutina.index")}
                                                active={route().current(
                                                    "rutina.index"
                                                )}
                                            >
                                                Rutinas
                                            </NavLink>
                                        </div>
                                    </li>
                                    <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                        <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                            <Mancuerna />
                                            <NavLink
                                                href={route(
                                                    "asistenciaAlumno.index"
                                                )}
                                                active={route().current(
                                                    "asistenciaAlumno.index"
                                                )}
                                            >
                                                Asistencia
                                            </NavLink>
                                        </div>
                                    </li>
                                </>
                            ) : (
                                ""
                            )}
                            {auth.user ? (
                                <li className="flex w-full justify-between text-gray-100 cursor-pointer items-center mb-6">
                                    <div className="flex items-center focus:outline-none focus:ring-2 focus:ring-white gap-3">
                                        <CerrarSesion></CerrarSesion>
                                        <NavLink
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                            active={route().current("logout")}
                                        >
                                            Cerrar Sesion
                                        </NavLink>
                                    </div>
                                </li>
                            ) : (
                                ""
                            )}
                        </ul>
                    </div>

                    <div className="flex px-8 border-t border-gray-700 ">
                        {auth.user ? (
                            <ul className=" flex items-center justify-between  bg-gray-950">
                                <li className="cursor-pointer text-white pb-3">
                                    <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                                        {/* <a href={route("profile.edit")}> */}{" "}
                                        <img
                                            src="https://source.unsplash.com/100x100/?portrait"
                                            alt=""
                                            className="w-12 h-12 rounded-lg dark:bg-gray-500"
                                        />
                                        <div>
                                            <h2 className="text-lg font-semibold">
                                                {auth.user.name}
                                            </h2>
                                            <a href={route("profile.edit")}>
                                                Ver Perfil
                                            </a>
                                            {/* <span className="flex items-center space-x-1">
                                        <a
                                            rel="noopener noreferrer"
                                            href="#"
                                            className="text-xs hover:underline dark:text-gray-400"
                                        >
                                            View profile
                                        </a>
                                    </span> */}
                                        </div>
                                        {/* </a> */}
                                    </div>
                                </li>
                                <li className="cursor-pointer text-white pt-14 pb-3 ">
                                    <Notification
                                        notificaciones={notificaciones}
                                    ></Notification>
                                </li>
                            </ul>
                        ) : (
                            ""
                        )}
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
        </>
    );
};

export default Nav;
