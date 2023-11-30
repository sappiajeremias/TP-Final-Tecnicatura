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
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 14 20"
                    >
                        <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
                    </svg>
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
                        {notificaciones
                            ? notificaciones.map((notificacion, index) => (
                                  <li key={index}>
                                      <button
                                          onClick={() =>
                                              marcarLeido(notificacion.id)
                                          }
                                          className="bg-white flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 border-b-2"
                                      >
                                          <div className="flex-shrink-0">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="24"
                                                  height="24"
                                                  fill="currentColor"
                                                  className="bi bi-chat-left-heart text-pink-600"
                                                  viewBox="0 0 16 16"
                                              >
                                                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                                  <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z" />
                                              </svg>
                                          </div>
                                          <div className="w-full ps-3">
                                              <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                  {notificacion.message}
                                              </div>
                                          </div>
                                      </button>
                                  </li>
                              ))
                            : ""}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Notification;
