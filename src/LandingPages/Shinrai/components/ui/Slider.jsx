import React, { useEffect, useState } from "react";

const cards = [
  { id: 1, image: "/Image/Shinrai/img1.webp" },
  { id: 2, image: "/Image/Shinrai/img2.webp" },
  { id: 3, image: "/Image/Shinrai/img3.webp" },
  { id: 4, image: "/Image/Shinrai/img4.webp" },
  { id: 5, image: "/Image/Shinrai/img5.webp" },
  { id: 6, image: "/Image/Shinrai/img6.webp" },
  { id: 7, image: "/Image/Shinrai/img7.webp" },
  { id: 8, image: "/Image/Shinrai/img8.webp" },
];

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    cards.forEach((card) => {
      const img = new Image();
      img.src = card.image;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cards.length);
        setAnimate(false);
      }, 600); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const leftIndex = index;
  const rightIndex = (index + 1) % cards.length;

  return (
    <div className="w-full py-8 overflow-hidden">
      <div className="relative flex items-center justify-center w-full">
        <div className="grid items-center justify-center w-full grid-cols-3 gap-4 h-60 md:h-auto">

          <div className="relative flex items-center justify-end w-full h-full overflow-hidden">
            <img
              key={cards[leftIndex].id}
              src={cards[leftIndex].image}
              alt="left"
              className={`object-contain w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 absolute transition-transform duration-700 ease-in-out ${
                animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
              }`}
            />
            <img
              key={cards[(leftIndex + 1) % cards.length].id}
              src={cards[(leftIndex + 1) % cards.length].image}
              alt="left-next"
              className={`object-contain w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 absolute transition-transform duration-700 ease-in-out ${
                animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            />
          </div>

          <div className="flex flex-col items-center justify-center text-slate-100">
            <div className=" h-12 w-[4px] bg-slate-100 md:h-32 block"></div>
            <h1 className="my-2 text-3xl font-bold md:text-5xl">VS</h1>
            <div className=" h-12 w-[4px] bg-slate-100 md:h-32 block"></div>
          </div>

          <div className="relative flex items-center justify-start w-full h-full overflow-hidden">
            <img
              key={cards[rightIndex].id}
              src={cards[rightIndex].image}
              alt="right"
              className={`object-contain w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 absolute transition-transform duration-700 ease-in-out ${
                animate ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"
              }`}
            />
            <img
              key={cards[(rightIndex + 1) % cards.length].id}
              src={cards[(rightIndex + 1) % cards.length].image}
              alt="right-next"
              className={`object-contain w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 absolute transition-transform duration-700 ease-in-out ${
                animate ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
              }`}
            />
          </div>

        </div>
      </div>
    </div>
  );
}
