# Hernández Abogados — landing de demostración

Landing de una sola página para un despacho de abogados ficticio de Valencia. Está construida con
[Astro](https://astro.build) y TypeScript, sin framework de UI, y genera un sitio estático que puede
publicarse en GitHub Pages, Netlify o Cloudflare Pages sin configuración adicional.

> **Aviso:** el despacho, las personas, las cifras, los casos y los datos de contacto son inventados.
> La web incluye una franja de demostración, `noindex` y un `robots.txt` que bloquea su indexación.

---

## Puesta en marcha

Requisitos: Node.js 24 con el npm que lo acompaña (hay un `.nvmrc`). El workflow instala con
`npm install` para evitar un fallo conocido de `npm ci` con dependencias opcionales wasm32 cuando
el lockfile se genera en Windows.

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:4321
npm run build     # comprobación de tipos + build estático en dist/
npm run preview   # sirve el resultado de dist/
```

`npm run build` ejecuta `astro check` antes de compilar, por lo que un error de TypeScript o de
plantilla hace fallar el build.

---

## Estructura

```text
src/
├─ assets/                 imágenes locales (optimizadas por Astro)
├─ components/             DemoBar, Header, Hero, Stats, Manifesto, Areas, Cases,
│                          Team, Process, Faq, Contact, Footer, Icon
├─ data/site.ts            TODO el contenido editable: despacho, áreas, casos,
│                          equipo, FAQs, canales de contacto y navegación
├─ layouts/BaseLayout.astro fuentes, metadatos, Open Graph, animaciones de entrada
├─ pages/
│  ├─ index.astro          landing y datos estructurados LegalService
│  └─ legal.astro          aviso legal, privacidad y cookies
└─ styles/global.css       sistema de diseño completo y reglas responsive
public/
├─ favicon.svg
├─ og.jpg                  imagen social 1200 × 630
└─ robots.txt
```

### Editar contenido

Casi todos los textos están en `src/data/site.ts`:

- `site`: nombre, dirección, teléfono, fax, correo, horario, colegiación, LinkedIn.
- `areas`: cinco áreas de práctica con descripción y servicios.
- `cases`: casos representativos anonimizados.
- `lawyers`: socios, formación y áreas.
- `faqs`: preguntas frecuentes.
- `channels`: canales que aparecen en la sección de contacto.

Los textos legales están en `src/pages/legal.astro` y los microcopy de cada sección en su componente
correspondiente (`src/components/`).

### Imágenes

Sustituye los archivos de `src/assets/` manteniendo los nombres, o actualiza los imports:

| Archivo | Uso |
| --- | --- |
| `hero-library.jpg` | fondo del hero |
| `despacho-library.jpg` | bloque «El despacho» |
| `retrato-alvaro.jpg`, `retrato-javier.jpg` | retratos del equipo |

Astro genera versiones optimizadas en el build. Las imágenes actuales proceden de Unsplash y se
incluyen como material de demostración: si publicas el sitio, comprueba la licencia de cada foto o
sustitúyelas por imágenes propias o con licencia explícita.

La imagen social `public/og.jpg` (1200 × 630) se generó a partir del diseño del hero. Para cambiarla,
sustituye el archivo manteniendo el nombre; `BaseLayout.astro` la referencia automáticamente.

### Tipografía y color

- Titulares: **Bodoni Moda Variable**; texto: **Libre Franklin Variable**.
- Ambas fuentes se sirven en local con Fontsource (`@fontsource-variable/...`), sin peticiones a
  Google Fonts.
- La paleta es monocroma: casi negro (`#0a0a0a`), papel (`#f3f0e9`) y grises cálidos. Los tokens
  están al principio de `src/styles/global.css`.

---

## Formulario de contacto

El formulario es **solo de interfaz**: valida los campos en el navegador, muestra un mensaje de
demostración y no envía nada a ningún servidor. El envío se intercepta en el script de
`src/components/Contact.astro`.

Para conectarlo a un servicio real:

1. **Netlify Forms**: añade `name="contacto"`, `data-netlify="true"` y un campo oculto
   `form-name` al `<form>`; Netlify detecta el formulario en el build.
2. **Formspree u otro endpoint**: cambia `action` por la URL del servicio y elimina el
   `event.preventDefault()` del script.
3. **API propia**: envía los datos con `fetch()` desde el manejador de `submit` y muestra el estado
   de éxito o error en `[data-form-status]`.

Al activar un envío real, actualiza la política de privacidad, el plazo de conservación y el texto
del consentimiento. Los textos legales incluidos son una plantilla orientativa y deben revisarse por
un profesional antes de publicar.

---

## Publicación

### GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica en cada push a `main`.

1. Sube el repositorio a GitHub.
2. En **Settings → Pages**, elige **GitHub Actions** como origen.
3. El workflow calcula por defecto:
   - `BASE_PATH=/nombre-del-repositorio` (para `usuario.github.io/nombre-del-repositorio`).
   - `SITE_URL=https://usuario.github.io`.
4. Si publicas en `usuario.github.io` o en un dominio propio, define en **Settings → Secrets and
   variables → Actions → Variables**:
   - `BASE_PATH` = `/`
   - `SITE_URL` = `https://tu-dominio.com`

El `base` se aplica a assets, enlaces internos, canonical y Open Graph, así que la subcarpeta
funciona sin retoques manuales.

### Netlify

Conecta el repositorio y Netlify leerá `netlify.toml` (build `npm run build`, publish `dist`, Node 24
y cabeceras de seguridad). También puedes desplegar manualmente:

```bash
npm run build
npx netlify deploy --prod --dir=dist
```

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 24

`wrangler.jsonc` ya apunta a `./dist`, por lo que también vale:

```bash
npm run build
npx wrangler pages deploy dist
```

### Dominio propio

Define `BASE_PATH=/` y `SITE_URL=https://www.tudominio.es` en el proveedor. El canonical y las
imágenes sociales se generan con ese valor.

---

## Qué quitar para convertirla en una web real

1. Elimina `<DemoBar />` de `src/pages/index.astro` y el componente si no lo necesitas.
2. Pon `noindex={false}` (o elimina la prop) en las páginas y cambia `public/robots.txt` a
   `Allow: /`.
3. Retira los textos «Landing de demostración» del pie y la nota de demostración de `legal.astro`.
4. Sustituye los datos ficticios de `src/data/site.ts`, los casos y el LinkedIn (`#`).
5. Sustituye retratos e imágenes por material propio y retira la nota de «retratos de archivo».
6. Conecta el formulario y actualiza los textos legales.
7. Revisa el aviso legal, la privacidad y las cookies con un profesional.

---

## Accesibilidad y SEO

- Enlace «Saltar al contenido», jerarquía de encabezados y etiquetas `aria` en menú, acordeones y
  formulario.
- Foco visible, navegación por teclado y cierre del menú móvil con `Escape`.
- Animaciones de entrada desactivadas con `prefers-reduced-motion`.
- Datos estructurados `LegalService` en `index.astro`.
- Metadatos Open Graph/Twitter y canonical dependientes de `SITE_URL` y `BASE_PATH`.
- Imágenes con texto alternativo; los retratos se identifican como material ilustrativo.

---

## Créditos

- Diseño y desarrollo: landing de demostración con Astro.
- Fotografías: [Unsplash](https://unsplash.com) (uso ilustrativo; consulta la licencia de cada
  imagen).
- Tipografías: Bodoni Moda y Libre Franklin, distribuidas por Fontsource con licencia SIL Open Font.
