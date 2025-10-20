import { useState } from "react";

export const textButton = [
  {
    id: 1,
    text: "Residencias",
  },
  {
    id: 2,
    text: "Departamentos",
  },
  {
    id: 3,
    text: "Edificios",
  },
  {
    id: 4,
    text: "Comercios",
  },
];

export default function Paginator ({ pages }) {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div id="Paginator" className="flex flex-col gap-4">
      <nav className="w-full grid grid-cols-1 md:grid-cols-4 max-w-[80rem]">
        {textButton.map((item) => (
          <button
            key={item.id}
            className={
              `w-full p-2 font-bold transition-all duration-700 ease-out border  ` +
              (currentStep === item.id
                ? "text-white bg-cyan-600 border border-cyan-600"
                : "bg-transparent border-cyan-600 border")
            }
            type="button"
            onClick={() => setCurrentStep(item.id)}
          >
            {item.text}
          </button>
        ))}
      </nav>

      <div>
        {pages.map((PageComponent, index) => (
          <div
            key={index}
            className={currentStep === index + 1 ? "block" : "hidden"}
          >
            <PageComponent />
          </div>
        ))}
      </div>
    </div>
  );
};