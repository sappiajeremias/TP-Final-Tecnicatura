import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            {/* <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div> */}
            <img
                src="./assets/img/logo/logo_atenea.svg"
                alt=""
                width={30}
                height={30}
            />
            <div className=" text-2xl font-bold">
                <span className="text-pink-500 ">Atenea</span>
                <br />
                <span className="ps-3">Gym</span>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
