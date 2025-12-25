"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            images: [
                "/content-creation.png",
                "/content-creation.png",
                "/content-creation.png",
            ]
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
            images: [
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg", // Placeholder
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
            ]
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
            images: [
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg", // Placeholder
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
            ]
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
            images: [
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg", // Placeholder
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
            ]
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
            images: [
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg", // Placeholder
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
                "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63455d9694b8e288eb626601_Cula.jpg",
            ]
        }
    },
];

export const WorkList = () => {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
                {/* Header content moved to page.tsx for better animation control, or we can keep it here with animations. 
                    The plan said page.tsx handles the main header. Let's make this just the list. 
                    Actually, the user sees "SELECTED WORK" in the plan for page.tsx. 
                    WorkList has "work." as a header. I will remove the header from WorkList to avoid duplication if I put it in page.tsx 
                    OR I will adapt WorkList to just be the list. 
                    
                    Wait, the plan says:
                    page.tsx: "SELECTED WORK" header with ScrambleText.
                    WorkList.tsx: "Container for the list of projects".
                    
                    So I should remove the header from WorkList.tsx and just keep the list.
                */}
            </div>

            <div className="w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
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
                                // In the original request, opacity goes to 0 on hover, but we want to arguably keep it visible 
                                // or follow the specific design where the row content might disappear to be replaced by the expanded content.
                                // The user code suggests opacity: hoverIndex === index ? 0 : 1.
                                opacity: hoverIndex === index ? 0 : 1,
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="w-full grid grid-cols-1 md:grid-cols-12 gap-6 px-4 md:px-16 overflow-hidden py-6"
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
                                        duration: 0.4,
                                        ease: [0.16, 1, 0.3, 1], // Custom bezier for smooth expanding
                                    }}
                                    className="overflow-hidden px-4 md:px-16"
                                >
                                    <div
                                        className="pb-12 space-y-10"
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
                                                    (img: string, i: number) => (
                                                        <motion.img
                                                            key={i}
                                                            src={img}
                                                            alt=""
                                                            className="w-full h-32 md:h-full object-cover rounded-xl bg-zinc-800"
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                                        />
                                                    )
                                                )}
                                            </div>
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
