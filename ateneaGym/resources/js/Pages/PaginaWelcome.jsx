import React, { useState } from "react";

const PaginaWelcome = () => {
    const slides = [
        {
            backgroundImage:
                "https://onclickwebdesign.com/wp-content/uploads/main-slider-1.jpg",
            title: "Be Fit. Top Gym",
        },
        {
            backgroundImage:
                "https://onclickwebdesign.com/wp-content/uploads/main-slider-2.jpg",
            title: "Be Fit. Top Trainer",
        },
        {
            backgroundImage:
                "https://onclickwebdesign.com/wp-content/uploads/main-slider-3.jpg",
            title: "Be Fit. Top Body",
        },
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };
    return (
        <>
            <div className="container relative">
                <div id="hero" className="p-0 relative">
                    <header className="absolute w-full top-0 left-0 bg-black bg-opacity-60 text-white py-4 z-10">
                        <div className="container mx-auto relative">
                            <nav className="max-w-950 mx-auto relative">
                                <ul className="flex items-center justify-around">
                                    <li>
                                        <a
                                            href="#features"
                                            className="text-white text-sm uppercase font-semibold"
                                        >
                                            Nosotros
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#services"
                                            className="text-white text-sm uppercase font-semibold"
                                        >
                                            Clases
                                        </a>
                                    </li>
                                    <li
                                        id="header-logo"
                                        className="top-gym-logo"
                                    >
                                        <a
                                            href="#"
                                            className="text-white text-2xl font-bold flex-nowrap justify-center"
                                        >
                                            <span className="text-pink-500 ">
                                                Atenea
                                            </span>
                                            <br />
                                            <span className="ps-3">Gym</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#schedule-services"
                                            className="text-white text-sm uppercase font-semibold"
                                        >
                                            Instructores
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#footerId"
                                            className="text-white text-sm uppercase font-semibold"
                                        >
                                            Contacto
                                        </a>
                                    </li>
                                    <li>
                                        <button
                                            id="search"
                                            className="text-white"
                                        >
                                            <span className="fa fa-search text-base"></span>
                                        </button>
                                    </li>
                                </ul>
                            </nav>

                            <button
                                id="hamburger-menu"
                                className="border border-white px-1 py-1 ml-4 lg:ml-0 lg:hidden"
                            >
                                <span className="block h-2 w-6 bg-white mb-1"></span>
                                <span className="block h-2 w-6 bg-white mb-1"></span>
                                <span className="block h-2 w-6 bg-white"></span>
                            </button>
                        </div>
                    </header>

                    <div className="relative">
                        {/* Slider */}
                        <div
                            className="hero-slide-item relative h-[895px] bg-cover bg-center"
                            style={{
                                backgroundImage: `url(${slides[currentSlide].backgroundImage})`,
                            }}
                        >
                            <div className="hero-slider-marketing absolute inset-0 flex flex-col items-center justify-center text-white">
                                <h2 className="text-4xl font-bold mb-4">
                                    {slides[currentSlide].title}
                                </h2>
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                            <button
                                onClick={prevSlide}
                                className="bg-pink-700 py-2 px-4 rounded-full text-white text-lg"
                            >
                                &larr;
                            </button>
                        </div>
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                            <button
                                onClick={nextSlide}
                                className="bg-pink-700 py-2 px-4 rounded-full text-white text-lg"
                            >
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div id="features" className="bg-gray-100 py-16">
                    <div className="flex flex-wrap container mx-auto justify-around">
                        {/* Feature 1 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
                            <img
                                src="https://onclickwebdesign.com/wp-content/uploads/feature-1.jpg"
                                alt="Exercise Class"
                                className="w-full"
                            />
                            <div className="feature-info-container relative mt-4">
                                <div className="icon bg-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto">
                                    <img
                                        src="https://onclickwebdesign.com/wp-content/uploads/icon-1.png"
                                        alt="Star Trophy Icon"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold mt-2">
                                    Máquinas increíbles
                                </h4>
                                <p className="mt-2">
                                    En AteneaGym contamos con las mejores máquinas, mancuernas, barras para que tu experiencia de entrenamiento sea la mejor.
                                </p>
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
                            <img
                                src="https://onclickwebdesign.com/wp-content/uploads/feature-2.jpg"
                                alt="Man doing dumbbell rows"
                                className="w-full"
                            />
                            <div className="feature-info-container relative mt-4">
                                <div className="icon bg-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto">
                                    <img
                                        src="https://onclickwebdesign.com/wp-content/uploads/icon-2.png"
                                        alt="Dumbbell Icon"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold mt-2">
                                    Los mejores entrenadores
                                </h4>
                                <p className="mt-2">
                                    Tenemos entrenadores capacitados y dispuestos para ayudar a todos con su entrenamiento. Desde entrenamientos generales a personalizados!
                                </p>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white shadow-md rounded-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 mb-8">
                            <img
                                src="https://onclickwebdesign.com/wp-content/uploads/feature-3.jpg"
                                alt="Woman doing leg press"
                                className="w-full"
                            />
                            <div className="feature-info-container relative mt-4">
                                <div className="icon bg-pink-500 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto">
                                    <img
                                        src="https://onclickwebdesign.com/wp-content/uploads/icon-3.png"
                                        alt="Smoothie Icon"
                                    />
                                </div>
                                <h4 className="text-xl font-semibold mt-2">
                                    Actividades únicas
                                </h4>
                                <p className="mt-2">
                                    Tenemos actividades y planes para todas y todos. Con nuestros profesionales siempre vas a encontrar algo para vos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="services" className="bg-gray-800 py-16">
                    <div className="container mx-auto mb-16">
                        <h3 className="text-white text-2xl mb-6 ps-5">
                            Actividades
                        </h3>
                        <div className="flex flex-wrap justify-around">
                            {/* Service 1 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white rounded-lg p-4 text-center">
                                    <img
                                        width="66"
                                        height="66"
                                        className="h-16 mx-auto mb-4 text-pink-500"
                                        src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/66/external-Pilates-fitness-smashingstocks-flat-smashing-stocks-2.png"
                                        alt="Pilates Icon"
                                    />
                                    <h4 className="text-xl font-semibold">
                                        Pilates
                                    </h4>
                                    <p className="text-gray-700">
                                        Clases de pilates con las mejores herramientas. 
                                    </p>
                                </div>
                            </div>

                            {/* Service 2 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white rounded-lg p-4 text-center">
                                    <img
                                        width="66"
                                        height="66"
                                        className="mx-auto mb-4"
                                        src="https://img.icons8.com/officel/80/bench-press.png"
                                        alt="Free Lifting Icon"
                                    />
                                    <h4 className="text-xl font-semibold">
                                        Musculación
                                    </h4>
                                    <p className="text-gray-700">
                                        Gran cantidad de máquinas, pesas, mancuernas y más!
                                    </p>
                                </div>
                            </div>

                            {/* Service 3 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white rounded-lg p-4 text-center">
                                    <img
                                        width="66"
                                        height="66"
                                        className="mx-auto mb-4"
                                        src="https://img.icons8.com/external-filled-color-icons-papa-vector/78/external-Yoga-massage-types-filled-color-icons-papa-vector.png"
                                        alt="Yoga Icon"
                                    />
                                    <h4 className="text-xl font-semibold">
                                        Yoga
                                    </h4>
                                    <p className="text-gray-700">
                                        Clases semanales de yoga para relajar el cuerpo y el alma.
                                    </p>
                                </div>
                            </div>

                            {/* Service 4 */}
                            <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
                                <div className="bg-white rounded-lg p-4 text-center">
                                    <img
                                        width="66"
                                        height="66"
                                        className="mx-auto mb-4"
                                        src="https://img.icons8.com/officel/80/cycling-track.png"
                                        alt="Spinning Icon"
                                    />
                                    <h4 className="text-xl font-semibold">
                                        Spinning
                                    </h4>
                                    <p className="text-gray-700">
                                        Clases dinamicas e intensas con las mejores bicicletas fijas!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Schedule Services Section */}
                <div id="schedule-services" className="">
                    <div className="flex flex-wrap container pt-3 justify-around">
                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                            <div className="border border-gray-300 p-8 rounded-lg h-[395px]">
                                <strong className="block text-gray-800 text-xs uppercase opacity-60 tracking-wider">
                                    AteneaGym
                                </strong>
                                <h4 className="text-2xl font-semibold mb-4">
                                    Clases
                                </h4>
                                <table className="w-full">
                                    <tr>
                                        <td>
                                            <img
                                                src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                                alt="Stopwatch"
                                            />
                                        </td>
                                        <td>Musculacion</td>
                                        <td>08:00 - 23:00</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                                alt="Stopwatch"
                                            />
                                        </td>
                                        <td>Funcional</td>
                                        <td>08:00 - 13:00</td>
                                    </tr>

                                    <tr>
                                        <td>
                                            <img
                                                src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                                alt="Stopwatch"
                                            />
                                        </td>
                                        <td>GAP</td>
                                        <td>09:00 - 14:00</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img
                                                src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                                alt="Stopwatch"
                                            />
                                        </td>
                                        <td>Yoga</td>
                                        <td>14:00 - 16:00</td>
                                    </tr>
                                    {/* <tr>
                                        <td>
                                            <img
                                                src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                                alt="Stopwatch"
                                            />
                                        </td>
                                        <td>Zumba</td>
                                        <td>3:00 - 4:00</td>
                                    </tr> */}
                                </table>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                            <div className="border border-gray-300 bg-pink-500 rounded-lg overflow-hidden h-[395px] flex justify-center items-center">
                                <div
                                    className="bg-cover bg-center h-80 w-50"
                                    style={{
                                        backgroundImage:
                                            'url("https://onclickwebdesign.com/wp-content/uploads/woman-exercise.jpg")',
                                    }}
                                >
                                    <div className="p-6">
                                        <strong className="block text-gray-800 text-xs uppercase opacity-60 tracking-wider">
                                            AteneaGym
                                        </strong>
                                        <h4 className="text-2xl font-semibold mb-2">
                                            Membresias
                                        </h4>
                                        <h2 className="text-pink-500 text-5xl font-bold leading-tight mb-2">
                                            25%{" "}
                                            <span className="text-xl">
                                                Descuento
                                            </span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                            <div
                                className="bg-cover bg-center p-8 rounded-lg h-[395px]"
                                style={{
                                    backgroundImage:
                                        'url("https://onclickwebdesign.com/wp-content/uploads/personal-trainer.jpg")',
                                }}
                            >
                                <strong className="block text-white text-xs uppercase opacity-60 tracking-wider">
                                    POSTULATE COMO
                                </strong>
                                <h4 className="text-2xl font-semibold text-white mb-4">
                                    Profesor 
                                </h4>
                                <p className="text-white mb-4">
                                    ¡Únete a nuestro equipo como Entrenador
                                    Personal! Buscamos apasionados del fitness
                                    con certificación y experiencia. Ofrecemos
                                    un ambiente positivo, flexibilidad horaria y
                                    compensación competitiva. Envía tu
                                    currículum a [correo electrónico].
                                    ¡Transforma vidas a través del fitness con
                                    nosotros!
                                </p>
                                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                                  Contactar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="flex flex-col items-center justify-between px-4 py-12 mx-auto  md:flex-row bg-gray-800 " id="footerId">
                <p className="mb-8 text-sm text-center text-white md:text-left md:mb-0">
                    © Copyright 2023 AteneaGym. All Rights Reserved.
                </p>
                <div className="flex items-center space-x-6 me-4">
                    <a href="#" title="Twitter">
                        <span className="sr-only">Twitter</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2500"
                            height="2031"
                            viewBox="-0.25 -0.25 1109.5 901.5"
                            className="w-5 h-5"
                            aria-hidden="true"
                        >
                            <path
                                d="M741 .2V0h52l19 3.8c12.667 2.467 24.167 5.7 34.5 9.7 10.334 4 20.334 8.667 30 14 9.667 5.333 18.434 10.767 26.301 16.3 7.8 5.467 14.8 11.267 21 17.4C929.933 67.4 939.5 69 952.5 66s27-7.167 42-12.5 29.834-11.333 44.5-18c14.667-6.667 23.601-10.9 26.801-12.7 3.133-1.866 4.8-2.866 5-3l.199-.3 1-.5 1-.5 1-.5 1-.5.2-.3.3-.2.301-.2.199-.3 1-.3 1-.2-.199 1.5-.301 1.5-.5 1.5-.5 1.5-.5 1-.5 1-.5 1.5c-.333 1-.666 2.333-1 4-.333 1.667-3.5 8.333-9.5 20S1051 73 1042 85s-17.066 21.066-24.199 27.2c-7.2 6.2-11.967 10.533-14.301 13-2.333 2.533-5.166 4.866-8.5 7l-5 3.3-1 .5-1 .5-.199.3-.301.2-.3.2-.2.3-1 .5-1 .5-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.3.2-.2.3h5l28-6c18.667-4 36.5-8.833 53.5-14.5l27-9 3-1 1.5-.5 1-.5 1-.5 1-.5 1-.5 2-.3 2-.2v2l-.5.2-.5.3-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.3.2-.2.3-.199.3-.301.2-.5 1-.5 1-.3.2c-.133.2-4.366 5.866-12.7 17-8.333 11.2-12.833 16.866-13.5 17-.666.2-1.6 1.2-2.8 3-1.133 1.866-8.2 9.3-21.2 22.3s-25.732 24.566-38.199 34.7c-12.533 10.2-18.867 22.733-19 37.6-.2 14.8-.967 31.534-2.301 50.2-1.333 18.667-3.833 38.833-7.5 60.5-3.666 21.667-9.333 46.167-17 73.5-7.666 27.333-17 54-28 80s-22.5 49.333-34.5 70-23 38.167-33 52.5-20.166 27.833-30.5 40.5c-10.333 12.667-23.399 26.934-39.199 42.8-15.867 15.8-24.533 24.467-26 26-1.533 1.467-8.066 6.934-19.601 16.4-11.466 9.533-23.8 19.066-37 28.6-13.133 9.467-25.2 17.367-36.2 23.7s-24.266 13.566-39.8 21.7C630.734 840.4 614 848 596 855s-37 13.5-57 19.5-39.333 10.667-58 14c-18.666 3.333-39.833 6.167-63.5 8.5l-35.5 3.5v.5h-65v-.5l-8.5-.5c-5.666-.333-10.333-.667-14-1-3.666-.333-17.5-2.167-41.5-5.5s-42.833-6.667-56.5-10c-13.666-3.333-34-9.667-61-19s-50.1-18.767-69.3-28.3c-19.133-9.467-31.133-15.467-36-18-4.8-2.467-10.2-5.533-16.2-9.2l-9-5.5-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3-.301-.2-.3-.2-.2-.3-.199-.3L.5 800H0v-2l1 .2 1 .3 4.5.5c3 .333 11.167.833 24.5 1.5 13.334.667 27.5.667 42.5 0s30.334-2.167 46-4.5c15.667-2.333 34.167-6.333 55.5-12 21.334-5.667 40.934-12.4 58.801-20.2 17.8-7.866 30.466-13.733 38-17.6 7.466-3.8 18.866-10.867 34.199-21.2l23-15.5.2-.3.3-.2.301-.2.199-.3.2-.3.3-.2.301-.2.199-.3 1-.3 1-.2.2-1 .3-1 .301-.2.199-.3-8-.5c-5.333-.333-10.5-.667-15.5-1s-12.833-1.833-23.5-4.5c-10.666-2.667-22.166-6.667-34.5-12-12.333-5.333-24.333-11.667-36-19-11.666-7.333-20.1-13.434-25.3-18.3-5.133-4.801-11.8-11.6-20-20.4-8.133-8.866-15.2-17.967-21.2-27.3s-11.733-20.101-17.199-32.3L124.5 551l-.5-1.5-.5-1.5-.3-1-.2-1 1.5.2 1.5.3 11 1.5c7.334 1 18.834 1.333 34.5 1 15.667-.333 26.5-1 32.5-2s9.667-1.667 11-2l2-.5 2.5-.5 2.5-.5.2-.3.3-.2.301-.2.199-.3-2-.5-2-.5-2-.5-2-.5-2-.5c-1.333-.333-3.666-1-7-2-3.333-1-12.333-4.667-27-11-14.666-6.333-26.333-12.5-35-18.5a241.7 241.7 0 0 1-24.8-19.7c-7.8-7.2-16.366-16.467-25.7-27.8-9.333-11.333-17.666-24.5-25-39.5-7.333-15-12.833-29.333-16.5-43a232.143 232.143 0 0 1-7.199-41.5L43 316l1 .2 1 .3 1 .5 1 .5 1 .5 1 .5 15.5 7c10.334 4.667 23.167 8.667 38.5 12 15.334 3.333 24.5 5.167 27.5 5.5l4.5.5h9l-.199-.3-.301-.2-.3-.2-.2-.3-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3-.301-.2-.3-.2-.2-.3-1-.5-1-.5-.199-.3c-.2-.134-3.067-2.267-8.601-6.4-5.467-4.2-11.2-9.633-17.2-16.3s-12-13.667-18-21A162.158 162.158 0 0 1 77 271c-4.666-8.333-9.6-18.934-14.8-31.8-5.133-12.8-9.033-25.7-11.7-38.7-2.666-13-4.166-25.833-4.5-38.5-.333-12.667 0-23.5 1-32.5s3-19.167 6-30.5 7.334-23.333 13-36l8.5-19 .5-1.5.5-1.5.301-.2.199-.3.2-.3.3-.2.301.2.199.3.2.3.3.2.301.2.199.3.2.3.3.2.5 1 .5 1 .301.2.199.3 13.5 15c9 10 19.667 21.167 32 33.5 12.334 12.333 19.167 18.733 20.5 19.2 1.334.533 3 2.066 5 4.6 2 2.467 8.667 8.367 20 17.7 11.334 9.333 26.167 20.167 44.5 32.5 18.334 12.333 38.667 24.5 61 36.5 22.334 12 46.334 22.833 72 32.5 25.667 9.667 43.667 16 54 19 10.334 3 28 6.833 53 11.5s43.834 7.667 56.5 9c12.667 1.333 21.334 2.1 26 2.3l7 .2-.199-1.5-.301-1.5-2-12.5c-1.333-8.333-2-20-2-35s1.167-28.833 3.5-41.5c2.334-12.667 5.834-25.5 10.5-38.5 4.667-13 9.234-23.434 13.7-31.3 4.534-7.8 10.467-16.7 17.8-26.7 7.334-10 16.834-20.333 28.5-31 11.667-10.667 25-20.167 40-28.5s28.834-14.667 41.5-19c12.667-4.333 23.334-7.167 32-8.5 8.667-1.333 13-2.1 13-2.3z"
                                fill="#5da8dc"
                                stroke="#5da8dc"
                                strokeWidth=".5"
                            />
                        </svg>
                    </a>
                    <a href="#" title="LinkedIn">
                        <span className="sr-only">LinkedIn</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="2500"
                            height="2500"
                            viewBox="7.025 7.025 497.951 497.95"
                            className="w-5 h-5"
                            aria-hidden="true"
                        >
                            <linearGradient
                                id="a"
                                gradientUnits="userSpaceOnUse"
                                x1="-974.482"
                                y1="1306.773"
                                x2="-622.378"
                                y2="1658.877"
                                gradientTransform="translate(1054.43 -1226.825)"
                            >
                                <stop offset="0" stopColor="#2489be" />
                                <stop offset="1" stopColor="#0575b3" />
                            </linearGradient>
                            <path
                                d="M256 7.025C118.494 7.025 7.025 118.494 7.025 256S118.494 504.975 256 504.975 504.976 393.506 504.976 256C504.975 118.494 393.504 7.025 256 7.025zm-66.427 369.343h-54.665V199.761h54.665v176.607zM161.98 176.633c-17.853 0-32.326-14.591-32.326-32.587 0-17.998 14.475-32.588 32.326-32.588s32.324 14.59 32.324 32.588c.001 17.997-14.472 32.587-32.324 32.587zm232.45 199.735h-54.4v-92.704c0-25.426-9.658-39.619-29.763-39.619-21.881 0-33.312 14.782-33.312 39.619v92.704h-52.43V199.761h52.43v23.786s15.771-29.173 53.219-29.173c37.449 0 64.257 22.866 64.257 70.169l-.001 111.825z"
                                fill="url(#a)"
                            />
                        </svg>
                    </a>
                    <a href="#" title="Instagram">
                        <span className="sr-only">Instagram</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2500 2500"
                            width="2500"
                            height="2500"
                            className="w-5 h-5"
                            aria-hidden="true"
                        >
                            <defs>
                                <radialGradient
                                    id="0"
                                    cx="332.14"
                                    cy="2511.81"
                                    r="3263.54"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop offset=".09" stopColor="#fa8f21" />
                                    <stop offset=".78" stopColor="#d82d7e" />
                                </radialGradient>
                                <radialGradient
                                    id="1"
                                    cx="1516.14"
                                    cy="2623.81"
                                    r="2572.12"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop
                                        offset=".64"
                                        stopColor="#8c3aaa"
                                        stopOpacity="0"
                                    />
                                    <stop offset="1" stopColor="#8c3aaa" />
                                </radialGradient>
                            </defs>
                            <path
                                d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                                fill="url(#0)"
                            />
                            <path
                                d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57"
                                fill="url(#1)"
                            />
                        </svg>
                    </a>
                    <a href="#" title="Facebook">
                        <span className="sr-only">Facebook</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1298"
                            height="2500"
                            viewBox="88.428 12.828 107.543 207.085"
                            className="w-5 h-5"
                            aria-hidden="true"
                        >
                            <path
                                d="M158.232 219.912v-94.461h31.707l4.747-36.813h-36.454V65.134c0-10.658 2.96-17.922 18.245-17.922l19.494-.009V14.278c-3.373-.447-14.944-1.449-28.406-1.449-28.106 0-47.348 17.155-47.348 48.661v27.149H88.428v36.813h31.788v94.461l38.016-.001z"
                                fill="#3c5a9a"
                            />
                        </svg>
                    </a>
                </div>
            </footer>
        </>
    );
};

export default PaginaWelcome;
