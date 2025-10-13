import { useState, useEffect } from "react";
import Modal from "../components/ui/Modal";
import { pizzas } from "../components/ui/Modal";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedPizza, setSelectedPizza] = useState(null);

  const handleClick = (pizza) => {
    setSelectedPizza(pizza);
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="grid grid-cols-2 gap-4 p-2 md:grid-cols-3 xl:grid-cols-4">
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          onClick={() => handleClick(pizza)}
          className="flex flex-col h-full text-black transition duration-300 cursor-pointer dark:text-white hover:shadow-xl"
        >
          <img
            src={pizza.image}
            alt={pizza.name}
            className="w-full h-auto p-2"
          />
          <div className="flex flex-col gap-2 px-2 py-4">
            <h2 className="text-lg font-bold text-center sm:text-2xl">{pizza.name}</h2>
            <p className="text-lg text-center sm:text-xl">
              {pizza.price}
            </p>

            <button className="p-2 font-bold text-white bg-red-500 rounded-xl">
              Seleccionar opciones
            </button>
          </div>
        </div>
      ))}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pizza={SelectedPizza}
      />
    </div>
  );
}

export default Menu;