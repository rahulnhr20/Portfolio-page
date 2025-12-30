"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Import images
import figmaIcon from "../Logo_imgs/figma.png";
import picsartIcon from "../Logo_imgs/picsart.png";
import canvaIcon from "../Logo_imgs/canva.png";
import photoshopIcon from "../Logo_imgs/ps.png";
import gitIcon from "../Logo_imgs/git.png";
import vscodeIcon from "../Logo_imgs/vscode.png";
import corelIcon from "../Logo_imgs/coreldraw.png";
import bootstrapIcon from "../Logo_imgs/bootstrap.png";
import blenderIcon from "../Logo_imgs/blender.png";
import aftereffectsIcon from "../Logo_imgs/ae.png";

const logos = [
    { name: "Figma", icon: figmaIcon },
    { name: "PicsArt", icon: picsartIcon },
    { name: "Canva", icon: canvaIcon },
    { name: "Photoshop", icon: photoshopIcon },
    { name: "Git", icon: gitIcon },
    { name: "VS Code", icon: vscodeIcon },
    { name: "CorelDRAW", icon: corelIcon },
    { name: "Bootstrap", icon: bootstrapIcon },
    { name: "Blender", icon: blenderIcon },
    { name: "After Effects", icon: aftereffectsIcon },
];

const SoftwareLogos = () => {
    return (
        <section className="py-8 border-b border-white/5 overflow-hidden">
            <div className="flex">
                <motion.div
                    className="flex flex-shrink-0 gap-8 md:gap-16 px-6 md:px-8"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={index} className="flex flex-col items-center gap-3 group shrink-0 cursor-default">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image
                                    src={logo.icon}
                                    alt={logo.name}
                                    className="w-full h-full object-contain rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-300">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    className="flex flex-shrink-0 gap-8 md:gap-16 px-6 md:px-8"
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 60
                    }}
                >
                    {[...logos, ...logos, ...logos].map((logo, index) => (
                        <div key={`dup-${index}`} className="flex flex-col items-center gap-3 group shrink-0 cursor-default">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image
                                    src={logo.icon}
                                    alt={logo.name}
                                    className="w-full h-full object-contain rounded-xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <span className="text-xs md:text-sm font-medium text-white/40 group-hover:text-white transition-colors duration-300">{logo.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default SoftwareLogos;
