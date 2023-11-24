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
                    className={`absolute -top-96 left-0 ${
                        isDropdownTopOpen ? "z-10" : ""
                    }  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-10 ${
                        isDropdownTopOpen ? "block" : "hidden"
                    } sm:w-64 md:w-80 lg:w-96`}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownTopButton"
                    >
                        {notificaciones
                            ? notificaciones.map((notificacion, index) => (
                                  <li key={index}>
                                      <a
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
                                              {/* <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="bi bi-chat-heart text-pink-600"
                                            viewBox="0 0 16 16"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M2.965 12.695a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2m-.8 3.108.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125ZM8 5.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"
                                            />
                                        </svg> */}
                                              {/* <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full dark:border-gray-800">
                                            <svg
                                                className="w-2 h-2 text-white"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 18 18"
                                            >
                                                <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z" />
                                                <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z" />
                                            </svg>
                                        </div> */}
                                          </div>
                                          <div className="w-full ps-3">
                                              <div className="text-gray-500 text-sm mb-1.5 dark:text-gray-400">
                                                  {/* New message from{" "}
                                                    <span className="font-semibold text-gray-900 dark:text-white">
                                                        Jese Leos
                                                    </span> */}
                                                  {notificacion.message}
                                              </div>
                                              {/* <div className="text-xs text-blue-600 dark:text-blue-500">
                                                    a few moments ago
                                                </div> */}
                                          </div>
                                      </a>
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
