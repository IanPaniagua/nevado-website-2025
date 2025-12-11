"use client";

import { Badge } from "@/components/ui/badge"; // Need to create Badge if Shadcn didn't install it, but usually standard. Wait, I didn't install Badge. I'll rely on simple div or standard classes if Badge is missing, or use a custom div.
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Product } from "@/types";
import productsData from "@/data/products.json";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

// Simple Badge component inline or I should install it? I'll use a styled span.

export function Products() {
    const products: Product[] = productsData as Product[];
    const [showAll, setShowAll] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768); // md breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Show only 3 products on mobile by default, all on desktop
    const displayedProducts = (isMobile && !showAll) ? products.slice(0, 3) : products;
    const hasMore = products.length > 3;

    return (
        <section id="products" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-4">Catálogo de Productos</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Carbonato de calcio de alta pureza y micronizado para diversas aplicaciones industriales.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProducts.map((product, index) => (
                        <Card key={index} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow border-slate-200">
                            <div className="relative h-48 w-full bg-slate-100 flex items-center justify-center p-4">
                                {/* Fallback image or the actual one. JSON says "product.png" */}
                                {/* Using a placeholder-like visuals because product images might all be same "product.png" */}
                                <div className="relative w-full h-full">
                                    {/* Using next/image requires width/height or fill. Using basic img for simpler local file handling without size metadata yet, or just fill. */}
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center rounded-full border border-cyan-500 bg-cyan-50 px-2.5 py-0.5 text-xs font-semibold text-cyan-700 shadow-sm">
                                        Alta Pureza
                                    </span>
                                </div>
                            </div>

                            <CardHeader>
                                <CardTitle className="text-xl text-primary">{product.name}</CardTitle>
                                <CardDescription className="line-clamp-2">
                                    {product.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <p className="text-sm text-muted-foreground mb-4">
                                    <span className="font-semibold text-slate-700">Presentación:</span> {product.packaging}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button className="w-full bg-primary hover:bg-primary/90">Ver Especificaciones</Button>
                                    </DialogTrigger>
                                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                                        <DialogHeader>
                                            <DialogTitle className="text-2xl font-bold text-primary">{product.name}</DialogTitle>
                                            <DialogDescription>
                                                {product.description}
                                            </DialogDescription>
                                        </DialogHeader>

                                        <div className="mt-6 space-y-6">
                                            <div>
                                                <h4 className="font-semibold text-primary mb-2">Aplicaciones</h4>
                                                <p className="text-sm text-muted-foreground">{product.application}</p>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-primary mb-2">Especificaciones Químicas</h4>
                                                <div className="border rounded-md p-4 bg-slate-50">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="font-medium">Carbonato de Calcio</span>
                                                        <span>{product.specifications.calcium_carbonate.range} {product.specifications.calcium_carbonate.unit}</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold text-primary mb-2">Especificaciones Físicas</h4>
                                                <div className="border rounded-md overflow-hidden">
                                                    <table className="w-full text-sm text-left">
                                                        <thead className="bg-slate-100 text-slate-700 font-semibold">
                                                            <tr>
                                                                <th className="p-3">Descripción</th>
                                                                <th className="p-3 text-right">Valor / Rango</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y">
                                                            {product.specifications.physical_specifications.map((spec, idx) => (
                                                                <tr key={idx} className="bg-white">
                                                                    <td className="p-3">{spec.description}</td>
                                                                    <td className="p-3 text-right">
                                                                        {spec.range ? spec.range : (spec.maximum ? `< ${spec.maximum}` : '')}
                                                                        {spec.unit ? ` ${spec.unit}` : ''}
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Show More Button - Only on mobile and when there are more products */}
                {hasMore && !showAll && (
                    <div className="mt-12 text-center md:hidden">
                        <Button
                            onClick={() => setShowAll(true)}
                            variant="outline"
                            size="lg"
                            className="gap-2"
                        >
                            Ver Catálogo Completo
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
}
