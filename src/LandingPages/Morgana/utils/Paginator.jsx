import { useState } from "react";

export const textButton = [
  {
    id: 1,
    text: "Eléctricos",
  },
  {
    id: 2,
    text: "Deportivos",
  },
  {
    id: 3,
    text: "SUV",
  },
  {
    id: 4,
    text: "Compactos Urbanos",
  },
];

export default function Paginator({ pages }) {
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
                ? "bg-slate-600 border border-slate-600  text-slate-100"
                : "bg-transparent border border-slate-600")
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