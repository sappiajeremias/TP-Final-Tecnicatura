import React from "react";

const Thead = ({ nombreColumnas }) => {
    return (
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {nombreColumnas.map((nombre, index) => (
                    <th scope="col" className="px-6 py-3" key={index}>
                        {nombre}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default Thead;
