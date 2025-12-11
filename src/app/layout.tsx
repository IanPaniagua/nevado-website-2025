import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AnalyticsWrapper, CookieConsent } from "@/components/analytics/Analytics";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'NEVADO - Carbonato de Calcio de Alta Pureza | Perú',
    template: '%s | NEVADO'
  },
  description: 'Proveedor líder de carbonato de calcio micronizado en Perú. Certificación ISO 9001:2015. Insumos minerales para industrias químicas, pinturas, PVC y más',
  keywords: [
    'carbonato de calcio',
    'carbonato de calcio Peru',
    'calcium carbonate Peru',
    'ISO 9001:2015',
    'insumos minerales',
    'micronizado',
    'TANDOLIN',
    'TANFIN',
    'TIZA',
    'industria química',
    'pinturas',
    'PVC',
    'Lima Peru'
  ],
  authors: [{ name: 'NEVADO' }],
  creator: 'NEVADO',
  publisher: 'NEVADO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nevado-website-2025.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'NEVADO - Carbonato de Calcio de Alta Pureza | Perú',
    description: 'Proveedor líder de carbonato de calcio micronizado en Perú. Certificación ISO 9001:2015.',
    url: 'https://nevado-website-2025.vercel.app',
    siteName: 'NEVADO',
    locale: 'es_PE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEVADO - Carbonato de Calcio de Alta Pureza',
    description: 'Proveedor líder de carbonato de calcio micronizado en Perú. ISO 9001:2015 certificado.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // User should replace this
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationSchema />
        {children}
        <CookieConsent />
        <AnalyticsWrapper />
      </body>
    </html>
  );
}
