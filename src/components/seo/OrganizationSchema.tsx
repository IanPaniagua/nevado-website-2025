export function OrganizationSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "NEVADO",
        "description": "Proveedor líder de carbonato de calcio micronizado en Perú. Certificación ISO 9001:2015.",
        "url": "https://nevado-website-2025.vercel.app",
        "logo": "https://nevado-website-2025.vercel.app/logo.png",
        "image": "https://nevado-website-2025.vercel.app/hero-bg.png",
        "telephone": "+51994286955",
        "email": "inv.nevadosac@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Sinchi Roca Mz M lote 6 El Pedregal Jicamarca",
            "addressLocality": "San Juan de Lurigancho",
            "addressRegion": "Lima",
            "addressCountry": "PE"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Peru"
        },
        "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "certification",
            "name": "ISO 9001:2015"
        },
        "makesOffer": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Product",
                    "name": "Carbonato de Calcio Micronizado",
                    "description": "Carbonato de calcio de alta pureza para industrias químicas y manufactureras"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
