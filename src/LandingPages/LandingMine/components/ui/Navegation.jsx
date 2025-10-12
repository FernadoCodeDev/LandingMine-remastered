import React, { useState, useEffect } from "react";
import DarkMode from "../../assets/svg/DarkMode";
import MobileMenu from "../../assets/svg/MobileMenu";
import Close from "../../assets/svg/Close";
import Home from "../../assets/svg/Home";
import Collection from "../../assets/svg/Collection";
import Pick from "../../assets/svg/Pick";



import { Trans, useTranslation } from "react-i18next";

const Navegation = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false); // Small Screen Check

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        if (storedMode) {
            setDarkMode(storedMode === "true");
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setDarkMode(prefersDark);
        }
    }, []);

    useEffect(() => {
        const html = document.documentElement;
        if (darkMode) {
            html.classList.add("dark");
            localStorage.setItem("darkMode", "true");
        } else {
            html.classList.remove("dark");
            localStorage.setItem("darkMode", "false");
        }
    }, [darkMode]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen); // Menu Status
    };

    return (
        <div className="flex flex-row ">
            {/*Menu sizes less than 720 px */}
            {isMobile && (
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-neutral-950 transition-transform duration-500 ease-in-out transform z-50 ${menuOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    {/* Close menu */}
                    <div
                        onClick={toggleMenu}
                    >
                        <Close className="absolute w-20 h-20 text-white cursor-pointer top-5 right-5" />

                    </div>

                    <nav className="p-5 text-white">
                        <div className="flex flex-row items-center justify-between mb-4">
                            <div
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <DarkMode className="object-contain w-20 h-auto text-white cursor-pointer" />

                            </div>
                        </div>
                        <div className="flex flex-col justify-between m-2 ">

                            <a href="/" className="w-full text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Home className="w-4 h-4 text-white" />

                                    Inicio
                                </button>
                            </a>

                            <a href="/collection" className="w-full text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Collection className="w-4 h-4 text-white" />

                                    Coleción
                                </button>
                            </a>

                            <a href="/about" className="text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Pick className="w-4 h-4 text-white" />

                                     Sobre LandingMine
                                </button>
                            </a>

                        </div>
                    </nav>

                    <div className="absolute w-full p-4 text-center text-white bottom-8 ">
                        <p>
                            Puedes encontrar este y más trabajos mios en mí
                            <a
                                href="https://fercode.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-white transition duration-500 ease-in-out hover:text-orange-300"
                            > página personal</a>
                        </p>
                    </div>
                </div>
            )}

            {/* menu larger than 72px*/}
            {!isMobile && (
                <nav className="flex flex-col justify-between w-64 h-auto text-white bg-neutral-950">
                    <div className="">

                        <div className="flex flex-row items-center m-5">
                            <div
                                onClick={() => setDarkMode(!darkMode)}
                            >
                                <DarkMode className="object-contain w-20 h-auto text-white cursor-pointer" />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between m-2 ">
                            <a href="/" className="text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Home className="w-4 h-4 text-white" />

                                    Inicio
                                </button>
                            </a>

                            <a href="/collection" className="text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Collection className="w-4 h-4 text-white" />

                                    Coleción
                                </button>
                            </a>

                            <a href="/about" className="text-base md:text-lg">

                                <button className="flex flex-row items-center w-full gap-2 p-2 rounded hover:bg-neutral-800">
                                    <Pick className="w-4 h-4 text-white" />

                                    Sobre LandingMine
                                </button>
                            </a>

                        </div>

                    </div>

                    <div className="w-full p-4 text-center text-white bottom-8">
                        <p>
                            Puedes encontrar este y más trabajos mios en mí
                            <a
                                href="https://fercode.netlify.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-white transition duration-500 ease-in-out hover:text-orange-300"
                            > página personal</a>
                        </p>
                    </div>
                </nav>
            )}

            {/* Button to open menu on screens smaller than 768 px */}
            {/* menuOpen makes sure that when the menu is opened the image is hidden */}
            {isMobile && !menuOpen && (
                <div

                    onClick={toggleMenu}
                >
                    <MobileMenu className="absolute z-10 w-16 h-auto text-white cursor-pointer top-5 left-5 "
                    />
                </div>
            )}
        </div>
    );
};

export default Navegation;