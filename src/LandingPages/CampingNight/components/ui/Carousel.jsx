import React, { useState, useEffect } from "react";

const packages = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img2.webp",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img3.webp",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img4.webp",
    },
    {
        id: 4,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img5.webp",
    },
    {
        id: 5,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img6.webp",
    },
    {
        id: 6,
        title: "Lorem ipsum dolor",
        paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta saepe similique non ipsum optio totam sed eaque, quia, dolor a, eligendi magni itaque est asperiores quis maxime iusto alias?",
        image: "/Image/CampingNight/img7.webp",
    },
];

export default function Slider() {

    useEffect(() => {
        packages.forEach(({ img }) => {
            const image = new Image();
            image.src = img;
        });
    }, []);


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + packages.length) % packages.length);
    };

    const handleRight = () => {
        setCurrentIndex((prev) => (prev + 1) % packages.length);
    };

    const getVisiblepackages = () => {
        const prevIndex = (currentIndex - 1 + packages.length) % packages.length;
        const nextIndex = (currentIndex + 1) % packages.length;
        //const nextNextIndex = (currentIndex + 2) % packages.length;
        return [packages[prevIndex], packages[currentIndex], packages[nextIndex]];
    };


    return (
        <div className="relative w-full py-6 mx-auto">
            <button
                onClick={handleLeft}
                className="absolute left-0 z-50 flex items-center justify-center w-12 h-12 p-2 text-xl font-bold transform -translate-y-1/2 border-4 rounded-full border-slate-100 dark:border-zinc-950 text-slate-100 dark:text-zinc-950 bg-zinc-950 dark:bg-slate-100 top-1/2"
            >
                {'<'}
            </button>
            <button
                onClick={handleRight}
                className="absolute right-0 z-50 flex items-center justify-center w-12 h-12 p-2 text-xl font-bold transform -translate-y-1/2 border-4 rounded-full border-slate-100 dark:border-zinc-950 text-slate-100 dark:text-zinc-950 bg-zinc-950 dark:bg-slate-100 top-1/2"
            >
                {'>'}
            </button>

            <div className="grid items-center justify-center grid-cols-1 gap-4 px-8 transition-transform duration-500 ease-in-out md:grid-cols-3"
            >
                {getVisiblepackages().map((pkg, i) => {
                    const isSelected = i === 1;
                    const positionClass = isSelected ? "" : " hidden md:block";

                    return (
                        <div key={pkg.id} className={`${positionClass} relative group w-full h-96 m-auto `}>
                            <img
                                src={pkg.image}
                                alt="alt"
                                className="inset-0 object-cover w-full h-full transition-all duration-300 rounded-xl"
                            />

                            <div
                                class="absolute w-full h-full bottom-0 left-0 flex flex-col text-center items-center rounded-xl justify-center gap-2 backdrop-blur-[2px] bg-black/60 p-4 m-auto text-slate-100 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300"
                            >
                                <h1 className="text-xl font-bold md:text-2xl">{pkg.title}</h1>
                                <p className="text-base">
                                    {pkg.paragraph}
                                </p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}