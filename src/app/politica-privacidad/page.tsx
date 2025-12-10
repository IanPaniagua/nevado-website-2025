import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background font-sans">
            <Header />
            <main className="py-20">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h1 className="text-4xl font-bold text-primary mb-8">Política de Privacidad</h1>

                    <div className="prose prose-slate max-w-none space-y-6 text-muted-foreground">
                        <p className="text-sm text-muted-foreground">
                            Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">1. Información General</h2>
                            <p>
                                NEVADO (en adelante, "la Empresa"), con domicilio en Av. Sinchi Roca Mz M lote 6 El Pedregal Jicamarca S.J.L, Perú,
                                se compromete a proteger la privacidad y los datos personales de sus usuarios, clientes y visitantes de su sitio web,
                                en cumplimiento con la Ley N° 29733 - Ley de Protección de Datos Personales del Perú y su Reglamento.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">2. Datos que Recopilamos</h2>
                            <p>A través de nuestro sitio web, podemos recopilar la siguiente información:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Datos de identificación:</strong> Nombre completo, empresa, correo electrónico.</li>
                                <li><strong>Datos de comunicación:</strong> Mensajes enviados a través del formulario de contacto.</li>
                                <li><strong>Datos de navegación:</strong> Dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia (mediante Google Analytics).</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">3. Finalidad del Tratamiento de Datos</h2>
                            <p>Los datos personales recopilados serán utilizados para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Atender consultas y solicitudes de cotización realizadas a través del formulario de contacto.</li>
                                <li>Enviar respuestas automáticas de confirmación de recepción de mensajes.</li>
                                <li>Mejorar la experiencia del usuario en nuestro sitio web mediante análisis de tráfico y comportamiento.</li>
                                <li>Cumplir con obligaciones legales y comerciales.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">4. Base Legal del Tratamiento</h2>
                            <p>
                                El tratamiento de sus datos personales se basa en su consentimiento expreso al utilizar nuestro formulario de contacto
                                y aceptar nuestra política de cookies, así como en la ejecución de medidas precontractuales solicitadas por usted.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">5. Compartición de Datos</h2>
                            <p>
                                NEVADO no vende, alquila ni comparte sus datos personales con terceros, excepto en los siguientes casos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Proveedores de servicios:</strong> Utilizamos servicios de terceros como Resend (para envío de correos) y Google Analytics (para análisis web). Estos proveedores están obligados a proteger su información.</li>
                                <li><strong>Cumplimiento legal:</strong> Cuando sea requerido por ley o autoridad competente.</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">6. Cookies y Tecnologías de Seguimiento</h2>
                            <p>
                                Nuestro sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y analizar el tráfico.
                                Al acceder a nuestro sitio, se le solicitará su consentimiento para el uso de cookies. Puede gestionar sus preferencias
                                de cookies en cualquier momento a través de la configuración de su navegador.
                            </p>
                            <p>Utilizamos Google Analytics para recopilar información sobre cómo los visitantes utilizan nuestro sitio web.</p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">7. Derechos del Titular de Datos</h2>
                            <p>
                                De acuerdo con la Ley de Protección de Datos Personales del Perú, usted tiene los siguientes derechos:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted.</li>
                                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos.</li>
                                <li><strong>Cancelación:</strong> Solicitar la eliminación de sus datos personales.</li>
                                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para fines específicos.</li>
                                <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento.</li>
                            </ul>
                            <p>
                                Para ejercer estos derechos, puede contactarnos a través del correo electrónico: <a href="mailto:inv.nevadosac@gmail.com" className="text-cyan-600 hover:underline">inv.nevadosac@gmail.com</a>
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">8. Seguridad de los Datos</h2>
                            <p>
                                Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra acceso no autorizado,
                                pérdida, destrucción o alteración. Sin embargo, ningún sistema de transmisión por Internet es completamente seguro,
                                por lo que no podemos garantizar la seguridad absoluta de la información.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">9. Conservación de Datos</h2>
                            <p>
                                Conservaremos sus datos personales únicamente durante el tiempo necesario para cumplir con las finalidades descritas
                                en esta política, o según lo requiera la legislación peruana aplicable.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">10. Transferencias Internacionales</h2>
                            <p>
                                Algunos de nuestros proveedores de servicios pueden estar ubicados fuera del Perú. En tales casos, nos aseguramos
                                de que existan garantías adecuadas para la protección de sus datos personales conforme a la legislación peruana.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">11. Menores de Edad</h2>
                            <p>
                                Nuestro sitio web no está dirigido a menores de 18 años. No recopilamos intencionalmente datos personales de menores.
                                Si tiene conocimiento de que un menor ha proporcionado información personal, por favor contáctenos para eliminarla.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">12. Modificaciones a esta Política</h2>
                            <p>
                                NEVADO se reserva el derecho de modificar esta Política de Privacidad en cualquier momento.
                                Las modificaciones serán publicadas en esta página con la fecha de actualización correspondiente.
                                Le recomendamos revisar periódicamente esta política.
                            </p>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">13. Contacto</h2>
                            <p>
                                Si tiene preguntas, comentarios o inquietudes sobre esta Política de Privacidad o sobre el tratamiento de sus datos personales,
                                puede contactarnos:
                            </p>
                            <ul className="list-none space-y-2">
                                <li><strong>Empresa:</strong> NEVADO</li>
                                <li><strong>Dirección:</strong> Av. Sinchi Roca Mz M lote 6 El Pedregal Jicamarca S.J.L, Perú</li>
                                <li><strong>Correo electrónico:</strong> <a href="mailto:inv.nevadosac@gmail.com" className="text-cyan-600 hover:underline">inv.nevadosac@gmail.com</a></li>
                                <li><strong>Teléfono:</strong> 994286955</li>
                            </ul>
                        </section>

                        <section className="space-y-4">
                            <h2 className="text-2xl font-semibold text-primary mt-8">14. Autoridad de Protección de Datos</h2>
                            <p>
                                Si considera que sus derechos no han sido atendidos adecuadamente, puede presentar una reclamación ante la
                                Autoridad Nacional de Protección de Datos Personales del Perú.
                            </p>
                        </section>

                        <div className="mt-12 pt-8 border-t">
                            <Link href="/" className="text-cyan-600 hover:text-cyan-700 font-medium">
                                ← Volver al inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
