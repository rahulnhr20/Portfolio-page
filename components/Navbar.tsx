"use client"

import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 pointer-events-none">
            <div className="pointer-events-auto">
                <button className="px-5 py-2 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-sm font-medium hover:bg-white/10 transition-colors">
                    MENU
                </button>
            </div>

            <div className="absolute left-1/2 top-6 -translate-x-1/2 pointer-events-auto">
                {/* Refokus Icon Placeholer */}
                <Link href="/" className="block">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </Link>
            </div>

            <div className="pointer-events-auto">
                <button className="px-5 py-2 rounded-full border border-white/20 bg-black/10 backdrop-blur-md text-sm font-medium hover:bg-white/10 transition-colors">
                    CONTACT
                </button>
            </div>
        </nav>
    )
}
