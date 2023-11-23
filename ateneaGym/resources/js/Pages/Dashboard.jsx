import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import PaginaWelcome from "./PaginaWelcome";
import Swal from "sweetalert2";

export default function Dashboard({ auth }) {
    const { mensaje } = usePage().props;
    if (mensaje) {
        Swal.fire({
            icon: "info",
            text: mensaje,
        });
    }
   
    Swal.fire({
        title: "Estado de membresia!",
        icon: "warning",
        html: "Recuerde que su membresia se encuentra vencida",
        timer: 3000,
        background: '#FAF6F0',
        timerProgressBar: true,
    });

    return (
        <AuthenticatedLayout auth={auth}>
            <PaginaWelcome></PaginaWelcome>
        </AuthenticatedLayout>
    );
}
