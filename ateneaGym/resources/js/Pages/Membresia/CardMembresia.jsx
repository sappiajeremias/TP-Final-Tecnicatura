import React from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

function CardMembresia({ membresia, auth }) {
    const { id, descripcion, valor, dias_disponibles } = membresia;
    const { data, setData, put, post, processing, errors, reset, get } =
        useForm({
            membresia_id: id,
        });
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(membresia.id);
        Swal.fire({
            title: "Estas seguro?",
            text: "Reserva de membresía " + descripcion,
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
        }).then((result) => {
            if (result.isConfirmed) {
                get(`/membresia/${membresia.id}`);
            }
        });
    };

    return (
        <div className="max-w-xs rounded overflow-hidden bg-white shadow-lg">
            <div className="px-6 py-2">
                <img
                    className="w-full h-52"
                    src="./assets/img/logo/logo_atenea.svg"
                    alt={membresia.descripcion}
                />
                <h3 className="font-bold text-xl mb-2">
                    {membresia.descripcion}
                </h3>
                <h4 className="font-bold text-xl mb-2">
                    {membresia.dias_disponibles}
                </h4>
                <p className="text-rosa-950 font-bold">$ {membresia.valor}</p>
            </div>
            <div className="px-6">
                <button
                    onClick={clickHandler}
                    type="button"
                    class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                    Renovar
                </button>
            </div>
        </div>
    );
}

export default CardMembresia;
