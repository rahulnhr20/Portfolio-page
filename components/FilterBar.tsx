"use client"

import { motion } from "framer-motion"

const filters = [
    "BRANDING",
    "3D ANIMATIONS",
    "STRATEGY",
    "CREATIVE DEVELOPMENT",
    "WEBFLOW DEVELOPMENT",
    "WEB DESIGN"
]

export default function FilterBar() {
    return (
        <div className="flex flex-wrap gap-x-6 gap-y-3 items-center justify-center md:justify-start text-xs md:text-sm font-medium text-white/50 w-full mt-12">
            {filters.map((filter) => (
                <div key={filter} className="cursor-pointer hover:text-white transition-colors">
                    {filter}
                </div>
            ))}
        </div>
    )
}
