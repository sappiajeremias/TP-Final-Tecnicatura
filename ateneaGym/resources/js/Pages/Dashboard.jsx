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
    return (
        <AuthenticatedLayout auth={auth}>
            <PaginaWelcome></PaginaWelcome>
        </AuthenticatedLayout>
    );
}
