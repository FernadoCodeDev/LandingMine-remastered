import React from "react";
import Close from "../../assets/svg/Close";

export const Customers = [
  {
    id: 1,
    image: "/Image/MarketingAgency/Cooktopia.webp",
    text: "Gracias a Marketing Agency, Cooktopia Shop logró llevar su catálogo de artículos de cocina al mundo digital. Creamos una tienda online visualmente atractiva y fácil de usar, que permitió a sus clientes explorar y comprar productos desde cualquier lugar.",
  },
  {
    id: 2,
    image: "/Image/MarketingAgency/DreamHouse.webp",
    text: "Marketing Agency ayudó a Dream House a destacar en el mercado inmobiliario con una página web moderna, donde sus propiedades se muestran de manera clara, atractiva y profesional, facilitando el contacto directo con posibles compradores.",
  },

  {
    id: 3,
    image: "/Image/MarketingAgency/GoldTeeth.webp",
    text: "Para Gold Teeth, diseñamos un sitio web confiable y accesible, donde sus servicios odontológicos, citas y testimonios de pacientes se presentan de forma clara, generando confianza y profesionalismo en cada visita digital.",
  },

  {
    id: 4,
    image: "/Image/MarketingAgency/PizzaUp.webp",
    text: "Marketing Agency impulsó a Pizza Up creando una página interactiva con menú online, pedidos rápidos y diseño atractivo. Gracias a esto, la pizzería duplicó su alcance digital y mejoró la experiencia de sus clientes.",
  },

  {
    id: 5,
    image: "/Image/MarketingAgency/GYM.webp",
    text: "Convertimos el GYM en una experiencia digital motivadora, con una web dinámica donde los usuarios pueden ver horarios, rutinas, entrenadores y registrarse fácilmente. Marketing Agency lo ayudó a captar nuevos socios a través de su presencia online.",
  },

  {
    id: 6,
   image: "/Image/MarketingAgency/PigBank.webp",
    text: "Con Pig Bank, desarrollamos una plataforma clara y segura para mostrar sus servicios financieros. Una web pensada para inspirar confianza y facilitar el acceso a información clave para sus clientes.",
  },
];

export default function Cards({ isOpen, onClose, Customer }) {
  if (!isOpen || !Customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center text-black bg-black bg-opacity-60">
      <div className="relative w-full max-w-[60rem] p-2 bg-white rounded-xl">
        <button
          onClick={onClose}
          className="absolute w-20 h-auto top-2 right-2 "
        >
          <Close />
        </button>


        <div className="flex flex-col items-center justify-center w-full gap-4 py-4">
          <img src={Customer.image} alt={Customer.image} className="object-contain rounded w-80 h-80" />

        <div className="w-[80%] h-2 border-t-2 border-gray-800 "></div>

          <p className="text-lg md:text-xl max-w-[50rem]">{Customer.text}</p>
        </div>
      </div>
    </div>
  );
}