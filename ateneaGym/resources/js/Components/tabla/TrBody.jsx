import React from "react";

const TrBody = ({ coleccion, nombreProp }) => {
    // const arreglo = coleccion.map((obj) => ({
    //     id: obj.id,

    // }));

    return (
        <>
            {coleccion.map((obj) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    {nombreProp.map((p) => (
                        <td class="px-6 py-4">{obj[p]}</td>
                    ))}
                    <td class="px-6 py-4">
                        <a href="#" className="text-blue-600">
                            Editar
                        </a>
                    </td>
                </tr>
            ))}
        </>

    );
};

export default TrBody;
// import React from "react";

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