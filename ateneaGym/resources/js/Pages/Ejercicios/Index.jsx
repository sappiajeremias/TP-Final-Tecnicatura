import React, { useState, useEffect } from "react";
import CardEjercicio from "./CardEjercicio";

const Index = () => {
    const [coleccionEjercicio, setColeccionEjercicio] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;

            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    const exercises = JSON.parse(this.responseText);
                    setColeccionEjercicio(exercises);
                }
            });

            xhr.open(
                "GET",
                "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10"
            );
            xhr.setRequestHeader(
                "X-RapidAPI-Key",
                "cbb20f43f9msh0be57f335d40c8bp10f53djsne09b0a7c11ef"
            );
            xhr.setRequestHeader(
                "X-RapidAPI-Host",
                "exercisedb.p.rapidapi.com"
            );

            xhr.send();
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                Ejercicios{" "}
            </h1>
            {coleccionEjercicio.map(
                (ejercicio, index) => (
                    console.log(ejercicio),
                    (
                        <div key={index} className="card">
                            <CardEjercicio
                                ejercicio={ejercicio}
                            ></CardEjercicio>
                            {/* <h3>{ejercicio.name}</h3>
                            <p>{ejercicio.description}</p> */}
                        </div>
                    )
                )
            )}
        </div>
    );
};

export default Index;
