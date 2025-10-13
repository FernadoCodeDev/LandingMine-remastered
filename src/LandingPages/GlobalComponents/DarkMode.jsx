import React, { useState, useEffect } from "react";
import DarkModeIcon from "./assets/svg/DarkModeIcon";

const DarkMode = ({
     bgColor = "text-black",
}) => {
    
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const storedMode = localStorage.getItem("darkMode");
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        setDarkMode(storedMode ? storedMode === "true" : prefersDark);
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

    return (

        <div
            onClick={() => setDarkMode(!darkMode)}
        >
            <DarkModeIcon className={`object-contain w-12 h-12 ${bgColor} cursor-pointer`} />

        </div>
    );
};

export default DarkMode;