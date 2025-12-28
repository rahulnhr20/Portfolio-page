"use client";
import React from "react";
import { StaticImageData } from "next/image";

interface CarouselProps {
    images: (string | StaticImageData)[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    // Duplicate images sufficient times to ensure smooth looping
    // For 3 images, 2 sets might not be enough if screen is wide? 
    // With w-1/2 container and 3 images per view, 2 sets (6 images) is enough (3 visible + 3 buffer).
    // Let's do 4 sets to be safe and super smooth.
    const duplicatedImages = [...images, ...images, ...images, ...images];

    return (
        <div className="w-full md:w-[85%] mx-auto overflow-hidden relative group">
            {/* Mask gradients for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-[#0E0E0E] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-[#0E0E0E] to-transparent pointer-events-none" />

            {/* Container for the scrolling track */}
            <div className="flex w-max animate-scroll group-hover:[animation-play-state:paused]">
                {duplicatedImages.map((img, index) => {
                    const src = typeof img === "string" ? img : img.src;

                    return (
                        <div
                            key={index}
                            className="relative w-[80vw] md:w-[16vw] h-48 md:h-80 shrink-0 px-2"
                        >
                            {/* Inner wrapper for aspect ratio/styling */}
                            <div className="w-full h-full rounded-xl overflow-hidden bg-zinc-800/50">
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    );
                })}
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                    animation: scroll 80s linear infinite;
                }
            `}</style>
        </div>
    );
};
