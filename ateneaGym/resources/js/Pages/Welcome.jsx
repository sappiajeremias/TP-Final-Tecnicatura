import Nav from "@/Layouts/nav/Nav";
import { Link, Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <>
            <Nav auth={auth}></Nav>
        </>
    );
}
