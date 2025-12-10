# Guía de Despliegue en Vercel

Dado que ya has subido tu código a GitHub, la forma más robusta de desplegar es conectando tu repositorio con Vercel.

## Pasos para Desplegar

1.  **Inicia Sesión en Vercel**: Ve a [vercel.com](https://vercel.com) e inicia sesión (preferiblemente con tu cuenta de GitHub).
2.  **Nuevo Proyecto**: Haz clic en el botón "Add New..." y selecciona "Project".
3.  **Importar Repositorio**:
    *   Verás una lista de tus repositorios de GitHub.
    *   Busca `nevado-website-2025` y haz clic en **Import**.
4.  **Configurar Proyecto**:
    *   Framework Preset: `Next.js` (se detectará automáticamente).
    *   Root Directory: `./` (automático).
5.  **Variables de Entorno (IMPORTANTE)**:
    *   Despliega la sección **Environment Variables**.
    *   Aquí debes agregar tu clave de Resend para que el formulario funcione en producción.
    *   **Key**: `RESEND_API_KEY`
    *   **Value**: `re_AKKhAabk_6Dcw6pef5a8qKy2L7SoC8fKi` (o la clave real si generas una de producción).
6.  **Desplegar**: Haz clic en **Deploy**.

## Verificar Despliegue

Vercel construirá tu proyecto. Una vez termine:
*   Te dará una URL (ej. `nevado-website-2025.vercel.app`).
*   Entra y prueba el formulario de contacto para asegurarte de que las variables de entorno están funcionando.

## Actualizaciones Futuras

Como has vinculado GitHub, cada vez que hagas un `git push origin main`, Vercel actualizará automáticamente tu sitio web.
