import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PaginaWelcome from "./PaginaWelcome";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout auth={auth}>
            <PaginaWelcome></PaginaWelcome>
        </AuthenticatedLayout>
    );
}
