import React, { useState, useEffect } from "react";

const ModalEjercicios = ({ children, isOpen }) => {
    const [isModalOpen, setIsModalOpen] = useState(isOpen);

    useEffect(() => {
        setIsModalOpen(isOpen);
    }, [isOpen]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div>
            {/* Main modal */}
            <div
                id="select-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`${
                    isModalOpen ? "fixed" : "hidden"
                } overflow-y-auto overflow-x-hidden top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
            >
                <div className="relative m-auto p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="select-modal"
                                onClick={toggleModal}
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 5h12m0 0L9 1m4 4L9 9"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalEjercicios;
