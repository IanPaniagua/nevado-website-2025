import { BadgeCheck, Factory, Headset } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
    return (
        <section id="about" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4 sm:text-4xl">
                        Calidad y Confianza Certificada
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        En NEVADO, nos dedicamos a procesar y comercializar insumos minerales con los más altos estándares.
                        Nuestra misión es proveer soluciones químicas industriales que potencien la producción de nuestros clientes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                        <CardContent className="pt-8 text-center flex flex-col items-center">
                            <div className="mb-6 p-4 rounded-full bg-cyan-100 text-cyan-600">
                                <BadgeCheck className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Calidad Certificada</h3>
                            <p className="text-muted-foreground">
                                Contamos con certificación <span className="font-semibold text-primary">ISO 9001:2015</span>, garantizando procesos estandarizados y productos de pureza constante.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                        <CardContent className="pt-8 text-center flex flex-col items-center">
                            <div className="mb-6 p-4 rounded-full bg-blue-100 text-blue-600">
                                <Factory className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Infraestructura Avanzada</h3>
                            <p className="text-muted-foreground">
                                Tecnología de punta en micronización y procesamiento para obtener granulometrías precisas y homogéneas.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-white">
                        <CardContent className="pt-8 text-center flex flex-col items-center">
                            <div className="mb-6 p-4 rounded-full bg-slate-100 text-slate-700">
                                <Headset className="h-10 w-10" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Soporte Integral</h3>
                            <p className="text-muted-foreground">
                                Asesoría técnica especializada y atención comercial enfocada en resolver las necesidades específicas de su industria.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
