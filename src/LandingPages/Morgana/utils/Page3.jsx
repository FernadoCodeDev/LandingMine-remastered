import React from "react";
import TypeOfCar from "../assets/svg/typeOfCar"


export default function Page3() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3" id="page3">
      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/LandRoverDiscovery.webp"
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
          <h1 className="text-lg font-bold">Land Rover Discovery</h1>

          <div className="flex flex-row gap-2 text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$95</span> / día</h1>
        </div>
      </div>

      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/CadillacEscalade.webp"
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
          <h1 className="text-lg font-bold">Cadillac Escalade</h1>

          <div className="flex flex-row gap-2 text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$120</span> / día</h1>
        </div>
      </div>

      <div className="relative flex flex-col">
        <img
          src="/Image/Morgana/BAICBJ40.webp"
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
          <h1 className="text-lg font-bold">BAIC BJ40</h1>

          <div className="flex flex-row gap-2 text-base">
            <TypeOfCar width="20" height="20" />

            <p className="">Manual</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg "><span className="font-bold">$80</span> / día</h1>
        </div>
      </div>

    </div>

  )
}