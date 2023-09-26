import { Label, Select } from "flowbite-react";
import { useState } from "react";

export default function InputSelect({ options, value }) {
    const handleChange = (event) => {
        const selectedValue = event.target.value;
        onChange(selectedValue);
    };

    return (
        <div className="max-w-md" id="select">
            <select name={value} id={value} onChange={handleChange}>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}
