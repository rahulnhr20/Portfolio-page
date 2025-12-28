"use client"



export default function HedgeBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030503] pointer-events-none">
            {/* Abstract Gradient Orbs for depth */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-950/30 blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-teal-950/20 blur-[100px]" />

            {/* The Patchwork Grid Container */}
            <div className="absolute inset-0 flex flex-wrap opacity-[0.15]">
                {/* We create a grid of tiles with different patterns */}
                {/* Row 1 */}
                <div className="w-[20%] h-[33%] border-r border-b border-white/5 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[size:24px_24px]" />
                <div className="w-[30%] h-[33%] border-r border-b border-white/5 bg-[linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:40px_40px]" />
                <div className="w-[25%] h-[33%] border-r border-b border-white/5" />
                <div className="w-[25%] h-[33%] border-b border-white/5 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.1)_2px,_transparent_0)] bg-[size:32px_32px]" />

                {/* Row 2 */}
                <div className="w-[15%] h-[34%] border-r border-b border-white/5" />
                <div className="w-[25%] h-[34%] border-r border-b border-white/5 bg-[linear-gradient(45deg,_rgba(255,255,255,0.03)_25%,_transparent_25%,_transparent_50%,_rgba(255,255,255,0.03)_50%,_rgba(255,255,255,0.03)_75%,_transparent_75%,_transparent)] bg-[size:20px_20px]" />
                <div className="w-[40%] h-[34%] border-r border-b border-white/5 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:16px_16px]" />
                <div className="w-[20%] h-[34%] border-b border-white/5" />

                {/* Row 3 */}
                <div className="w-[30%] h-[33%] border-r border-white/5 bg-[linear-gradient(to_right,_rgba(255,255,255,0.05)_1px,_transparent_1px),_linear-gradient(to_bottom,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[size:60px_60px]" />
                <div className="w-[20%] h-[33%] border-r border-white/5 bg-[radial-gradient(rect,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[size:20px_20px]" />
                <div className="w-[50%] h-[33%] flex items-center justify-center">
                    {/* Subtle giant circle outline */}
                    <div className="w-[80%] h-[80%] border border-white/5 rounded-full" />
                </div>
            </div>

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{ filter: 'url(#noiseFilter)' }}
            >
                <svg className="h-full w-full">
                    <filter id="noiseFilter">
                        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
            </div>

            {/* Vignette Mask */}
            <div className="absolute inset-0 bg-radial-gradient-to-input from-transparent to-black opacity-80"
                style={{ background: 'radial-gradient(circle at 50% 50%, transparent 40%, #000 100%)' }}
            />
        </div>
    )
}
