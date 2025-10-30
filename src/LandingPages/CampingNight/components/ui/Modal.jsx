import { useEffect, useState } from "react";
import Close from "../../../SVGGlobal/Close";

const FormModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => setIsOpen(!isOpen);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
    }, [isOpen]);

    useEffect(() => {
        if (!isOpen) {

            import("cally").then(() => {
                const container = document.getElementById("calendar-container");

                container.innerHTML = "";

                const calendarRange = document.createElement("calendar-range");
                calendarRange.setAttribute("months", "1");

                const month1 = document.createElement("calendar-month");
                //const month2 = document.createElement("calendar-month");
                //month2.setAttribute("offset", "2");

                calendarRange.appendChild(month1);
                //calendarRange.appendChild(month2);

                container.appendChild(calendarRange);
            });
        }

    }, [isOpen]);


    return (
        <div className="relative w-full">
            <button
                onClick={toggleModal}
                className="w-full h-auto p-2 font-bold text-white transition-all duration-700 ease-out bg-orange-400 rounded-2xl md:w-1/2 hover:bg-orange-600"
            >
                Acampar en Camping Night
            </button>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-10 flex items-center justify-center p-4 text-black bg-black bg-opacity-30">
                    <div className=" flex flex-col items-center justify-center gap-4 relative w-full max-w-[60rem] p-6 bg-white rounded-2xl shadow-2xl">
                        <button
                            onClick={toggleModal}
                            className="absolute w-20 h-auto top-2 right-4"
                        >
                            <Close />
                        </button>

                        <div className="flex flex-col items-center justify-center w-full gap-4 mt-12">
                            <h2 className="text-2xl font-bold text-orange-600">
                                Formulario de Registro
                            </h2>

                            <div className="flex flex-col w-full space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex flex-col">
                                        <label className="font-bold text-start">
                                            Nombre completo
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Nombre y apellido "
                                            className="p-2 border rounded-md"
                                        />
                                    </div>

                                    <div className="flex flex-col">
                                        <label className="font-bold text-start">
                                            Email de contacto
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Gmail"
                                            className="p-2 border rounded-md"
                                        />
                                    </div>

                                    <div id="calendar-container" className="flex justify-center w-full col-span-2 " />

                                    <div className="flex flex-row items-center justify-between col-span-2 gap-2">
                                        <div className="flex flex-col w-full md:w-1/2">
                                            <h1 className="font-bold text-start">
                                                Tipo de campamento
                                            </h1>
                                            <select className="">
                                                <option>Espacio para tienda</option>
                                                <option>Cabaña rústica</option>
                                                <option>Zona con fogata</option>
                                            </select>
                                        </div>

                                        <div className="hidden md:block md:w-4"></div>

                                        <div className="flex flex-col w-full md:w-1/2">
                                            <h1 className="font-bold text-start">
                                                Servicios adicionales
                                            </h1>
                                            <select className="">
                                                <option>Ninguno</option>
                                                <option>Renta de equipo</option>
                                                <option>Guía turístico</option>
                                                <option>Leña extra</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <button className="flex justify-center w-full h-auto p-2 font-bold text-white transition-all duration-700 ease-out bg-orange-400 rounded-2xl hover:bg-orange-600">
                                    Registarse Ahora
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FormModal;