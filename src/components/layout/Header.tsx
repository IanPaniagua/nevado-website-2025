"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="NEVADO Logo" className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#hero" className="text-sm font-medium hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
            Conócenos
          </Link>
          <Link href="#products" className="text-sm font-medium hover:text-primary transition-colors">
            Productos
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden md:inline-flex bg-primary hover:bg-primary/90"
            onClick={() => sendGAEvent('event', 'click_cotizar_header', { value: 'header_cta' })}
          >
            <Link href="#contact">Cotizar Ahora</Link>
          </Button>
          {/* Mobile Menu Placeholder - implement if needed or use Sheet */}
        </div>
      </div>
    </header>
  );
}
