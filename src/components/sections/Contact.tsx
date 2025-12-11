"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import companyData from "@/data/company.json";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ type: null, message: '' });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: null, message: '' });

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Gracias por contactarnos. Nos pondremos en contacto con usted a la brevedad.' });
                setFormData({ name: "", company: "", email: "", message: "" });
            } else {
                console.error("Form error:", result);
                setStatus({ type: 'error', message: 'Hubo un error al enviar el mensaje. Por favor, inténtelo nuevamente en unos minutos.' });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setStatus({ type: 'error', message: 'Error de conexión. Por favor, verifique su conexión a internet e inténtelo nuevamente.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const { company } = companyData;

    return (
        <section id="contact" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-primary mb-6">Contáctenos</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            Estamos listos para atender sus requerimientos de insumos minerales con la calidad, respaldo y puntualidad que su industria necesita.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Dirección</h3>
                                    <p className="text-muted-foreground">{company.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Teléfono</h3>
                                    <a href={`tel:${company.phone}`} className="text-muted-foreground hover:text-cyan-600 transition-colors">
                                        {company.phone}
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-primary">Email</h3>
                                    <a href={`mailto:${company.email}`} className="text-muted-foreground hover:text-cyan-600 transition-colors">
                                        {company.email}
                                    </a>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Form */}
                    <div>
                        <Card className="shadow-lg border-none">
                            <CardContent className="p-8">
                                <h3 className="text-xl font-bold text-primary mb-6">Envíenos un mensaje</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Nombre Completo</Label>
                                            <Input
                                                id="name"
                                                name="name"
                                                placeholder="Juan Pérez"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">Empresa</Label>
                                            <Input
                                                id="company"
                                                name="company"
                                                placeholder="Su empresa S.A."
                                                value={formData.company}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Correo Electrónico</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="juan@empresa.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Mensaje</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Escriba su consulta aquí..."
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {status.message && (
                                        <div className={`p-4 rounded-md text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                            {status.message}
                                        </div>
                                    )}

                                    <Button type="submit" className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold" disabled={isSubmitting}>
                                        {isSubmitting ? "Enviando..." : <span className="flex items-center gap-2">Enviar Mensaje <Send size={16} /></span>}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
