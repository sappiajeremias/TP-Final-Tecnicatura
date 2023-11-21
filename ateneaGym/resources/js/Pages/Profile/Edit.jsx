import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head, Link } from "@inertiajs/react";
import MostrarMembresia from "./Partials/MostrarMembresia";

export default function Edit({ auth, mustVerifyEmail, status, membresia }) {
    console.log(membresia);
    return (
        <AuthenticatedLayout
            auth={auth}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Perfil
                </h2>
            }
        >
            <Head title="Perfil de usuario" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    {membresia.pago && membresia.membresia ? (
                        <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <MostrarMembresia
                                membresia={membresia}
                                auth={auth}
                            ></MostrarMembresia>
                        </div>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
