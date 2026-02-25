# Propuesta de Diseño: René Dorsch

## Identidad
René es un puente entre lo físico y lo digital. Empezó como aprendiz de metalurgia en el negocio familiar (Metallbau Dorsch GmbH), y hoy investiga cómo conectar objetos físicos a la web semántica en Fraunhofer IIS. Su trayectoria de herrero → PhD en Web of Things NO es una contradicción — es su superpoder. Construye puentes: entre máquinas y datos, entre la academia y la industria, entre lo tangible y lo abstracto. Su hobby de forja no es accidental — sigue trabajando con las manos igual que a los 16.

## Audiencia
- **Colegas académicos / conferencias:** Buscan publicaciones, research interests, colaboraciones
- **Industry recruiters (Fraunhofer, Siemens, BMW-level):** Buscan credenciales, experiencia, skills técnicos
- **PhD committees / grant reviewers:** Buscan output académico, impacto, rigor
- **Curious visitors:** La historia metalworker→PhD es un hook poderoso

## Metáfora Visual
Su mundo es un **grafo** — nodos conectados, branches que divergen y convergen. Knowledge Graphs, gitgraph timelines, redes semánticas. Limpio como un paper académico, pero con la solidez orgánica del metal forjado. Los colores que eligió (#C8CECC grey-white, #3F3633 dark, #ABDB95 green) evocan exactamente eso: acero pulido con un toque de naturaleza/crecimiento.

## Paleta (derivada de sus colores)
```
primaryDark:  #2E2A27  — Darker variant of his #3F3633 for deep headers/footer
primary:      #3F3633  — His chosen text color, warm charcoal
primaryLight: #6B6460  — Mid-tone for secondary text/borders
accent:       #ABDB95  — His green, organic growth (skills, highlights, links)
surface:      #C8CECC  — His background, cool light grey
surfaceLight: #F0F2F1  — Near-white for hero/light sections
```
- Esquema análogo frío: warm-grey primary + green accent = naturaleza sobre piedra
- Contraste: #3F3633 sobre #F0F2F1 = ratio ~10:1 (WCAG AAA)
- Accent #ABDB95 sobre #2E2A27 = ratio ~7.5:1 (WCAG AAA)

## Tipografía
- **Headings:** Space Grotesk (modern, geometric, tech-forward — como lucek.ai ref)
- **Body:** IBM Plex Sans (limpio, legible, académico sin ser aburrido)
- **Code/Data:** JetBrains Mono (para timeline labels, publication IDs)
- Justificación: Space Grotesk evoca precisión ingenieril. IBM Plex Sans es la intersección perfecta entre academia y tech. JetBrains Mono para datos estructura el contenido técnico.

## Estructura: Multi-Page (4 páginas)

El cliente pidió explícitamente multi-page con navegación tipo ruben.verborgh.org.
Navegación principal como tabs/pills: **Main** | **Professional** | **Writer** | **Creator**

---

### PAGE 1: Main (index.astro) — "The Hub"

#### 1.1 Hero
```
┌─────────────────────────────────────┐
│  [foto circular]                    │
│  René Dorsch                        │
│  Research Associate · IoT & KG      │
│                                     │
│  [LinkedIn] [GitHub] [dblp] [ORCID] │
│                                     │
│  [ Professional | Writer | Creator ]│
└─────────────────────────────────────┘
```
- Foto circular con border sutil en accent green
- Nombre en Space Grotesk 700, grande
- Headline concisa
- Social links como iconos monocromáticos
- Page navigation pills debajo

#### 1.2 Skills Graph (Ref: Dribbble AI Engineer shot)
```
┌─────────────────────────────────────┐
│  SKILLS                             │
│                                     │
│  ┌─────────┐ ┌─────────┐ ┌────────┐│
│  │ Semantic │ │   IoT   │ │  ML /  ││
│  │   Web    │ │  & WoT  │ │  LLMs  ││
│  │ ●●●●●○  │ │ ●●●●●○  │ │ ●●●●○○ ││
│  │ RDF     │ │ BLE     │ │ NER    ││
│  │ SPARQL  │ │ MQTT    │ │ KG-QA  ││
│  │ SHACL   │ │ Solid   │ │ LLM    ││
│  │ OWL     │ │ WoT TD  │ │ RAG    ││
│  └─────────┘ └─────────┘ └────────┘│
│  ┌─────────┐ ┌─────────┐ ┌────────┐│
│  │  Prog.  │ │   CAD   │ │  Data  ││
│  │ Python  │ │ NX/Creo │ │ SQL    ││
│  │ Java    │ │ 3D Print│ │ GraphDB││
│  │ TS/JS   │ │ Slicer  │ │ Dataiku││
│  └─────────┘ └─────────┘ └────────┘│
└─────────────────────────────────────┘
```
- Cards con categorías de skills
- Dot-rating o bar visualization para proficiency
- Hover reveals description

#### 1.3 Gitgraph Timeline (UNIQUE COMPONENT — key differentiator)
```
┌─────────────────────────────────────────────┐
│  TIMELINE                                    │
│                                              │
│  education ──●──●──●──●──────●──●──●──●─★   │
│              │     │         │     │         │
│  work    ────┤     ├──●──●──┤     ├──●──►   │
│              │     │         │              │
│  2007   2011 2015  2017 2019 2021 2022 2024 │
│                                              │
│  ● = commit (event)                          │
│  ★ = PhD (highlight)                         │
│  Branches merge/diverge like git             │
└─────────────────────────────────────────────┘
```
- SVG/CSS custom gitgraph with 2 branches: education (top) + work (bottom)
- Each "commit" dot is clickable/hoverable → shows event details
- PhD commit has star/highlight treatment
- Scroll-triggered draw animation (branches draw as user scrolls)
- Mobile: vertical layout, branches stack

#### 1.4 Recent Activity (optional — if data available)
- Latest 3-4 publications or GitHub commits
- Cards with date + title + venue/repo

---

### PAGE 2: Professional (professional.astro) — "The Researcher & Engineer"

#### 2.1 Research Experience
```
┌─────────────────────────────────────┐
│  RESEARCH                           │
│                                     │
│  Fraunhofer IIS                     │
│  Dataspaces & IoT Solutions         │
│  Research Associate · Mar 2022–now  │
│  ─────────────────────────────────  │
│  Focus areas:                       │
│  • Knowledge Engineering            │
│  • Web of Things (WoT)              │
│  • Solid Protocol                   │
│  • Knowledge Graphs & Ontologies    │
│                                     │
│  Awards:                            │
│  🏆 Best Paper — KGSWC 2024        │
│  🏆 Best Workshop Paper — ICPM 2023│
│                                     │
│  PhD (External)                     │
│  FAU Erlangen-Nürnberg              │
│  Chair of Technical Information Sys │
│  Advisor: Prof. Dr. Andreas Harth   │
│  Topic: Discovery in CPS            │
└─────────────────────────────────────┘
```

#### 2.2 Industry Experience
```
┌─────────────────────────────────────┐
│  INDUSTRY                           │
│                                     │
│  ┌─── Siemens ────────────────────┐ │
│  │ QM Intern · Oct–Dec 2021      │ │
│  │ Smart Infrastructure, Amberg   │ │
│  └────────────────────────────────┘ │
│  ┌─── Fraunhofer SCS ────────────┐ │
│  │ Student RA · Jun 2018–Oct 2021│ │
│  │ Knowledge Management           │ │
│  └────────────────────────────────┘ │
│  ┌─── High-Octane Motorsports ───┐ │
│  │ Component Lead · 2019–2022    │ │
│  │ Pedal Assembly (Formula Stud.)│ │
│  └────────────────────────────────┘ │
│  ┌─── FutureLng ─────────────────┐ │
│  │ Student RA · Jul 2017–Jun 2018│ │
│  │ Market Research                │ │
│  └────────────────────────────────┘ │
│  ┌─── Metallbau Dorsch GmbH ────┐ │
│  │ Metalworker · 2007–2015      │ │
│  │ Apprenticeship + Fachkraft    │ │
│  └────────────────────────────────┘ │
└─────────────────────────────────────┘
```
- Cards con logo/icono de empresa
- Hover para expandir detalles

#### 2.3 Education
- Grid de 2 columnas con las 5+ formaciones
- Grades destacadas (1.4, 1.5, 1.7 Top 10%)

---

### PAGE 3: Writer (writer.astro) — "The Publisher"

#### 3.1 Publication Stats
```
┌─────────────────────────────────────┐
│  14+        2          4+           │
│  Papers     Awards     Venues       │
└─────────────────────────────────────┘
```

#### 3.2 Publications List
```
┌─────────────────────────────────────┐
│  2025                               │
│  ┌────────────────────────────────┐ │
│  │ 🏆 "Enriching RDF Data..."   │ │
│  │ KGSWC 2024 · Best Paper      │ │
│  │ Freund, Schmid, Wehr, Harth  │ │
│  │ [dblp] [PDF]                 │ │
│  └────────────────────────────────┘ │
│  ┌────────────────────────────────┐ │
│  │ "FlexRML: A Flexible..."     │ │
│  │ ESWC 2024                    │ │
│  │ Freund, Schmid, Harth        │ │
│  │ [dblp] [PDF]                 │ │
│  └────────────────────────────────┘ │
│  ...                                │
└─────────────────────────────────────┘
```
- Grouped by year (2025, 2024, 2023)
- Award papers get highlighted with accent border
- Each card: title, venue, co-authors, links
- Filter/tag by topic (optional): KG, IoT, WoT, LLM, Process Mining

---

### PAGE 4: Creator (creator.astro) — "The Maker"

#### 4.1 Intro
"From metalworker apprentice to PhD researcher — I never stopped building with my hands."

#### 4.2 Forging
```
┌─────────────────────────────────────┐
│  FORGING                            │
│  ┌──────────┐ ┌──────────┐         │
│  │ [photo]  │ │ [photo]  │         │
│  │ Knife    │ │ Tool     │         │
│  └──────────┘ └──────────┘         │
│  Description of metalworking craft  │
│  Connection to family business      │
└─────────────────────────────────────┘
```

#### 4.3 3D Modelling & Printing
```
┌─────────────────────────────────────┐
│  3D PRINTING                        │
│  ┌──────────┐ ┌──────────┐         │
│  │ [render] │ │ [print]  │         │
│  │ Model A  │ │ Model B  │         │
│  └──────────┘ └──────────┘         │
│  Tools: Siemens NX, Creo, Cura,    │
│  Orca Slicer                        │
└─────────────────────────────────────┘
```
- Photo gallery/grid (placeholder cards if no images yet)
- Connection to his engineering background

---

## Secciones que NO incluir
- **Services/CTA:** No es freelancer, es investigador — no vende servicios directamente
- **Testimonials/Reviews:** No aplica para un perfil académico
- **Blog (por ahora):** No lo pidió, aunque podría ser un addon futuro
- **Generic "About Me":** La historia está en el Timeline + Creator page, no en un párrafo genérico

## Efectos Visuales Únicos (Premium differentiators)
1. **Gitgraph Timeline** (SVG animated) — branches de education/work que se dibujan al scrollear. NINGÚN otro portfolio tiene esto.
2. **Multi-page navigation** como ruben.verborgh.org — tabs que cambian de página
3. **Publication cards** con highlight treatment para Best Paper awards
4. **Skills grouped cards** con dot/bar proficiency indicators

## Motion Design
- Scroll reveal sutiles (fade-up, developer profile = subtlety)
- Gitgraph draw animation (líneas se dibujan progresivamente)
- Card hover: slight lift + shadow
- Page transitions: smooth (si multi-page con view transitions API)
- prefers-reduced-motion: solo opacity

## Idioma del Portfolio
- **English** (audiencia internacional, academia/industria global)

## Dominio
- **dorene.org** (ya lo tiene — configurar DNS post-deploy)
