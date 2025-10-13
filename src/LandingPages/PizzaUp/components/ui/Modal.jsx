import React from "react";
import Close from "../../assets/svg/close";
import LeftHaf from "../../assets/svg/LeftHaf";
import Circle from "../../assets/svg/Circle";
import RightHalf from "../../assets/svg/RightHalf";
import Check from "../../assets/svg/Check";

export const pizzas = [
    {
        id: 1,
        name: "Mediterranean Pizza",
        price: 12,
        description:"Aceite de Oliva, Berenjena, Zucchini, Albahaca, Tomate, Óregano, Queso Parmesano y Mozzarella",
        image: "/Image/PizzaUp/Pizza1.webp",
    },

    {
        id: 2,
        name: "Margherita pizza",
        price: 12,
        description:"tomate, queso mozzarella, albahaca fresca, sal, pimienta negra recién molida y aceite de oliva",
        image: "/Image/PizzaUp/Pizza3.webp",
    },

    {
        id: 3,
        name: "Cheeseburger Pizza ",
        price: 12,
        description:"Salsa de Pizza, Tomate, Cebolla, Carne, Tocino, Pepinillos, Queso Mozzarella",
        image: "/Image/PizzaUp/Pizza4.webp",
    },

    {
        id: 4,
        name: "Double Pepperoni Pizza",
        price: 12,
        description:"Salsa de Pizza, Queso Mozzarella, Peperoni ",
        image: "/Image/PizzaUp/Pizza5.webp",
    },

    {
        id: 5,
        name: "Cheese Love Pizza",
        price: 12,
        description:"Salsa de pizza, Queso Feta, Queso Parmesano, Queso Ricotta. Queso Mozzarella",
        image: "/Image/PizzaUp/Pizza6.webp",
    },
];

export default function Modal({ isOpen, onClose, pizza }) {
    if (!isOpen || !pizza) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 text-center text-black bg-black bg-opacity-60">
            <div className="relative w-full max-w-[60rem] p-4 bg-white rounded-xl">
                <button
                    onClick={onClose}
                    className="absolute w-20 h-auto top-2 right-2 h"
                >
                    <Close />
                </button>

                <div className="grid w-full grid-cols-2 gap-2">
                    <div className="">
                        <img src={pizza.image} alt={pizza.name} className="w-full h-auto md:max-w-96" />
                        <h2 className="mb-2 text-xl font-bold md:text-2xl">{pizza.name}</h2>
                        <p className="text-lg">${pizza.price}</p>

                        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3">

                            <select className="">
                                <option value="" disabled selected> Tamaño</option>
                                <option>Pequeña</option>
                                <option>Mediana</option>
                                <option>Grande</option>
                            </select>

                        </div>
                    </div>

                    <div className="grid items-center justify-center grid-cols-1 gap-4 mt-8">

                        <p className="text-base text-black">{pizza.description}</p>
                      
                        <botton className="p-2 font-bold transition duration-700 ease-out cursor-pointer bg-lime-400 hover:text-white hover:bg-lime-600">
                            Agregar
                        </botton>
                    </div>
                </div>
            </div>
        </div>
    );
}