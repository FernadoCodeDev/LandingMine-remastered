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

    return (
        <div className="relative">
            <button
                onClick={toggleModal}
                className="flex justify-center w-full h-auto p-2 font-bold transition-all duration-700 ease-out rounded-lg bg-rose-600 hover:bg-rose-800 "
            >
                Consultar Sonrisa
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
                            <h2 className="text-2xl font-bold text-rose-600">
                                Agendar Cita Dental
                            </h2>

                            <div className="flex flex-col w-full space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Nombre completo
                                    </label>
                                    <input
                                        type="text"
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Coloque su nombre y apellido"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Correo electrónico
                                    </label>
                                    <input
                                        type="email"
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
                                        placeholder="correo@gmail.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Fecha de la cita
                                    </label>
                                    <input
                                        type="date"
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Motivo de la consulta
                                    </label>
                                    <textarea
                                        rows="3"
                                        className="block w-full p-2 mt-1 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
                                        placeholder="Ej: Dolor de muela, limpieza, revisión..."
                                    ></textarea>
                                </div>

                                <button
                                    className="w-full py-2 font-medium text-white transition-all duration-700 ease-out rounded-lg bg-rose-400 hover:bg-rose-600"
                                >
                                    Reservar cita
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