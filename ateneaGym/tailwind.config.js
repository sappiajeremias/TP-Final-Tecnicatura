import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                body: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                sans: [
                    "Inter",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "system-ui",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
            colors: {
                primary: {
                    50: "#eff6ff",
                    100: "#dbeafe",
                    200: "#bfdbfe",
                    300: "#93c5fd",
                    400: "#60a5fa",
                    500: "#3b82f6",
                    600: "#2563eb",
                    700: "#1d4ed8",
                    800: "#1e40af",
                    900: "#1e3a8a",
                    950: "#172554",
                },
                cinderella: {
                    DEFAULT: "#FEE5E1",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFFFFF",
                    300: "#FEE5E1",
                    400: "#FDCDC8",
                    500: "#FCB4B0",
                    600: "#FC9997",
                    700: "#FB7E81",
                    800: "#FA666F",
                    900: "#F94D5F",
                    950: "#F94157",
                },
                rosa: {
                    DEFAULT: "#FFB8D0",
                    50: "#FFFFFF",
                    100: "#FFFFFF",
                    200: "#FFE1EB",
                    300: "#FFB8D0",
                    400: "#FF94B8",
                    500: "#FF719F",
                    600: "#FF4D86",
                    700: "#FF296D",
                    800: "#FF0554",
                    900: "#E10045",
                    950: "#CF003F",
                },
            },
        },
    },

    plugins: [forms, require("flowbite/plugin")],
};
