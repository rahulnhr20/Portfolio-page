"use client";

import { WorkList } from "@/components/WorkList";
import { CustomCursor } from "@/components/CustomCursor";
import HedgeBackground from "@/components/HedgeBackground";
import Navbar from "@/components/Navbar";
import { ScrambleText, FadeInBlock } from "@/components/TextAnimations";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] selection:bg-[#52D68C] selection:text-black text-white relative">
      <CustomCursor />
      <HedgeBackground />
      <Navbar />

      <main className="relative z-10 w-full">
        {/* HERO SECTION */}
        <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 pt-32 max-w-[1600px] mx-auto">
          <FadeInBlock delay={0.1}>
            <h1 className="text-[11vw] md:text-[9vw] leading-[0.85] font-medium tracking-tight mb-2">
              <ScrambleText text="Portfolio" autoStart />
            </h1>
          </FadeInBlock>

          <FadeInBlock delay={0.3}>
            <p className="text-xl md:text-3xl text-white/80 max-w-4xl leading-tight font-light border-b border-white/20 mb-4">
              {/* Branding, Web Design, Webflow, Creative Development, and beyond */}
            </p>
          </FadeInBlock>

        </section>

        {/* WORK LIST */}
        <section className="px-0">
          <WorkList />
        </section>
      </main>
    </div>
  );
}
