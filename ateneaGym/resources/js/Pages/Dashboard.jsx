import Table from "@/Components/Table";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <Nav auth={auth}>
            <PaginaWelcome></PaginaWelcome>
        </Nav>
    );
}
