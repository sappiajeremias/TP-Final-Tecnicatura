import React from "react";

const Thead = ({ nombreColumnas }) => {
    return (
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                {nombreColumnas.map((nombre) => (
                    <th scope="col" class="px-6 py-3">
                        {nombre}
                    </th>
                ))}
            </tr>
        </thead>
    );
};

export default Thead;
