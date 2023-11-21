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
        <div className="container relative">
            <div id="hero" className="p-0 relative">
                <header className="absolute w-full top-0 left-0 bg-black bg-opacity-60 text-white py-4 z-10">
                    <div className="container mx-auto relative">
                        <nav className="max-w-950 mx-auto relative">
                            <ul className="flex items-center justify-around">
                                <li>
                                    <a
                                        href="#"
                                        className="text-white text-sm uppercase font-semibold"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-white text-sm uppercase font-semibold"
                                    >
                                        Classes
                                    </a>
                                </li>
                                <li id="header-logo" className="top-gym-logo">
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
                                        href="#"
                                        className="text-white text-sm uppercase font-semibold"
                                    >
                                        Instructors
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#"
                                        className="text-white text-sm uppercase font-semibold"
                                    >
                                        Contact
                                    </a>
                                </li>
                                <li>
                                    <button id="search" className="text-white">
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
                                Amazing Setting
                            </h4>
                            <p className="mt-2">
                                Pellentesque dictum nisl in nibh dictum volutpat
                                nec a quam. Vivamus suscipit nisl quis nulla
                                pretium, vitae ornare leo.
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
                                Best Trainers
                            </h4>
                            <p className="mt-2">
                                Pellentesque dictum nisl in nibh dictum volutpat
                                nec a quam. Vivamus suscipit nisl quis nulla
                                pretium, vitae ornare leo.
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
                                Diet Plans
                            </h4>
                            <p className="mt-2">
                                Pellentesque dictum nisl in nibh dictum volutpat
                                nec a quam. Vivamus suscipit nisl quis nulla
                                pretium, vitae ornare leo.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div id="services" className="bg-gray-800 py-16">
                <div className="container mx-auto mb-16">
                    <h3 className="text-white text-2xl mb-6 ps-5">Services</h3>
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
                                    Pellentesque dictum nisl in nibh dictum
                                    volutpat nec a quam. Vivamus suscipit nisl
                                    quis nulla pretium.
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
                                    Free Lifting
                                </h4>
                                <p className="text-gray-700">
                                    Pellentesque dictum nisl in nibh dictum
                                    volutpat nec a quam. Vivamus suscipit nisl
                                    quis nulla pretium.
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
                                <h4 className="text-xl font-semibold">Yoga</h4>
                                <p className="text-gray-700">
                                    Pellentesque dictum nisl in nibh dictum
                                    volutpat nec a quam. Vivamus suscipit nisl
                                    quis nulla pretium.
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
                                    Pellentesque dictum nisl in nibh dictum
                                    volutpat nec a quam. Vivamus suscipit nisl
                                    quis nulla pretium.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-700">
                        See All Services
                    </button>
                </div>
            </div>

            {/* Schedule Services Section */}
            <div id="schedule-services" className="">
                <div className="flex flex-wrap container pt-3 justify-around">
                    <div className="w-full sm:w-1/2 lg:w-1/4 mb-4">
                        <div className="border border-gray-300 p-8 rounded-lg h-[395px]">
                            <strong className="block text-gray-800 text-xs uppercase opacity-60 tracking-wider">
                                NEXT
                            </strong>
                            <h4 className="text-2xl font-semibold mb-4">
                                Upcoming Classes
                            </h4>
                            <table className="w-full">
                                <tr>
                                    <td>
                                        <img
                                            src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                            alt="Stopwatch"
                                        />
                                    </td>
                                    <td>Gym Fitness</td>
                                    <td>11:00 - 12:00</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img
                                            src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                            alt="Stopwatch"
                                        />
                                    </td>
                                    <td>Pilates</td>
                                    <td>12:00 - 1:00</td>
                                </tr>

                                <tr>
                                    <td>
                                        <img
                                            src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                            alt="Stopwatch"
                                        />
                                    </td>
                                    <td>Spinning</td>
                                    <td>1:00 - 2:00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                            alt="Stopwatch"
                                        />
                                    </td>
                                    <td>Yoga</td>
                                    <td>2:00 - 3:00</td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://onclickwebdesign.com/wp-content/uploads/stopwatch.png"
                                            alt="Stopwatch"
                                        />
                                    </td>
                                    <td>Zumba</td>
                                    <td>3:00 - 4:00</td>
                                </tr>
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
                                        NEXT
                                    </strong>
                                    <h4 className="text-2xl font-semibold mb-2">
                                        Membership Deals
                                    </h4>
                                    <h2 className="text-pink-500 text-5xl font-bold leading-tight mb-2">
                                        25%{" "}
                                        <span className="text-xl">
                                            Discount
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
                                BECOME A
                            </strong>
                            <h4 className="text-2xl font-semibold text-white mb-4">
                                Personal Trainer
                            </h4>
                            <p className="text-white mb-4">
                                Pellentesque dictum nisl in nibh dictum volutpat
                                nec a quam. Vivamus suscipit nisl quis nulla
                                pretium. Pellentesque dictum nisl in nibh dictum
                                volutpat nec a quam. Vivamus suscipit nisl quis
                                nulla pretium.
                            </p>
                            <button className="bg-pink-500 text-white px-4 py-2 rounded-lg">
                                Sign Up Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaginaWelcome;
