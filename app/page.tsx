"use client";

import { WorkList } from "@/components/WorkList";
import { CustomCursor } from "@/components/CustomCursor";
import HedgeBackground from "@/components/HedgeBackground";
import Navbar from "@/components/Navbar";
import SoftwareLogos from "@/components/SoftwareLogos";
import { ScrambleText, FadeInBlock } from "@/components/TextAnimations";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] selection:bg-[#52D68C] selection:text-black text-white relative">
      <CustomCursor />
      <HedgeBackground />
      <Navbar />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="min-h-[50vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-10 max-w-[1800px] 2xl:max-w-[90vw]">
          <FadeInBlock delay={0.1}>
            <h1 className="text-[11vw] md:text-[9vw] 2xl:text-[150px] leading-[0.85] font-medium tracking-tight text-[#52D68C]">
              <ScrambleText text="Portfolio" autoStart />
            </h1>
          </FadeInBlock>

          <FadeInBlock delay={0.3}>
            <p className="text-xl md:text-3xl text-white/80 max-w-4xl leading-tight font-light border-b border-white/20 mb-8">
              {/* Branding, Web Design, Webflow, Creative Development, and beyond */}
            </p>

            <button className="group relative px-8 py-4 bg-white/5 overflow-hidden rounded-full border border-white/10 hover:border-white/30 transition-all duration-300">
              <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-[250ms] ease-out group-hover:w-full opacity-0 group-hover:opacity-100" />
              <span className="relative flex items-center gap-3 text-sm md:text-base font-medium tracking-wide">
                Explore Services
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </FadeInBlock>

        </section>

        {/* SOFTWARE LOGOS */}
        <SoftwareLogos />

        {/* WORK LIST */}
        <section className="px-0">
          <WorkList />
        </section>
      </main>
    </div>
  );
}
