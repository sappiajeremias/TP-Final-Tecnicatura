import React, { useEffect, useState } from "react";
import CardRutina from "../Rutinas/CardRutina";
import Modal from "@/Components/Modal";
import { router, usePage } from "@inertiajs/react";

const VistaRutinas = (props) => {
    const [rutinas, setRutinas] = useState([]);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (props.edit) {
            setEdit(props.edit);
        }
        if (props.rutinas) {
            setRutinas(props.rutinas);
        }
    }, []);
    console.log(props);
    
    return (
        <div className=" pt-5">
            <h1 className="font-semibold text-3xl text-center pt-2">
                {" "}
                Mis Rutinas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 pt-4 justify-around px-10">
                {rutinas.map((rutina) => (
                    <CardRutina
                        key={rutina.rutinas.id}
                        edit={edit}
                        rutina={rutina.rutinas}
                    ></CardRutina>
                ))}
            </div>

        </div>
    );
};

export default VistaRutinas;
