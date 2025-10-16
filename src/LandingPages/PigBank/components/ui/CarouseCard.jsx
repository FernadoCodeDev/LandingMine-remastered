import React, { useState } from "react";
import Modal from "./Modal";

const packages = [
  {
    id: 1,
    title: "Pig Start",
    image: "/Image/PigBank/CardGreen.webp",
    text: "Tu primer paso al mundo financiero. Ideal para quienes inician, con límites moderados y control total desde la app. Perfecta para aprender a manejar una tarjeta sin complicaciones.",
    Cashback: "3%",
    Profitability: "3%",
  },
  {
    id: 2,
    title: "Pig Clásica",
     image: "/Image/PigBank/CardPink.webp",
    text: "Una tarjeta para tu día a día. Más beneficios, más libertad y la confianza de tener una compañera segura y versátil para tus compras personales.",
    Cashback: "5%",
    Profitability: "5%",
  },
  {
    id: 3,
    title: "Pig Pro",
     image: "/Image/PigBank/CardBlack.webp",
    text: "Hecha para emprendedores. Disfruta de un mayor límite de crédito, herramientas para gestionar tus gastos y una rentabilidad especial pensada para impulsar tus proyectos.",
    Cashback: "10%",
    Profitability: "10%",
  },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
  };

  const handleRight = () => {
    setCurrentIndex((prev) => (prev + 1) % packages.length);
  };

  const getVisiblePackages = () => {
    const prevIndex = (currentIndex - 1 + packages.length) % packages.length;
    const nextIndex = (currentIndex + 1) % packages.length;
    return [packages[prevIndex], packages[currentIndex], packages[nextIndex]];
  };

  return (
    <div className="w-full py-6 mx-auto">
      <div className="p-4 grid grid-cols-2 m-auto items-center justify-center mb-4 max-w-[40rem]">
        <button
          onClick={handleLeft}
          className="p-2 transition-all duration-700 ease-out border border-rose-600 rounded-l-2xl hover:bg-rose-800"
        >
          <svg
            className="w-12 h-auto m-auto rotate-180"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
        <button
          onClick={handleRight}
          className="p-2 transition-all duration-700 ease-out border border-rose-600 rounded-r-2xl hover:bg-rose-800"
        >
          <svg
            className="w-12 h-auto m-auto"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clipRule="evenodd"
              fillRule="evenodd"
              d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </button>
      </div>

      <div className="flex flex-row items-center justify-center gap-4 p-4">
        {getVisiblePackages().map((pkg, i) => {
          const isSelected = i === 1;
          const positionClass = isSelected
            ? "scale-100 opacity-100 z-10 "
            : "scale-90 opacity-50 z-0 hidden md:block";

          return (
            <div
              key={pkg.id}
              className={`${positionClass} rounded-2xl flex flex-col  bg-slate-200  p-4 shadow text-center w-full`}
            >
              <h1 className="mb-4 text-lg font-bold text-black md:text-xl">
                {pkg.title}
              </h1>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-auto mb-4 rounded-3xl"
              />

              <button
                className={`transition-all mb-4 duration-700 ease-out w-full font-semibold text-lg lg:text-xl p-2 text-white bg-emerald-600 rounded-2xl ${
                  isSelected
                    ? "hover:bg-emerald-800 cursor-pointer"
                    : "cursor-default"
                }`}
                disabled={!isSelected}
                onClick={() => isSelected && setSelectedPackage(pkg)}
              >
                MÁS INFORMACIÓN
              </button>
            </div>
          );
        })}
      </div>

      {selectedPackage && (
        <Modal
          data={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
}