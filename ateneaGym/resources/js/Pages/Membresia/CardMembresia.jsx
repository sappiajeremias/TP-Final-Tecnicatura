import React, { useEffect, useState } from "react";
import { router, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

function CardMembresia({ membresia, auth }) {
    const { id, descripcion, valor, dias_disponibles } = membresia;
    const { data, setData, put, post, processing, errors, reset, get } =
        useForm({
            membresia_id: id,
        });

     // Estado para almacenar el resultado SOAP

    const clickHandler = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Estás seguro?",
            text: "Reserva de membresía " + descripcion,
            icon: "question",
            confirmButtonColor: "#E10045",
            confirmButtonText: "Confirmar",
        }).then((result) => {
            if (result.isConfirmed) {
                post(`/realizarPago`,membresia.id);
            }
        });
    };

  const [numberToWords, setNumberToWords] = useState("");

    useEffect(() => {
        // Realiza la solicitud SOAP al cargar el componente
        makeSoapRequest(valor); // Pasa el valor de membresía a la función
    }, [valor]); // Agrega valor como dependencia para que la solicitud se realice cuando cambie

    const imagen = "atenea_" + descripcion.toLowerCase();

    // Define los headers y datos de la solicitud SOAP
    const headers = {
        "Content-Type": "text/xml; charset=utf-8",
        "X-RapidAPI-Key": "995097318amsh62fe983a31289bfp146e87jsn20167bed11a1",
        "X-RapidAPI-Host": "number-conversion-service.p.rapidapi.com",
    };

    const formarBody = (num) => {
        return `<?xml version='1.0' encoding='utf-8'?>
      <soap:Envelope xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>
        <soap:Body>
        <NumberToWords xmlns='http://www.dataaccess.com/webservicesserver/'>
            <ubiNum>${num}</ubiNum>
        </NumberToWords>
        </soap:Body>
      </soap:Envelope>`;
    };

    // Realiza la solicitud SOAP utilizando fetch
    const makeSoapRequest = async (num) => {
        try {
            const response = await fetch(
                "https://number-conversion-service.p.rapidapi.com/webservicesserver/NumberConversion.wso",
                {
                    method: "POST",
                    headers: headers,
                    body: formarBody(num),
                }
            );

            const responseBody = await response.text();

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(responseBody, "text/xml");
      console.log(xmlDoc);
            // Encuentra el elemento <m:NumberToWordsResult>
            const numberToWordsResult = xmlDoc.querySelector(
                "NumberToWordsResult"
            );

            if (numberToWordsResult) {
                // Obtén el texto dentro del elemento
                const resultText = numberToWordsResult.textContent;
                setNumberToWords(resultText); // Almacena el resultado en el estado
            } else {
                console.log(
                    "Elemento <m:NumberToWordsResult> no encontrado en la respuesta XML."
                );
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="max-w-xs rounded overflow-hidden bg-white shadow-lg">
            <div className="px-6 py-2">
                <img
                    className="w-full h-52"
                    src={`./assets/img/logo/${imagen}.svg`}
                    alt={descripcion}
                />
                <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                    {descripcion}
                </h5>
                <div className="flex items-baseline text-gray-900 dark:text-white">
                    <span className="text-2xl font-semibold">$</span>
                    <span className="text-2xl font-extrabold tracking-tight">
                        {membresia.valor}
                    </span>
                    <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                        /mes
                    </span>
                </div>
                {/* Mostrar el resultado SOAP al lado del valor de membresía */}
                {numberToWords && (
                    <p className="text-gray-500 dark:text-gray-400">
                        {numberToWords} pesos
                    </p>
                )}
                <ul role="list" className="space-y-5 my-7">
                      <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4  text-pink-500 dark:text-pink-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {membresia.dias_disponibles} dias disponibles por
              semana
            </span>
          </li>
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4  text-pink-500 dark:text-pink-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Rutinas personalizadas
            </span>
          </li>
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-pink-500 dark:text-pink-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Profesor
            </span>
          </li>
          <li className="flex space-x-3 items-center">
            <svg
              className="flex-shrink-0 w-4 h-4 text-pink-500 dark:text-pink-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              Clases o Musculación
            </span>
          </li>
                </ul>
            </div>
            <div className="px-6 pb-2 flex justify-end">
                <button
                    onClick={clickHandler}
                    type="button"
                    className="text-white bg-pink-500 hover-bg-pink-600 focus-outline-none focus-ring-4 focus-ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark-bg-gray-800 dark-hover-bg-gray-700 dark-focus-ring-gray-700 dark-border-gray-700"
                >
                    Renovar
                </button>
            </div>
        </div>
    );
}

export default CardMembresia;
