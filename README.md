# SERVITEK — Sitio Web Corporativo

Sitio web profesional para SERVITEK, empresa paraguaya de ingeniería eléctrica, electromecánica y servicios industriales.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Iconografía
- **React Hook Form + Zod** - Formularios y validación
- **next-sitemap** - Generación de sitemap y robots.txt
- **Vitest** - Tests de datos, rutas y SEO

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/ivan99vera1-wq/servitek-web.git

# Entrar al directorio
cd servitek-web

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

```bash
npm run dev        # Desarrollo local
npm run build      # Build estático (genera out/ y, tras él, sitemap y robots)
npm run lint       # ESLint
npm run typecheck  # TypeScript sin emitir
npm test           # Tests de datos y SEO (vitest)
npm run check      # typecheck + lint + test, lo mismo que ejecuta el CI
npm run format     # Prettier
```

## Estructura del Proyecto

```
src/
├── app/              # Páginas (App Router)
├── components/       # Componentes reutilizables
├── data/             # Contenido centralizado
├── lib/              # Utilidades
├── types/            # Definiciones TypeScript
└── styles/           # Estilos globales
```

## Cómo Modificar el Contenido

### Cambiar información de la empresa

Editar `src/data/company.ts`:

```typescript
export const company = {
  name: "SERVITEK",
  legalName: "SERVITEK E.A.S.",
  ruc: "80176311-8",
  contact: {
    phone: "+595981118743",
    whatsapp: "+595981118743",
    email: "servitek.py@gmail.com",
  }
}
```

### Cambiar servicios

Editar `src/data/services.ts`

### Cambiar sectores

Editar `src/data/sectors.ts`

### Cambiar proyectos

Editar `src/data/projects.ts`

### Cambiar navegación

Editar `src/data/navigation.ts`

### Cambiar contenido de "Nosotros"

Editar `src/data/company-content.ts`

**Nota:** Todo el contenido está en `src/data/`. No es necesario tocar componentes.

## Cómo Cambiar Imágenes

1. Colocar imagen en `/public/images/`
2. Actualizar la ruta en el archivo de datos correspondiente

### Estructura de imágenes

```
/public/images/
├── logo/       # Logos optimizados
├── hero/       # Hero principal
├── services/   # Servicios
├── sectors/    # Sectores
├── projects/   # Proyectos
└── company/    # Institucional
```

**Importante:** Las imágenes se optimizan manualmente antes de subir (WebP, tamaño correcto) ya que Cloudflare Pages free no tiene optimización on-demand.

## Cómo Cambiar el WhatsApp

Editar **solo** en `src/data/company.ts`:

```typescript
contact: {
  whatsapp: "+595981118743",  // ← Cambiar aquí
}
```

No tocar ningún otro archivo.

## Despliegue en Cloudflare Pages

### Por qué Cloudflare Pages

El plan gratuito de Vercel (Hobby) restringe sitios comerciales. Cloudflare Pages permite uso comercial con ancho de banda ilimitado.

**Nota:** Cloudflare Pages Functions **sí** está incluido en el plan gratuito
(100.000 peticiones/día). Hoy el sitio no usa ninguna, pero es la vía
recomendada si en algún momento el formulario debe enviar por email en lugar
de abrir WhatsApp.

### Pasos

1. Subir repositorio a GitHub
2. Conectar repositorio en [Cloudflare Pages](https://dash.cloudflare.com/)
3. Configurar build:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node.js version:** 18+
4. Variables de entorno en Cloudflare Dashboard:

```env
# Vacía mientras no haya dominio propio: se usa el valor por defecto.
NEXT_PUBLIC_SITE_URL=
# Mantener en false hasta conectar el dominio definitivo.
NEXT_PUBLIC_ALLOW_INDEXING=false
# Opcional. Activarlo instala cookies: exige banner de consentimiento.
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

5. Dominio personalizado vía Cloudflare DNS

### Variables de entorno

Copiar `.env.example` a `.env` para desarrollo local:

```env
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ALLOW_INDEXING=false
# NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # Opcional
```

## SEO

- Título: Editar en `src/app/layout.tsx`
- Meta description: Editar en `src/app/layout.tsx`
- Sitemap: Generado automáticamente con `next-sitemap`
- Robots: Generado automáticamente con `next-sitemap`
- Schema.org: Configurado en `src/lib/schema.ts`

## Accesibilidad

- Labels en formularios
- Alt text en imágenes
- Focus states visibles
- Navegación por teclado
- Respeto a `prefers-reduced-motion`

## Soporte

Para problemas o consultas, abrir un issue en GitHub.
