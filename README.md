# SERVITEK — Sitio Web Corporativo

Sitio web profesional para SERVITEK, empresa paraguaya de ingeniería eléctrica, electromecánica y servicios industriales.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Lucide React** - Iconografía

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/servitek-web.git

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
npm run dev      # Desarrollo local
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
npm run lint     # Verificar código
npm run format   # Formatear código
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
  contact: {
    phone: "+595XXXXXXXX",
    whatsapp: "+595XXXXXXXX",
    email: "info@servitek.com.py",
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

**Nota:** Todo el contenido está en `src/data/`. No es necesario tocar componentes.

## Cómo Cambiar Imágenes

1. Colocar imagen en `/public/images/`
2. Actualizar la ruta en el archivo de datos correspondiente

### Estructura de imágenes

```
/public/images/
├── logo/       # Logos
├── hero/       # Hero principal
├── services/   # Servicios
├── sectors/    # Sectores
├── projects/   # Proyectos
└── company/    # Institucional
```

## Cómo Cambiar el WhatsApp

Editar **solo** en `src/data/company.ts`:

```typescript
contact: {
  whatsapp: "+595XXXXXXXX",  // ← Cambiar aquí
}
```

No tocar ningún otro archivo.

## Despliegue en Vercel

1. Subir repositorio a GitHub
2. Conectar repositorio en Vercel
3. Deploy automático

### Variables de entorno (opcional)

Copiar `.env.example` a `.env` y configurar si es necesario.

## SEO

- Título: Editar en `src/app/layout.tsx`
- Meta description: Editar en `src/app/layout.tsx`
- Sitemap: `public/sitemap.xml`
- Robots: `public/robots.txt`

## Accesibilidad

- Labels en formularios
- Alt text en imágenes
- Focus states visibles
- Navegación por teclado

## Soporte

Para problemas o consultas, abrir un issue en GitHub.
