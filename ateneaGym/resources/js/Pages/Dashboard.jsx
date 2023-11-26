import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, usePage } from "@inertiajs/react";
import PaginaWelcome from "./PaginaWelcome";
import Swal from "sweetalert2";

export default function Dashboard({ auth }) {
    const { mensaje } = usePage().props;
    const { membresia } = usePage().props;
    console.log(membresia);
    if (mensaje) {
        Swal.fire({
            icon: "info",
            text: mensaje,
        });
    }

    const isMembershipExpired =
        membresia && new Date(membresia.fecha_vencimiento) < new Date();

    if (isMembershipExpired) {
        Swal.fire({
            title: "Estado de membresia",
            icon: "warning",
            html: "Recuerde que su membresia se encuentra vencida",
            background: "#FAF6F0",
            confirmButtonText: "Cerrar",
        });
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <PaginaWelcome></PaginaWelcome>
        </AuthenticatedLayout>
    );
}
