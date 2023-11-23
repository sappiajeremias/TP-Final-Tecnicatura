import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link, usePage } from "@inertiajs/react";
import Nav from "./nav/Nav";

export default function Authenticated({ auth,children }) {
    const { props } = usePage();
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Nav auth={auth} notificaciones={props.notificaciones}>
                {children}
            </Nav>
        </div>
    );
}
