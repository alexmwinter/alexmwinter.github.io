# Design System: Precision Greyscale & Core Blue

## 1. Visual Theme & Atmosphere

This design system is a study in high-contrast minimalism — rooted in a crisp, pure greyscale canvas that ranges from stark white to a deep charcoal-black (`#121212`). Against this neutral backdrop, color is used deliberately and functionally. A Bright Blue (`#2563eb`) serves as the primary interactive voice, while a Deep Blue (`#1e3a8a`) grounds structural elements and active states. 

The typography system bridges editorial design with engineering: an Editorial Serif for massive hero headlines (96px) creates a storytelling presence, while Euclid Circular A (or a similarly clean geometric sans like Inter) handles body text. For all code, technical labels, and interactive blocks, **Fira Code** brings a modern, ligature-rich monospace aesthetic. Its distinct uppercase treatments with wide letter-spacing (1px–3px) create a highly structured, classified feel.

The dual-mode design transitions between a dark hero/feature section world (`#121212` with bright blue accents) and a light content world (white with light slate borders `#e2e8f0`). The shadow system has been neutralized, relying on pure greyscale or slight deep-blue tints to create realistic, grounded elevation. Purple (`#7c3aed`) is strictly regulated, used only as a whisper-level accent for highly specific technical highlights (like a boolean value in a code block or a singular "New" badge).

**Key Characteristics:**
- Pure greyscale backgrounds — high-contrast charcoal black to pure white
- Bright Blue (`#2563eb`) as the primary interactive and brand color
- Deep Blue (`#1e3a8a`) for structural weight and active states
- Regulated Purple (`#7c3aed`) for ultra-specific, sparing accents (no neon)
- Editorial Serif for hero headlines
- Fira Code with programming ligatures enabled for all code blocks
- Fira Code with wide uppercase letter-spacing (1px–3px) for technical labels
- Neutral, grounded shadow system
- Dual-mode: charcoal dark hero sections + white light content sections

## 2. Color Palette & Roles

### Base Greyscale
- **Charcoal Void** (`#121212`): Primary dark background — stark, pure dark gray
- **Dark Slate** (`#1e293b`): Secondary dark surfaces, code block backgrounds
- **Mid Gray** (`#64748b`): Muted text, secondary icons, comments in code
- **Light Slate** (`#e2e8f0`): Borders on light surfaces, dividers
- **Off-White Input** (`#f8f9fa`): Input backgrounds, inline code background on light
- **Pure White** (`#ffffff`): Light section background, primary text on dark
- **Pure Black** (`#000000`): Primary text on light, deepest shadows

### Core Colors
- **Bright Blue** (`#2563eb`): Primary interaction — buttons, links, active cursors, primary accents
- **Deep Blue** (`#1e3a8a`): Structural weight — active button states, dark UI element backgrounds, code block headers
- **Accent Purple** (`#7c3aed`): Sparing highlight — *strictly* limited to specific code syntax (e.g., regex, booleans) or rare micro-badges

### Shadows
- **Standard Lift** (`rgba(0, 0, 0, 0.1) 0px 4px 12px`): General card elevation
- **Deep Lift** (`rgba(0, 0, 0, 0.25) 0px 20px 40px`): Hero cards and modals
- **Blue Focus Ring** (`0 0 0 3px rgba(37, 99, 235, 0.3)`): Accessibility outline for focused inputs/buttons

## 3. Typography Rules

### Font Families
- **Display Serif**: `Editorial Serif` (e.g., Playfair Display, Instrument Serif)
- **Body / UI**: `Euclid Circular A` (or Inter)
- **Code / Labels**: `Fira Code`

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|----------------|-------|
| Display Hero | Editorial Serif | 96px (6.00rem) | 400 | 1.20 (tight) | normal | Serif authority |
| Section Heading | Euclid Circular A | 36px (2.25rem) | 500 | 1.33 | normal | Geometric precision |
| Body Large | Euclid Circular A | 20px (1.25rem) | 400 | 1.60 (relaxed) | normal | Introductions |
| Body | Euclid Circular A | 18px (1.13rem) | 400 | 1.33 | normal | Standard body |
| Nav / UI | Euclid Circular A | 16px (1.00rem) | 500 | 1.00–1.88 | 0.16px | Navigation, emphasized |
| Code Heading | Fira Code | 40px (2.50rem) | 400 | 1.60 (relaxed) | normal | Code showcase titles |
| Code Body | Fira Code | 15px (0.94rem) | 400 | 1.60 (relaxed) | normal | Code blocks (`font-variant-ligatures: contextual`) |
| Code Label | Fira Code | 14px (0.88rem) | 500 | 1.14 (tight) | 1.5px–2px | `text-transform: uppercase` |

## 4. Component Stylings

### Code Blocks & Interactive Environments
**Container Design**
- Background: `#1e293b` (Dark Slate)
- Border: `1px solid #334155` (Mid-dark gray)
- Radius: 8px
- Padding: 24px (content), 16px (header)

**Header Bar**
- Background: `#0f172a` (Slightly darker slate)
- Content: File name or language label in Fira Code (12px, `#94a3b8`).
- Top border: `2px solid #1e3a8a` (Deep Blue) to anchor the block.

**Syntax Highlighting (Greyscale & Blue Theme)**
- **Keywords/Functions**: Bright Blue (`#2563eb`)
- **Strings**: Deep Blue (`#1e3a8a` in light mode, `#60a5fa` in dark mode)
- **Variables/Plain Text**: Pure White (`#ffffff`) or Black (`#000000`)
- **Comments**: Mid Gray (`#64748b`), italicized
- **Booleans/Numbers**: Accent Purple (`#7c3aed`) — *This is the primary place purple is allowed.*

### Buttons

**Primary Blue Button**
- Background: `#2563eb` (Bright Blue)
- Text: `#ffffff`
- Radius: 100px (pill) or 6px (standard tech)
- Border: None
- Hover: Background shifts to Deep Blue (`#1e3a8a`), transform `translateY(-1px)`
- Active: scale 0.98

**Secondary Greyscale Button**
- Background: transparent
- Text: `#121212` (light mode) or `#ffffff` (dark mode)
- Radius: 100px or 6px
- Border: `1px solid #e2e8f0` (light) or `1px solid #334155` (dark)
- Hover: Background tint `#f8f9fa` (light) or `#1e293b` (dark)

### Cards & Containers
- Light mode: White background with `1px solid #e2e8f0` border
- Dark mode: `#121212` background with `1px solid #334155` border
- Radius: 12px (standard), 24px (large/hero)
- Shadow: `rgba(0,0,0,0.08) 0px 4px 12px`

### Distinctive Components

**Fira Code Label System**
- 14px uppercase Fira Code with 1.5px–2px letter-spacing
- Color: Mid Gray (`#64748b`) or Bright Blue (`#2563eb`) for active states.
- Used as section category markers above headings.

## 5. Do's and Don'ts

### Do
- Use `#121212` (Charcoal Void) for dark sections to create a neutral, stark contrast.
- Rely heavily on greyscale for 80% of the UI.
- Use Bright Blue (`#2563eb`) to clearly indicate interactivity or primary calls to action.
- Use Deep Blue (`#1e3a8a`) to anchor components or show depressed/active button states.
- Restrict Accent Purple (`#7c3aed`) to tiny, specific details (like a single code token type or a notification dot).
- Use neutral, black-based shadows with low opacity to create realistic depth.

### Don't
- Don't use ANY neon colors.
- Don't use Purple for buttons, large backgrounds, primary text, or structural borders.
- Don't use colored shadows. Keep shadows purely greyscale.
- Don't mix warm grays (brown/yellow tinted) into the palette; stick to neutral or cool slates.

## 6. Agent Prompt Guide

### Quick Color Reference
- Dark background: Charcoal Void (`#121212`)
- Primary interaction: Bright Blue (`#2563eb`)
- Structural weight: Deep Blue (`#1e3a8a`)
- Sparing accent: Accent Purple (`#7c3aed`)
- Border light: Light Slate (`#e2e8f0`)
- Border dark: Mid-dark slate (`#334155`)

### Example Component Prompts
- "Create a hero on a Charcoal Void (#121212) background. Headline at 96px Editorial Serif weight 400, white text. Subtitle at 18px Euclid Circular A weight 400 in Mid Gray (#64748b). Bright Blue (#2563eb) primary button with 6px radius."
- "Design a code block container: #1e293b background, 8px radius. Top border 2px solid #1e3a8a. Fira Code body text at 15px with syntax highlighting using Bright Blue for keywords, white for variables, and Accent Purple strictly for numbers."
- "Create a technical label: Fira Code 14px, text-transform uppercase, letter-spacing 2px, weight 500, Bright Blue (#2563eb) text color on a transparent background."