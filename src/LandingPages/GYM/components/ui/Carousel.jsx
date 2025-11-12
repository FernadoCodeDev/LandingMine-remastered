import React, { useState } from "react";

const packages = [
    {
        id: 1,
        title: "VIP Mensual",
        price: "$180/Mes",
        image: "/Image/GYM/ImgTime1.webp",
        details: [
            "Acceso Iliminitado",
            "Área de baños y duchas",
            "Lockers",
            "Acceso con 3 invitados al mes",
            "Área VIP",
            "Evaluación Nutricional",
            "Camiseta Deportiva Gratuita",
            "Inscripción sin costo",
        ],
    },
    {
        id: 2,
        title: "VIP Anual",
        price: "$130/Mes",
        image: "/Image/GYM/ImgTime2.webp",

        details: [
            "Acceso Iliminitado",
            "Área de baños y duchas",
            "Lockers",
            "Acceso con 3 invitados al mes",
            "Área VIP",
            "Evaluación Nutricional",
            "Camiseta Deportiva Gratuita",
            "Inscripción sin costo",
        ],
    },
    {
        id: 3,
        title: "Básica",
        price: "$145/Mes",
        image: "/Image/GYM/ImgTime3.webp",
        details: [
           "Acceso Iliminitado",
            "Área de baños y duchas",
            "Lockers",
        ],
    },
];

export default function Slider() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
    };

    const handleRight = () => {
        setCurrentIndex((prev) => (prev + 1) % packages.length);
    };

    return (
        <div className="w-full mx-auto">
            <div className="p-4 grid grid-cols-2 m-auto items-center justify-center mb-4 max-w-[40rem]">
                <button
                    onClick={handleLeft}
                    className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-l-2xl hover:bg-yellow-400"
                >
                    <svg
                        class="w-12 h-auto rotate-180 m-auto "
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentcolor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </button>
                <button
                    onClick={handleRight}
                    className="p-2 transition-all duration-700 ease-out border border-yellow-400 rounded-r-2xl hover:bg-yellow-400"
                >
                    <svg
                        class="w-12 h-auto m-auto"
                        data-slot="icon"
                        aria-hidden="true"
                        fill="currentcolor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clip-rule="evenodd"
                            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                            fill-rule="evenodd"
                        ></path>
                    </svg>
                </button>
            </div>

            <div className="grid items-start justify-start grid-cols-1 gap-4 md:grid-cols-3">
                {packages.map((pkg, i) => {
                    const position =
                        i === currentIndex
                            ? "center"
                            : i === (currentIndex - 1 + packages.length) % packages.length
                                ? "left"
                                : i === (currentIndex + 1) % packages.length
                                    ? "right"
                                    : "hidden";

                    if (position === "hidden") return null;

                    return (
                        <div
                            key={pkg.id}
                            className={`transition-all duration-700  ease-in-out ${position === "center"
                                ? "opacity-100 scale-100"
                                : "opacity-20 scale-90 hidden md:flex flex-col justify-between items-center  "
                                } flex flex-col justify-between items-center  h-full bg-slate-200 dark:bg-slate-900 p-4 rounded-xl shadow text-center`}
                        >
                            <h1 className="mb-4 text-lg font-bold md:text-xl">{pkg.title}</h1>
                            <img
                                src={pkg.image}
                                alt={pkg.title}
                                className="w-40 h-auto p-2 mx-auto mb-4"
                            />
                            <h2 className="mb-4 text-lg font-bold md:text-xl">{pkg.price}</h2>
                            <div className="mb-4">
                                {pkg.details.map((d, idx) => (
                                    <p key={idx} className="text-start">
                                        {d}
                                    </p>
                                ))}
                            </div>
                            <button
                                className={`transition-all mb-4 duration-700 ease-out w-full font-semibold text-lg lg:text-xl p-4 text-black bg-yellow-300 rounded-xl
                    ${position === "center"
                                        ? "hover:bg-yellow-500 cursor-pointer"
                                        : "cursor-default"

                                    /* Prevents hovering on unselected items. Since only one should be 
                                    selected, it is checked if it is selected and if so, add the hover, 
                                    otherwise add cursor-default */
                                    }
                    `}
                                disabled={position !== "center"}
                            >
                                Inscribirse
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}