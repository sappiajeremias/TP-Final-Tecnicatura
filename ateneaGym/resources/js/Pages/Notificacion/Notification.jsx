import Notificacion from "@/Components/iconos/Notificacion";
import NotificacionMensaje from "@/Components/iconos/NotificacionMensaje";
import { router } from "@inertiajs/react";
import { useState } from "react";

const Notification = ({ notificaciones }) => {
    const [isDropdownTopOpen, setDropdownTopOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownTopOpen(!isDropdownTopOpen);
    };

    // Determina si hay notificaciones pendientes

    const hayNotificaciones = notificaciones ? notificaciones.length > 0 : "";
    const marcarLeido = (id) => {
        router.post(`/notiLeida/${id}`);
    };
    return (
        <>
            <div className="relative">
                <button
                    id="dropdownNotificationButton"
                    title="Notificacion"
                    data-dropdown-toggle="dropdownNotification"
                    className="relative inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-gray-900 focus:outline-none dark:hover:text-white dark:text-gray-400"
                    type="button"
                    onClick={toggleDropdown}
                >
                    <Notificacion></Notificacion>
                    {hayNotificaciones && (
                        <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div>
                    )}
                </button>
                {/* <div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full -top-0.5 start-2.5 dark:border-gray-900"></div> */}

                {/* Dropdown menu */}

                <div
                    id="dropdownTop"
                    className={`absolute  ${
                        isDropdownTopOpen ? "z-10" : ""
                    }  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-10 ${
                        isDropdownTopOpen ? "block" : "hidden"
                    } sm:w-64 md:w-80 lg:w-96`}
                    style={{ bottom: "100%" }}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownTopButton"
                    >
                        {hayNotificaciones ? (
                            notificaciones.map((notificacion, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            marcarLeido(notificacion.id)
                                        }
                                        className="bg-white flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2"
                                    >
                                        <div className="flex-shrink-0">
                                            <NotificacionMensaje></NotificacionMensaje>
                                        </div>
                                        <div className="w-full ps-3">
                                            <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                {notificacion.message}
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            ))
                        ) : (
                            <li className="cursor-default">
                                <div className="bg-white flex px-4 py-3 border-b-2">
                                    <div className="flex-shrink-0">
                                        <NotificacionMensaje></NotificacionMensaje>
                                    </div>
                                    <div className="w-full ps-3">
                                        <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                            No hay notificaciones disponibles
                                        </div>
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Notification;
