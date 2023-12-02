import React, { useEffect, useState } from "react";
import CardRutina from "./CardRutina";
import NuevaRutina from "./NuevaRutina";
import Modal from "@/Components/Modal";
import { router, usePage } from "@inertiajs/react";

const VerRutinas = (props) => {
    const [rutinas, setRutinas] = useState([]);
    const [profesor, setProfesor] = useState([]);
    const [edit, setEdit] = useState(true);
    useEffect(() => {
        if (props.edit) {
            setEdit(props.edit);
        }
        if (props.rutinas) {
            setRutinas(props.rutinas);
        }
        if (props.profesor) {
            setProfesor(props.profesor);
        }
    }, []);
    const [modalOpen, setModalOpen] = useState(false);
    const cerrarModal = () => {
        setModalOpen(false);
    };
    const nuevaRutina = () => {
        setModalOpen(true);
    };
    const asignarRutina = () => {
        router.visit(`/asignarRutina`);
    };
    return (
        <div className=" pt-5">
            <h1 className="font-semibold text-3xl text-center pt-2">
                {" "}
                Mis Rutinas
            </h1>
            <div className="flex justify-end pe-3">
                {edit ? (
                    <>
                        <button
                            onClick={asignarRutina}
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Asignar Rutina a Alumnos
                        </button>
                        <button
                            onClick={nuevaRutina}
                            type="button"
                            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                        >
                            Agregar Nueva Rutina
                        </button>
                    </>
                ) : (
                    ""
                )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-24 pt-4 justify-around">
                {rutinas.map((rutina) => (
                    <CardRutina
                        key={rutina.id}
                        edit={true}
                        rutina={rutina}
                    ></CardRutina>
                ))}
            </div>

            <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
                <NuevaRutina
                    cerrarModal={cerrarModal}
                    profesor={profesor}
                ></NuevaRutina>
            </Modal>
        </div>
    );
};

export default VerRutinas;
