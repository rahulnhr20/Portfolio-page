import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workImages } from "@/work_list_imgs/index";
import { Carousel } from "./Carousel";
import { StaticImageData } from "next/image";

const projects = [
    {
        title: "Content Creation",
        description: "Crafting compelling narratives and visuals that resonate with your audience and elevate your brand's voice.",
        tags: ["Video", "Photography", "Copywriting"],
        location: "Remote",
        bg: "#4A576F", // Muted blue-grey
        link: "#",
        media: {
            video: "",
            images: workImages.content
        }
    },
    {
        title: "Web Development",
        description: "Building robust, scalable, and high-performance websites and applications tailored to your business needs.",
        tags: ["Frontend", "Backend", "Full Stack"],
        location: "Global",
        bg: "#2C3E50",
        link: "#",
        media: {
            video: "",
            images: workImages.webDev
        }
    },
    {
        title: "SEO Optimization",
        description: "Enhancing your digital presence to rank higher, reach more customers, and drive organic growth.",
        tags: ["Audit", "Strategy", "Analytics"],
        location: "Global",
        bg: "#16A085",
        link: "#",
        media: {
            video: "",
            images: workImages.seo
        }
    },
    {
        title: "Branding Design",
        description: "Developing unique visual identities that tell your story, set you apart, and build lasting connections.",
        tags: ["Logo", "Identity", "Guidelines"],
        location: "Global",
        bg: "#D35400",
        link: "#",
        media: {
            video: "",
            images: workImages.branding
        }
    },
    {
        title: "Digital Marketing",
        description: "Strategic campaigns that drive engagement, traffic, and conversions across all digital channels.",
        tags: ["Social Media", "PPC", "Email"],
        location: "Global",
        bg: "#8E44AD",
        link: "#",
        media: {
            video: "",
            images: workImages.digitalMarketing
        }
    },
];

export const WorkList = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const hoverTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (index: number) => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        hoverTimeout.current = setTimeout(() => {
            setHoverIndex(index);
        }, 1000);
    };

    const handleMouseLeave = () => {
        if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
        setHoverIndex(null);
    };

    return (
        <section className="pt-0 pb-5">

            <div className="w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        className="border-b border-white/15 cursor-pointer"
                        animate={{
                            backgroundColor:
                                hoverIndex === index ? project.bg : "rgba(0,0,0,0)",
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                        {/* ROW */}
                        <motion.div
                            initial={false}
                            animate={{
                                opacity: hoverIndex === index ? 0 : 1,
                                height: hoverIndex === index ? 0 : "auto",
                                paddingTop: hoverIndex === index ? 0 : "1.5rem", // py-6 = 1.5rem
                                paddingBottom: hoverIndex === index ? 0 : "1.5rem",
                            }}
                            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-16 overflow-hidden"
                        >
                            <h3 className="col-span-1 md:col-span-3 text-2xl font-medium">
                                {project.title}
                            </h3>

                            <p className="col-span-1 md:col-span-6 text-white/90 max-w-xl">
                                {project.description}
                            </p>

                            <div className="col-span-1 md:col-span-3 text-left md:text-right text-sm space-y-1">
                                {project.tags.map((tag, i) => (
                                    <div key={i}>{tag}</div>
                                ))}
                                <div className="mt-2 text-white/70">{project.location}</div>
                            </div>
                        </motion.div>

                        {/* DROPDOWN */}
                        <AnimatePresence>
                            {hoverIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{
                                        duration: 0.7,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="overflow-hidden px-4 md:px-16"
                                >
                                    <div
                                        className="py-12 space-y-10"
                                    >
                                        {/* ================= TEXT ROW (Expanded) ================= */}
                                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                                            {/* Left: Title + CTA */}
                                            <div className="col-span-1 md:col-span-3 space-y-4">
                                                <h4 className="text-2xl font-medium">
                                                    {project.title}
                                                </h4>

                                                <a
                                                    href={project.link || "#"}
                                                    className="inline-flex items-center gap-3 text-sm border-b border-white/70 pb-1 w-fit hover:opacity-80 transition"
                                                >
                                                    View Case Study
                                                    <span className="translate-y-[1px]">→</span>
                                                </a>
                                            </div>

                                            {/* Center: Description */}
                                            <p className="col-span-1 md:col-span-6 text-white/90 max-w-xl leading-relaxed">
                                                {project.description}
                                            </p>

                                            {/* Right: Tags + Location */}
                                            <div className="col-span-1 md:col-span-3 text-left md:text-right text-sm space-y-1">
                                                {project.tags.map((tag: string, i: number) => (
                                                    <div key={i}>{tag}</div>
                                                ))}
                                                <div className="pt-2 text-white/70">
                                                    {project.location}
                                                </div>
                                            </div>
                                        </div>

                                        {/* ================= MEDIA ROW ================= */}
                                        <div className="w-full">
                                            {project.title === "Content Creation" ? (
                                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                                                    {/* Video */}
                                                    <div className="col-span-1 md:col-span-6 h-64 md:h-80 bg-black/20 rounded-xl overflow-hidden relative">
                                                        {/* Fallback pattern if no video */}
                                                        <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                                            Video Preview
                                                        </div>
                                                        {project.media.video && (
                                                            <video
                                                                src={project.media.video}
                                                                autoPlay
                                                                muted
                                                                loop
                                                                playsInline
                                                                className="w-full h-full object-cover"
                                                            />
                                                        )}
                                                    </div>

                                                    {/* Images */}
                                                    <div className="col-span-1 md:col-span-6 grid grid-cols-3 gap-4">
                                                        {project.media.images.map(
                                                            (img: StaticImageData | string, i: number) => {
                                                                const src = typeof img === "string" ? img : img.src;
                                                                return (
                                                                    <motion.img
                                                                        key={i}
                                                                        src={src}
                                                                        alt=""
                                                                        className="w-full h-32 md:h-full object-cover rounded-xl bg-zinc-800"
                                                                        initial={{ opacity: 0, y: 20 }}
                                                                        animate={{ opacity: 1, y: 0 }}
                                                                        transition={{ delay: 0.2 + i * 0.1 }}
                                                                    />
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                </div>
                                            ) : (
                                                <Carousel images={project.media.images} />
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
