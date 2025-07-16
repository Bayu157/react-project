import { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Button from "./Button";
import TBHX from "../assets/Img/to-be-hero-x.jpg";
import Bleach from "../assets/Img/Bleach-TYBW-Part-4-Anime-Watch.jpg";
import Dandadan from "../assets/Img/Dandadan.jpeg";
import DrStone from "../assets/Img/DrStone.jpg"

export default function carousel({
    autoSlide = false,
    autoSlideInterval = 7000,

}) {

    const Images = [TBHX, Bleach, Dandadan, DrStone];

    const [current, setCurrent] = useState(0);

    const nextslide = () => {
        setCurrent((prev) => (prev + 1) % Images.length)
    };


    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + Images.length) % Images.length);
    };

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(nextslide, autoSlideInterval)
        return () => clearInterval(slideInterval)
    })


    return(
        <div className="">
            <div className="relative w-full  mx-auto overflow-hidden rounded-lg shadow-lg inset-shadow-xs space-y-20 ">
                <div className=" content-center">
                    <div className="w-full flex  h-96 object-contain  transition-transform duration-700" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {Images.map((img, idx) => (
                            <img src={img} key={idx} alt={`Slide ${idx}`} className="w-full h-full shrink-0"/>))}
                    </div>
                    <div>
                        <Button onClick={nextslide} variant="ghost" size="icon" className="absolute top-1/2 right-2 -translate-y-1/2 "> <ChevronRightIcon/> </Button>
                        <Button onClick={prevSlide} variant="ghost" size="icon" className="absolute top-1/2 left-2 -translate-y-1/2 "> <ChevronLeftIcon/> </Button>
                    </div>
                    <div className=" absolute bottom-4 right-0 left-0">
                        <div className="flex items-center justify-center gap-2">
                            {Images.map((_, idx) => (
                                <div key={idx} className={` transition-all w-2 h-2 bg-white rounded-full ${current === idx ? "p-2" : "bg-opacity-50"}`}>

                                </div>
                            ) )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}