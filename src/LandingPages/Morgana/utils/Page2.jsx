import React from "react";
import TypeOfCar from "../assets/svg/typeOfCar"

export default function Page2() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3" id="page2">

      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/MercedesAMGGT.webp"
          alt="img"
          className="object-cover w-full h-full"
        />

        <div
          className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-slate-600"
        >
          <h2 className="text-base font-bold text-white md:text-xl">Rentar</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-4 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">Mercedes AMG GT</h1>

          <div className="flex flex-row gap-2 text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$110</span> / día</h1>
        </div>
      </div>

      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/Porsche911GT3.webp"
          alt="img"
          className="object-cover w-full h-full"
        />

        <div
          className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-slate-600"
        >
          <h2 className="text-base font-bold text-white md:text-xl">Rentar</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-2 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">Porsche 911 GT3</h1>

          <div className="flex flex-row gap-2 text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Manual</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$130</span> / día</h1>
        </div>
      </div>

      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/SEATIbiza.webp"
          alt="img"
          className="object-cover w-full h-full"
        />

        <div
          className="absolute top-0 left-0 z-10 p-2 rounded-br-lg bg-slate-600"
        >
          <h2 className="text-base font-bold text-white md:text-xl">Rentar</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-2 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">SEAT Ibiza</h1>

          <div className="flex flex-row text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Semiautomático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$85</span> / día</h1>
        </div>
      </div>

    </div>

  )
}