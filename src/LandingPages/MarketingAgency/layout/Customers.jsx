import { useState, useEffect } from "react";
import Cards from "../components/ui/Cards";
import { Customers } from "../components/ui/Cards";

function CustomersCards() {
  const [isOpen, setIsOpen] = useState(false);
  const [SelectedCustomer, setSelectedCustomer] = useState(null);

  const handleClick = (Customer) => {
    setSelectedCustomer(Customer);
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
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 m-auto p-4 max-w-[80rem]">
      {Customers.map((Customer) => (
        <div 
        key={Customer.id} 
        onClick={() => handleClick(Customer)}
        className="p-2 bg-white shadow-xl rounded-2xl"
        
        >
          <img
            src={Customer.image}
            alt="Project"
            className="object-contain w-40 h-40 m-auto"
          />
        </div>
      ))}
      <Cards
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        Customer={SelectedCustomer}
      />
    </div>
  );
}

export default CustomersCards;