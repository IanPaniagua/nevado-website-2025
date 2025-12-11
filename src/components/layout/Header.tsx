"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { sendGAEvent } from "@next/third-parties/google";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "Conócenos" },
    { href: "#products", label: "Productos" },
    { href: "#contact", label: "Contacto" },
  ];

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="NEVADO Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium px-4 py-2 rounded-md transition-all duration-300 ease-in-out hover:text-primary hover:bg-cyan-50/80 hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* CTA Button - Always visible */}
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90"
            onClick={() => sendGAEvent('event', 'click_cotizar_header', { value: 'header_cta' })}
          >
            <Link href="#contact">Cotizar Ahora</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menú</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="text-lg font-medium hover:text-primary transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
