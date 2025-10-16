import React from "react";
import Masonry from "react-masonry-css";
import DigitalCard from "../assets/svg/DigitalCard";
import App from "../assets/svg/App";
import InternationalPayment from "../assets/svg/InternationalPayment";
import SmartProtection from "../assets/svg/SmartProtection";
import TotalControl from "../assets/svg/TotalControl";
import Notification from "../assets/svg/Notification";
import Percentage from "../assets/svg/percentage";

const FeatureSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto px-4 py-12 text-white bg-rose-800">
      <div className="grid justify-between grid-cols-1 xl:grid-cols-2 gap-4 m-auto max-w-[100rem]">
        <div className="flex flex-col justify-between text-start md:text-center">

          <div className="flex flex-col gap-4">
            <div className="w-1/2 p-2 rounded-lg r bg-rose-900 md:w-1/3">
              <h1 className="text-lg">INTEGRACIÓN</h1>
            </div>
            <h1 className="m-2 text-xl font-bold md:text-3xl lg:text-5xl xl:text-7xl 2xl:text-8xl">
              Compra donde quieras, paga con confianza
            </h1>
          </div>

          <div className="flex flex-col gap-4">

            <p className="p-2 m-auto text-base md:text-lg max-w-[40rem]">
              Haz que pagar sea tan fácil como enviar un mensaje. Con Pig Bank, conecta, envía y recibe dinero sin fronteras.
            </p>

            <button
              className="p-4 text-base font-bold text-center text-white transition-all duration-700 ease-out rounded-lg md:text-lg bg-emerald-600 hover:bg-emerald-800"
            >
              Explora Pig Bank
            </button>
          </div>

        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5">

          <div className="flex flex-col items-center justify-center col-span-2 gap-4 p-4 text-center text-white bg-rose-900 rounded-xl ">
            <DigitalCard width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Tarjeta Digital Instantáneal</h1>
            <p className="text-base md:text-lg">Activa tu tarjeta virtual al instante y empieza a usarla online sin esperar envíos físicos.</p>
          </div>


          <div className="flex flex-col items-center justify-center gap-4 p-4 text-center text-white bg-rose-900 rounded-xl ">
            <App width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">App Intuitiva y Segura</h1>
            <p className="text-base md:text-lg">Administra tus gastos, transfiere dinero y controla tu saldo desde una sola app.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 p-4 text-center text-white lg:col-span-2 bg-rose-900 rounded-xl ">
            <InternationalPayment width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Pagos sin Fronteras</h1>
            <p className="text-base md:text-lg">Envía y recibe dinero en distintas divisas con total facilidad</p>
          </div>



          <div className="flex flex-col items-center justify-center col-span-2 gap-6 p-4 text-center text-white lg:col-span-1 bg-rose-900 rounded-xl ">
            <SmartProtection width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Protección Inteligente</h1>
            <p className="text-base md:text-lg">Tu dinero está respaldado con encriptación avanzada y monitoreo antifraude 24/7.</p>
          </div>


          <div className="flex flex-col items-center justify-center gap-6 p-4 text-center text-white lg:col-span-2 md:col-span-1 bg-rose-900 rounded-xl ">
            <TotalControl width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Control Total</h1>
            <p className="text-base md:text-lg">Congela, reactiva o gestiona tus tarjetas en tiempo real desde la app.</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 p-4 text-center text-white bg-rose-900 rounded-xl ">
            <Notification width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Notificaciones en Tiempo Real</h1>
            <p className="text-base md:text-lg">Cada movimiento se notifica al instante para mantenerte siempre al tanto.</p>
          </div>


          <div className="flex flex-col items-center justify-center col-span-2 gap-6 p-4 text-center text-white md:col-span-1 bg-rose-900 rounded-xl ">
            <Percentage width="80" height="80" className="object-contain" />
            <h1 className="text-lg font-bold text-white md:text-xl">Cero Comisiones Ocultas</h1>
            <p className="text-base md:text-lg">Sin cargos sorpresa. Solo transparencia y tarifas justas.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;