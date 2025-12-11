# NEVADO - Carbonato de Calcio de Alta Pureza

Sitio web corporativo de NEVADO, proveedor líder de carbonato de calcio micronizado en Perú.

## 🚀 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Email**: Resend
- **Analytics**: Google Analytics 4
- **Certificación**: ISO 9001:2015

## 📋 Características

- ✅ Diseño responsive y moderno
- ✅ SEO optimizado para mercado peruano e internacional
- ✅ Formulario de contacto con envío de emails
- ✅ Catálogo de productos con especificaciones técnicas
- ✅ Google Analytics con consentimiento de cookies
- ✅ Política de privacidad conforme a Ley N° 29733 (Perú)
- ✅ Animaciones suaves y efectos visuales
- ✅ Menú móvil funcional

## 🛠️ Instalación

```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tu RESEND_API_KEY

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Generar documentación
npm run docs
```

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router (Next.js 15)
│   ├── api/               # API Routes
│   │   └── contact/       # Endpoint de contacto
│   ├── politica-privacidad/ # Página de privacidad
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Generación de sitemap
│   └── robots.ts          # Configuración robots.txt
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Hero, About, Products, Contact
│   ├── ui/                # Componentes shadcn/ui
│   ├── analytics/         # Google Analytics + Cookie Consent
│   └── seo/               # Schema.org structured data
├── data/                  # JSON data files
│   ├── products.json      # Catálogo de productos
│   └── company.json       # Información de la empresa
└── types/                 # TypeScript types

public/
├── logo.png              # Logo NEVADO
├── hero-bg.png           # Imagen de fondo hero
└── product-nevado.png    # Imagen de productos
```

## 🔑 Variables de Entorno

```env
RESEND_API_KEY=re_xxxxxxxxxxxxx  # API key de Resend para emails
```

## 📧 Configuración de Email

El formulario de contacto utiliza [Resend](https://resend.com) para enviar emails:

1. Crear cuenta en Resend
2. Obtener API key
3. Agregar a `.env.local`
4. Para producción: Verificar dominio en Resend

**Nota**: En desarrollo, los emails solo se envían a direcciones verificadas.

## 📊 Google Analytics

1. Crear propiedad GA4
2. Obtener Measurement ID (G-XXXXXXXXXX)
3. Actualizar en `src/components/analytics/Analytics.tsx`

## 🎨 Paleta de Colores

- **Primary (Navy Blue)**: `#1e3a8a`
- **Accent (Cyan)**: `#0ea5e9`
- **Background**: `#ffffff`
- **Muted**: `#f1f5f9`

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🚢 Despliegue en Vercel

Ver guía completa en [DEPLOY_VERCEL.md](./DEPLOY_VERCEL.md)

```bash
# Push a GitHub
git add .
git commit -m "Ready for deployment"
git push origin main

# En Vercel:
# 1. Importar repositorio
# 2. Agregar RESEND_API_KEY en Environment Variables
# 3. Deploy
```

## 📖 Documentación Técnica

Generar documentación con TypeDoc:

```bash
npm run docs
```

La documentación se generará en la carpeta `docs/` y puede ser visualizada abriendo `docs/index.html`.

## 🧪 Testing

```bash
# Lint
npm run lint

# Build test
npm run build
```

## 📄 Licencia

© 2024 NEVADO. Todos los derechos reservados.

## 📞 Contacto

- **Email**: inv.nevadosac@gmail.com
- **Teléfono**: +51 994286955
- **Dirección**: Av. Sinchi Roca Mz M lote 6 El Pedregal Jicamarca S.J.L, Perú
- **Certificación**: ISO 9001:2015

---

Desarrollado con ❤️ usando Next.js y TypeScript
