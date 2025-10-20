import React from "react";
import Location from "../assets/svg/Location";
import Floors from "../assets/svg/floors";
import SquareMeasument from "../assets/svg/SquareMeasument";
import Currency from "../assets/svg/Currency";


export default function Page3() {
    return(
        <div 
        id="page3"
        className="grid grid-cols-1 m-auto max-w-[80rem] md:grid-cols-3 gap-4">
        <div className="relative bg-slate-50 dark:bg-zinc-900">
          <img src="/Image/DreamHouse/imgN15.webp" alt="imgN15" className="w-full h-auto " />
          <div className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-cyan-600">
            <h2 className="text-base font-bold text-white md:text-xl">Venta</h2>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl ">
            Edificio Central Park
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Distrito Financiero Evergreen</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Floors width="20" />
                <p className="font-bold ">4</p>
              </div>

              <div className="flex flex-row gap-2">
                <SquareMeasument width="20" />
                <p className="font-bold "> 423.97 m²</p>
              </div>

              <div className="flex flex-row">
                <Currency width="20" />
                <p className="font-bold ">1,500,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold transition-all duration-700 ease-out text-cyan-400 hover:text-cyan-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative bg-slate-50 dark:bg-zinc-900">
          <img src="/Image/DreamHouse/imgN16.webp" alt="imgN16" className="w-full h-auto" />
          <div className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-cyan-600">
            <h2 className="text-base font-bold text-white md:text-xl">Venta</h2>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl dark:text-white">
              Torre Business One
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Boulevard Empresarial Prados Altos del Bosque</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Floors width="20" />
                <p className="font-bold ">5</p>
              </div>

              <div className="flex flex-row gap-2">
                <SquareMeasument width="20" />
                <p className="font-bold "> 1,300 m²</p>
              </div>

              <div className="flex flex-row">
                <Currency width="20" />
                <p className="font-bold ">2,500,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold transition-all duration-700 ease-out text-cyan-400 hover:text-cyan-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="relative bg-slate-50 dark:bg-zinc-900">
          <img src="/Image/DreamHouse/imgN17.webp" alt="imgN17" className="w-full h-auto" />
          <div className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-cyan-600">
            <h2 className="text-base font-bold text-white md:text-xl">Venta</h2>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold md:text-2xl dark:text-white">
              Edificio Horizon
            </h2>
            <div className="flex flex-row gap-2 mt-4 ">
              <Location width="20" />
              <p className="">Zona Ejecutiva Sol</p>
            </div>

            <div className="flex flex-row justify-between gap-2 mt-4 ">
              <div className="flex flex-row gap-2">
                <Floors width="20" />
                <p className="font-bold ">6</p>
              </div>

              <div className="flex flex-row gap-2">
                <SquareMeasument width="20" />
                <p className="font-bold "> 3,920 m²</p>
              </div>

              <div className="flex flex-row">
                <Currency width="20" />
                <p className="font-bold ">3,000,000</p>
              </div>
            </div>

            <button className="flex flex-row m-auto mt-4 font-bold transition-all duration-700 ease-out text-cyan-400 hover:text-cyan-600 ">
              Ver detalles
              <svg
                class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                data-slot="icon"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    )
}