"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export function Hero() {
    return (
        <section id="hero" className="relative flex min-h-[600px] flex-col justify-center items-center text-center text-white overflow-hidden py-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.png"
                    alt="Mineral processing background"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/60" />
            </div>

            <div className="container mx-auto relative z-10 px-4">
                <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl max-w-4xl mx-auto drop-shadow-lg">
                    Comercialización de productos químicos e insumos minerales para industrias.
                </h1>
                <p className="mb-8 text-lg font-medium text-slate-100 sm:text-xl max-w-2xl mx-auto drop-shadow-md">
                    Soluciones de alta pureza respaldadas por profesionales y certificación <span className="text-cyan-400">ISO 9001:2015</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        asChild
                        size="lg"
                        className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 shadow-lg hover:shadow-cyan-500/25 border-none"
                        onClick={() => sendGAEvent('event', 'click_cotizar_hero', { value: 'hero_cta' })}
                    >
                        <Link href="#contact">Cotizar Ahora</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white">
                        <Link href="#products">Ver Productos</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
