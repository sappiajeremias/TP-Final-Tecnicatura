import Nav from "@/Layouts/nav/Nav";
import { Link, Head } from "@inertiajs/react";
import PaginaWelcome from "./PaginaWelcome";

export default function Welcome({ auth }) {
    return (
        <>
            <Nav auth={auth}>
                <PaginaWelcome></PaginaWelcome>
            </Nav>
        </>
    );
}
