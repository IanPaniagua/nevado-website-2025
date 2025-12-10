import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Products } from "@/components/sections/Products";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
