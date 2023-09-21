import React from "react";

const TrBody = ({ coleccion, nombreProp }) => {
    // const arreglo = coleccion.map((obj) => ({
    //     id: obj.id,

    // }));

    return (
        <>
            {coleccion.map((obj) => (
                <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={obj.id}
                >
                    {nombreProp.map((p, index) => (
                        <td className="px-6 py-4" key={index}>
                            {obj[p]}
                        </td>
                    ))}
                    <td className="px-6 py-4 flex">
                        <a href="#" className="text-blue-600">
                            <svg
                                className=" text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width={18}
                                height={18}
                                viewBox="0 0 21 21"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7.418 17.861 1 20l2.139-6.418m4.279 4.279 10.7-10.7a3.027 3.027 0 0 0-2.14-5.165c-.802 0-1.571.319-2.139.886l-10.7 10.7m4.279 4.279-4.279-4.279m2.139 2.14 7.844-7.844m-1.426-2.853 4.279 4.279"
                                />
                            </svg>
                        </a>
                        <a
                            // href={route(`${obj}.destroy`, obj.id)}
                            className="text-blue-600 ps-3"
                        >
                            <svg
                                className="text-gray-800 dark:text-white"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                width={18}
                                height={18}
                                viewBox="0 0 18 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"
                                />
                            </svg>
                        </a>
                    </td>
                </tr>
            ))}
        </>
    );
};

export default TrBody;

// const TrBody = ({ coleccion, nombreProp }) => {
//     return (
//         <>
//             {coleccion.map((obj) => (
//                 <tr
//                     key={obj.id} // Asegúrate de proporcionar una clave única para cada fila
//                     className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                 >
//                     {nombreProp.map((prop) => (
//                         <td key={prop} className="px-6 py-4">
//                             {obj[prop]}
//                         </td>
//                     ))}
//                     <td className="px-6 py-4">
//                         <a href="#" className="text-blue-600">
//                             Editar
//                         </a>
//                     </td>
//                 </tr>
//             ))}
//         </>
//     );
// };

// export default TrBody;
