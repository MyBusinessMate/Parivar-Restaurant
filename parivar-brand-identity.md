# Parivar Restaurant — Brand Identity & Design System Specification

> **Purpose**: This specification translates the visual brand guidelines of **Parivar Restaurant** into a modern, 8-panel modular brand board / portfolio showcase (matching the 3×3 bento layout shown in the reference image). Any AI coding agent can follow this document to implement the interactive brand identity component or dedicated route (`/brand` or section).

---

## 1. High-Level Grid Architecture (Reference Layout Match)

The showcase is structured inside an outer rounded dark/charcoal container with a top-level signature footer bar:

```
+---------------------------------------------------------------------------------------------------+
|  [00. Hero Cover Poster]           | [01. Brand Overview]          | [02. Logo System]            |
|  - Brandmark / Wordmark Giant      | - Philosophy & Story          | - Primary lockup             |
|  - Tagline & Kit Ver 1.0           | - 3D/Macro Focal Asset        | - Dark/Light/Icon/Clearance  |
+------------------------------------+-------------------------------+------------------------------+
|  [03. Color System]                | [04. Typography Hierarchy]    | [05. Visual Language / Mood] |
|  - 6 Swatch Tiles (Forest, Gold,   | - Specimen "AaBbCc 123"       | - 5-shot photo/texture collage|
|    Maroon, Cream, Saffron, Charcoal| - Weights: 400, 600, 700      | - Spices, dining, plating    |
+------------------------------------+-------------------------------+------------------------------+
|  [06. Signature Menu Exploration]  | [07. Packaging & Takeaway]    | [08. Digital & Collateral]   |
|  - 5 Illustrated / circular cards  | - Eco kraft boxes & brass tins| - Mobile App, Billboard,     |
|  - Feature specs / tags            | - Foil stamped luxury bag     |   Staff Apron, Menu Card     |
+---------------------------------------------------------------------------------------------------+
| FOOTER BAR: [PARIVAR]         TRADITION MEETS OPULENCE * CRAFTED WITH SOUL          parivar.restaurant|
+---------------------------------------------------------------------------------------------------+
```

---

## 2. Detailed Panel Specifications

### Panel 00: Hero Cover Poster (Top Left)
- **Background**: Deep Heritage Forest Green (`#163323` / `oklch(0.32 0.09 155)`) or Radiant Saffron Gold (`#C87D19`).
- **Header Elements**:
  - Top-left: Small subtitle badge: `BRAND KIT`
  - Top-right: Version tracker: `VERSION 1.0`
- **Main Hero**:
  - Large display typography: **PARIVAR** (Custom Serif / Cormorant Garamond, tracking uppercase).
  - Centerpiece visual: 3D rendered signature copper handi / brass spice mortar with subtle ember smoke glow or vibrant gold swirl.
- **Bottom Metadata**:
  - `TRADITION REIMAGINED.` / `SERVED OBSESSIVELY.`
  - Direct domain link: `parivar.restaurant`

---

### Panel 01: Brand Overview (Top Center)
- **Background**: Dark Matte Obsidian (`#0F1511`) with subtle border divider.
- **Header**: `01 / BRAND OVERVIEW`
- **Body Copy**:
  > *"Parivar is a luxury Indian culinary house where ancient royal recipes meet contemporary gastronomic finesse. We craft dining experiences that spark warmth, connection, and nostalgia. Our world is rich, aromatic, and celebratory."*
- **Visual Accent**: Floating 3D hand holding a gilded cardamom pod or slow-motion drizzle of saffron honey onto a golden dessert, encircled by glowing gold rim.
- **Micro-Tag**: `PARIVAR BRAND KIT • SECTION 1.0`

---

### Panel 02: Logo System & Clearspace (Top Right)
- **Background**: Clean Warm Cream (`#F9F6EE`).
- **Header**: `02 / LOGO SYSTEM & MARKS`
- **Main Lockup**:
  - Primary vector logo: **PARIVAR** in Cormorant Display with refined kerning and decorative floral/peacock flourish icon.
- **Sub-Grid / Variations**:
  1. **Primary Dark**: Forest text on Cream background.
  2. **Inverted**: Cream text on Forest Green tile.
  3. **Gold Monogram Mark**: Royal 'P' emblem inside ornamental jali medallion.
  4. **Clear Space Grid**: Logo surrounded by bounding box showing `X` unit margin clearance guidelines.

---

### Panel 03: Color System (Middle Left)
- **Background**: Deep Black/Charcoal canvas (`#121413`).
- **Header**: `03 / COLOR SYSTEM`
- **Mission Statement**: *"Our palette reflects the richness of Indian spices, regal palace courtyards, and warm terracotta hearths."*
- **Palette Grid (6 Swatches with Hex & OKLCH)**:
  1. **Royal Forest Green**: `#1A3B2B` | `oklch(0.32 0.09 155)` — Brand Foundation
  2. **Copper Gold**: `#C87D19` | `oklch(0.72 0.14 70)` — Warm Accent & Accents
  3. **Imperial Maroon**: `#5C1D24` | `oklch(0.38 0.14 22)` — Heritage & Passion
  4. **Warm Ivory Cream**: `#FAF6F0` | `oklch(0.95 0.04 75)` — Light Base Surface
  5. **Saffron Bloom**: `#E66A1F` | `oklch(0.68 0.18 50)` — Zest & Highlighting
  6. **Charcoal Obsidian**: `#121614` | `oklch(0.18 0.02 150)` — Contrast & Typography

---

### Panel 04: Typography Hierarchy (Middle Center)
- **Background**: Soft Stone White (`#FBFBF9`).
- **Header**: `04 / TYPOGRAPHY` (Top-right label: `PRIMARY: CORMORANT GARAMOND | SECONDARY: INTER`)
- **Main Specimen**:
  - Gigantic Display: **AaBbCc 123**
  - Font: `Cormorant Garamond` (Light 300, Regular 400, Bold 700)
- **Usage & Weights Matrix**:
  - Display / Headlines: `Cormorant Garamond SemiBold` -> **"HONOURING THE TABLE."**
  - Subheadings & Labels: `Inter Medium / 600 Uppercase` -> **"SLOW-COOKED DUM TRADITION."**
  - Body & Micro-text: `Inter Regular 400` -> Clean legible 14px/22px line height.

---

### Panel 05: Visual Language & Mood (Middle Right)
- **Background**: Dark Minimalist Base (`#0B0E0C`).
- **Header**: `05 / VISUAL LANGUAGE`
- **Philosophy**: *"Rich macro food photography, warm candlelight low-key shadows, tactile brass textures, and authentic culinary theater."*
- **Collage Grid (Bento cluster of 4-5 photos)**:
  - Photo 1: Fiery tandoor skewers radiating copper embers.
  - Photo 2: Macro shot of star anise, crushed saffron threads, and cardamom on stone.
  - Photo 3: Silky pour of aromatic saffron biryani gravy into a copper handi.
  - Photo 4: Guests laughing around an opulent candlelight table setting.
  - Photo 5: Close up of delicate gold leaf applied over royal Shahi Tukda dessert.

---

### Panel 06: Product / Signature Dishes Exploration (Bottom Left)
- **Background**: Light Warm Linen (`#F6F4EF`).
- **Header**: `06 / CULINARY SIGNATURES`
- **5 Carousel / Floating Icon Columns**:
  1. **Nalli Nihari** (Slow-braised shank with bone marrow essence)
  2. **Dum Biryani** (Sealed earthen pot aromatics)
  3. **Dal Parivar** (36-hour slow simmered black lentils)
  4. **Tandoori Chaap** (Smoked clay-oven delicate cutlets)
  5. **Kesar Phirni** (Chilled saffron rice pudding in earthen pot)
- **Spec Icons / Badges beneath items**:
  - `100% GHEE ROASTED` • `36-HR SIMMER` • `CLAY POT DUM` • `ORGANIC SPICES`

---

### Panel 07: Packaging & Merchandise Design (Bottom Center)
- **Background**: Deep Emerald Black (`#111914`).
- **Header**: `07 / PACKAGING DESIGN`
- **Copy**: *"Eco-certified unbleached kraft boxes, gold hot-foil embossed sleeve wrappers, and reusable airtight brass spice tins that turn every takeaway into an unboxing ritual."*
- **Mockup Showcase**:
  - 3D isometric view of Parivar luxury delivery box: Forest green exterior, gold foil seal, satin ribbon, and custom printed inner parchment with spice story.

---

### Panel 08: Collateral & Digital Applications (Bottom Right)
- **Background**: White Crisp Canvas (`#FFFFFF`).
- **Header**: `08 / APPLICATIONS & TOUCHPOINTS`
- **6-up Grid of Touchpoints**:
  1. **Mobile App / Web Menu**: Dark mode UI showing table reservation and dish visualizer.
  2. **Outdoor Hoarding**: High impact billboard with dramatic dark food photo and bold gold headline.
  3. **Restaurant Interior**: Ambient signage with brushed brass backlight letters.
  4. **Uniforms / Apparel**: Black premium apron with gold embroidered monogram 'P'.
  5. **Physical Menu**: Textured leather-bound booklet with gold edge-gilding.
  6. **Takeaway Bag**: Heavyweight matte green paper tote with woven rope handles.

---

## 3. Global Footer Banner
- Left: **PARIVAR** (Wordmark)
- Center: `TRADITION MEETS OPULENCE  ✦  CRAFTED WITH SOUL  ✦  EST. 2024`
- Right: `parivar.restaurant  •  @parivar.au`

---

## 4. Front-End Component Implementation Blueprint (React / Tailwind)

For an AI agent coding this component:

```tsx
// Suggested Component: src/components/BrandIdentityBoard.tsx
// Responsive Grid:
<section className="w-full max-w-7xl mx-auto p-4 md:p-8 bg-[#0a0d0b] text-neutral-100 rounded-3xl shadow-2xl border border-neutral-800">
  {/* 3x3 Responsive Bento Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {/* Panel 00: Hero Poster */}
    <div className="rounded-2xl p-6 bg-gradient-to-br from-[#163323] to-[#0c1c13] border border-emerald-800/40 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
      {/* ... */}
    </div>

    {/* Panel 01: Overview */}
    <div className="rounded-2xl p-6 bg-[#121614] border border-neutral-800 flex flex-col justify-between">
      {/* ... */}
    </div>

    {/* Panel 02: Logo */}
    <div className="rounded-2xl p-6 bg-[#FAF6F0] text-[#163323] border border-neutral-200">
      {/* ... */}
    </div>

    {/* Panel 03: Color Swatches */}
    <div className="rounded-2xl p-6 bg-[#121614] border border-neutral-800">
      {/* Swatches grid */}
    </div>

    {/* Panel 04: Typography */}
    <div className="rounded-2xl p-6 bg-[#FAF6F0] text-[#163323] border border-neutral-200">
      {/* Typography specimen */}
    </div>

    {/* Panel 05: Visual Mood collage */}
    <div className="rounded-2xl p-6 bg-[#121614] border border-neutral-800">
      {/* Collage images */}
    </div>

    {/* Panel 06: Signature Exploration */}
    <div className="rounded-2xl p-6 bg-[#FAF6F0] text-[#163323] border border-neutral-200">
      {/* Dishes icons */}
    </div>

    {/* Panel 07: Packaging */}
    <div className="rounded-2xl p-6 bg-[#121614] border border-neutral-800">
      {/* 3D packaging preview */}
    </div>

    {/* Panel 08: Collateral */}
    <div className="rounded-2xl p-6 bg-[#FAF6F0] text-neutral-900 border border-neutral-200">
      {/* Touchpoint tiles */}
    </div>
  </div>

  {/* Footer Bar */}
  <footer className="mt-6 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between text-xs tracking-wider text-neutral-400">
    <span className="font-serif font-bold text-amber-500 tracking-widest text-sm">PARIVAR</span>
    <span>TRADITION MEETS OPULENCE  ✦  CRAFTED WITH SOUL</span>
    <span>PARIVAR.RESTAURANT</span>
  </footer>
</section>
```
