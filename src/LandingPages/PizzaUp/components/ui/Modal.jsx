import React from "react";
import Close from "../../assets/svg/close";
import LeftHaf from "../../assets/svg/LeftHaf";
import Circle from "../../assets/svg/Circle";
import RightHalf from "../../assets/svg/RightHalf";
import Check from "../../assets/svg/Check";

export const pizzas = [
    {
        id: 1,
        name: "Pizza mediterránea",
        price: "$8 - $16",
        description: "Aceite de Oliva, Berenjena, Zucchini, Albahaca, Tomate, Óregano, Queso Parmesano y Mozzarella",
        image: "/Image/PizzaUp/Pizza1.webp",
    },

    {
        id: 2,
        name: "Pizza BBQ Chicken",
        price: "$8 - $16",
        description: "BBQ, Pollo, Pimientos, Cebolla, Champiñones y Queso Mozzarella",
        image: "/Image/PizzaUp/Pizza2.webp",
    },

    {
        id: 3,
        name: "Pizza margarita",
        price: "$8 - $16",
        description: "Tomate, queso mozzarella, albahaca fresca, sal, pimienta negra recién molida y aceite de oliva",
        image: "/Image/PizzaUp/Pizza3.webp",
    },

    {
        id: 4,
        name: "Pizza Cheeseburger",
        price: "$8 - $16",
        description: "Salsa de Pizza, Tomate, Cebolla, Carne, Tocino, Pepinillos, Queso Mozzarella",
        image: "/Image/PizzaUp/Pizza4.webp",
    },

    {
        id: 5,
        name: "Pizza Doble Pepperoni",
        price: "$8 - $16",
        description: "Salsa de Pizza, Queso Mozzarella, Peperoni ",
        image: "/Image/PizzaUp/Pizza5.webp",
    },

    {
        id: 6,
        name: "Pizza Cheese Love",
        price: "$8 - $16",
        description: "Salsa de pizza, Queso Feta, Queso Parmesano, Queso Ricotta. Queso Mozzarella",
        image: "/Image/PizzaUp/Pizza6.webp",
    },
];

export default function Modal({ isOpen, onClose, pizza }) {
    if (!isOpen || !pizza) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 text-center text-white bg-black bg-opacity-60">
            <div
                className="relative w-full max-w-[60rem] p-4 rounded-xl"
                style={{
                    backgroundImage: `url(/Image/PizzaUp/BackgroundModal.webp)`,
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute z-50 w-20 h-auto top-2 right-2"
                >
                    <Close />
                </button>

                <div className="relative grid w-full grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="">
                        <img src={pizza.image} alt={pizza.name} className="object-contain m-auto w-80 h-80" />

                        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3">
                        <h2 className="mb-2 text-xl font-bold md:text-2xl md:hidden">{pizza.name}</h2>
                            <select className="w-full text-black md:hidden">
                                <option value="" disabled selected> Tamaño</option>
                                <option>Pequeña</option>
                                <option>Mediana</option>
                                <option>Grande</option>
                            </select>

                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-end gap-2 md:mt-8">
                        <h2 className="hidden mb-2 text-xl font-bold md:text-2xl md:block">{pizza.name}</h2>
                            <select className="hidden w-full text-black md:block">
                                <option value="" disabled selected> Tamaño</option>
                                <option>Pequeña</option>
                                <option>Mediana</option>
                                <option>Grande</option>
                            </select>
                        <p className="text-lg">{pizza.price}</p>
                        <p className="text-base text-white">{pizza.description}</p>

                        <botton className="w-full p-2 font-bold transition duration-700 ease-out bg-red-400 cursor-pointer hover:text-white hover:bg-red-600">
                            Agregar
                        </botton>
                    </div>
                </div>
            </div>
        </div>
    );
}