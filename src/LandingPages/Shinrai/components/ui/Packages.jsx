import { useState } from "react";

const fighters = [
  {
    id: 1,
    name: "Primera Clase Gratuita",
    image: "/Image/Shinrai/img29.webp",
    price: "Gratis",
    info: "Vive tu primera experiencia en Shinrai sin costo y descubre cómo el Karate puede ayudarte a fortalecer tu mente y cuerpo. Durante esta clase aprenderás los fundamentos básicos, posturas, respeto y autocontrol, guiado por nuestros instructores certificados. Una oportunidad perfecta para conocer el dojo, el ambiente y sentir el espíritu del Karate-Do.",
  },
  {
    id: 2,
    name: "Entrenamiento Básico",
    image: "/Image/Shinrai/img30.webp",
    price: "$250 / mes",
    info: "Ideal para quienes desean aprender Karate como disciplina personal, sin enfocarse en la competencia. En este programa te formarás en técnica, equilibrio, defensa personal y fortalecimiento físico, con clases adaptadas a tu nivel y ritmo. Perfecto para quienes buscan mejorar su bienestar, confianza y concentración a través de la práctica constante.",
  },
  {
    id: 3,
    name: "Competitivo Nacional",
    image: "/Image/Shinrai/img31.webp",
    price: "$300 / mes",
    info: "Diseñado para alumnos que desean representar a Shinrai en torneos nacionales. Incluye preparación técnica avanzada, estrategias de combate y desarrollo mental para afrontar competencias con disciplina y respeto. Contarás con entrenadores especializados y seguimiento personalizado para mejorar tu rendimiento y espíritu deportivo.",
  },
  {
    id: 4,
    name: "Competitivo Internacional",
    image: "/Image/Shinrai/img32.webp",
    price: "$400 / mes",
    info: "El programa más completo de Shinrai, pensado para karatekas que buscan competir a nivel nacional e internacional. Recibirás entrenamiento de alto rendimiento, acompañamiento técnico especializado y acceso a eventos exclusivos. Este plan impulsa la excelencia, el liderazgo y la confianza para representar el verdadero espíritu de Shinrai más allá de nuestras fronteras.",
  },
];

export default function fightersGrid() {
  const [selected, setSelected] = useState(1);
  const [hovered, setHovered] = useState(null);

  const activeId = hovered || selected;
  const activeFighter = fighters.find((l) => l.id === activeId);

  return (
    <div className="flex flex-col gap-4 m-auto">
      <h1 className="text-3xl font-bold text-center ">
        Nuestros Programas de Entrenamiento
      </h1>

      {/* INFORMATION BOX*/}
      {activeFighter && (
        <div className="grid items-start justify-center grid-cols-1 gap-4 p-4 rounded-lg shadow-lg md:grid-cols-2">
          <img
            src={activeFighter.image}
            alt="alt"
            className="object-contain m-auto w-60 h-60"
          />
          <div className="flex flex-col items-start justify-start gap-4">
            <h2 className="mb-2 text-2xl font-bold">{activeFighter.name}</h2>
            <p className="text-base">{activeFighter.info}</p>
            <p className="text-base">{activeFighter.price}</p>
            <button className="p-2 text-base text-center transition-all duration-700 ease-out rounded-lg text-slate-100 bg-emerald-800">
              Inscribirse 
            </button>
          </div>
        </div>
      )}

      {/* SELECTION PANEL */}
      <div className="grid items-center justify-center grid-cols-2 gap-2 md:grid-cols-4">
        {fighters.map((fighter) => (
          <div
            key={fighter.id}
            onMouseEnter={() => setHovered(fighter.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(fighter.id)}
            className={`cursor-pointer overflow-hidden ${
              selected === fighter.id ? "" : ""
            }`}
          >
            <img
              src={fighter.image}
              alt="alt"
              className="object-contain m-auto w-60 h-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
}