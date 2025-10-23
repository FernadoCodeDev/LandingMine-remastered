import React from "react";

export default function Page1() {
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
          <h2 className="text-base font-bold text-white md:text-xl">Lorem</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-4 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">Lorem Ipsum</h1>

          <div className="flex flex-row gap-2 text-base">
            <div className="">SVG</div>

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg font-bold">$70 / day</h1>
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
          <h2 className="text-base font-bold text-white md:text-xl">Lorem</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-4 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">Lorem Ipsum</h1>

          <div className="flex flex-row gap-2 text-base">
            <div className="">SVG</div>

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg font-bold">$70 / day</h1>
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
          <h2 className="text-base font-bold text-white md:text-xl">Lorem</h2>
        </div>

        <div
          className="flex flex-col items-start justify-start gap-4 p-4 shadow-lg"
        >
          <h1 className="text-lg font-bold">Lorem Ipsum</h1>

          <div className="flex flex-row gap-2 text-base">
            <div className="">SVG</div>

            <p className="">Automático</p>
          </div>

          <p className="text-base">Desde</p>
          <h1 className="text-lg font-bold">$70 / day</h1>
        </div>
      </div>

    </div>

  )
}