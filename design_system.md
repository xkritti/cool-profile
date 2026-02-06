# Design System - Krittamet Portfolio

## Color Palette

### Primary Colors
- **Purple**: `#9333EA` (purple-600) - Main brand color
- **Pink**: `#EC4899` (pink-600) - Secondary brand color
- **Gradient**: Purple → Pink for accents and CTAs

### Light Theme
```css
Background:
- Base: #FFFFFF (white)
- Surface: #FAF5FF (purple-50)
- Card: #FDFCFF with border purple-200

Text:
- Primary: #4C1D95 (purple-900)
- Secondary: #6B21A8 (purple-800)
- Muted: #7E22CE (purple-700)

Accents:
- Primary: #9333EA (purple-600)
- Secondary: #EC4899 (pink-600)
- Hover: #A855F7 (purple-500)

Borders:
- Default: #E9D5FF (purple-200)
- Hover: #D8B4FE (purple-300)
- Active: #C084FC (purple-400)
```

### Dark Theme
```css
Background:
- Base: #18181B (zinc-900)
- Surface: #27272A (zinc-800)
- Card: #1F1F23 with border purple-900/30

Text:
- Primary: #FAFAFA (zinc-50)
- Secondary: #E4E4E7 (zinc-200)
- Muted: #A1A1AA (zinc-400)

Accents:
- Primary: #C084FC (purple-400)
- Secondary: #F472B6 (pink-400)
- Hover: #E879F9 (fuchsia-400)

Borders:
- Default: #3F3F46 (zinc-700)
- Hover: #52525B (zinc-600)
- Active: #A855F7 (purple-500)
```

## Typography

### Font Stack
- **Headings**: Prompt (Thai + Latin) - Bold, Black
- **Body**: Inter - Regular, Medium
- **Code**: Fira Code / Monaco

### Sizes
```
Hero: 4rem - 6rem (text-6xl - text-8xl)
H1: 3rem (text-5xl)
H2: 2.25rem (text-4xl)
H3: 1.875rem (text-3xl)
Body Large: 1.25rem (text-xl)
Body: 1rem (text-base)
Small: 0.875rem (text-sm)
```

## Spacing

### Scale
- xs: 0.25rem (1)
- sm: 0.5rem (2)
- md: 1rem (4)
- lg: 1.5rem (6)
- xl: 2rem (8)
- 2xl: 3rem (12)
- 3xl: 4rem (16)

### Component Padding
- Card: p-6 (1.5rem)
- Section: py-32 px-6 (8rem vertical, 1.5rem horizontal)
- Button: px-8 py-3

## Border Radius

### Scale
- sm: 0.5rem (rounded-lg)
- md: 0.75rem (rounded-xl)
- lg: 1rem (rounded-2xl)
- full: 9999px (rounded-full)

### Component Radii
- Cards: rounded-2xl (1rem)
- Buttons: rounded-2xl (1rem) or rounded-full
- Badges: rounded-full
- Inputs: rounded-xl (0.75rem)
- Images: rounded-2xl (1rem)

## Shadows

### Light Theme
```
sm: 0 1px 2px rgba(147, 51, 234, 0.05)
md: 0 4px 6px rgba(147, 51, 234, 0.1)
lg: 0 10px 15px rgba(147, 51, 234, 0.15)
xl: 0 20px 25px rgba(147, 51, 234, 0.2)
2xl: 0 25px 50px rgba(147, 51, 234, 0.25)
```

### Dark Theme
```
sm: 0 1px 2px rgba(0, 0, 0, 0.3)
md: 0 4px 6px rgba(0, 0, 0, 0.4)
lg: 0 10px 15px rgba(0, 0, 0, 0.5)
xl: 0 20px 25px rgba(147, 51, 234, 0.3)
2xl: 0 25px 50px rgba(147, 51, 234, 0.4)
```

## Gradients

### Primary Gradients
```
Purple to Pink: from-purple-600 to-pink-600
Purple to Fuchsia: from-purple-500 to-fuchsia-500
Light Purple to Pink: from-purple-400 to-pink-400
```

### Background Gradients (Light)
```
Hero: from-purple-50 via-pink-50 to-purple-50
Section: from-purple-100/50 to-pink-100/50
```

### Background Gradients (Dark)
```
Hero: from-purple-950/20 via-pink-950/20 to-purple-950/20
Section: from-purple-900/10 to-pink-900/10
```

## Components

### Buttons
```
Primary:
- Light: bg-gradient-to-r from-purple-600 to-pink-600 text-white
- Dark: bg-gradient-to-r from-purple-500 to-pink-500 text-white
- Hover: Scale 1.05, shadow-xl

Secondary:
- Light: border-purple-300 text-purple-700 hover:bg-purple-50
- Dark: border-purple-700 text-purple-300 hover:bg-purple-900/20
```

### Cards
```
Light:
- bg-white/80
- border-purple-200
- hover:border-purple-400
- hover:shadow-xl shadow-purple-200/50

Dark:
- bg-zinc-900/80
- border-purple-900/30
- hover:border-purple-500/50
- hover:shadow-xl shadow-purple-500/20
```

### Badges
```
Light:
- bg-purple-100
- border-purple-200
- text-purple-700
- hover:bg-purple-200

Dark:
- bg-purple-900/30
- border-purple-800/50
- text-purple-300
- hover:bg-purple-800/40
```

## Effects

### Hover States
- Scale: 1.02 - 1.05
- Brightness: 1.1
- Shadow elevation: +1 level
- Border color change
- Smooth transitions: 200ms - 300ms

### Glassmorphism
```
backdrop-blur-xl
bg-white/80 (light) or bg-zinc-900/80 (dark)
border with low opacity
subtle shadow
```

### Animations
- Fade in: opacity 0 → 1
- Slide up: translateY(20px) → 0
- Pulse: scale 1 → 1.05 → 1 (infinite)
- Gradient shift: background-position animation

## Accessibility

### Contrast Ratios
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

### Focus States
- Ring: ring-2 ring-purple-500 ring-offset-2
- Outline color: purple-500
- Visible on all interactive elements

## Usage Guidelines

1. **Always use purple-pink gradients for CTAs and important elements**
2. **Light theme should feel airy with purple/pink pastels**
3. **Dark theme should be elegant with vibrant purple/pink accents**
4. **Maintain consistent border radius (rounded-2xl for cards)**
5. **Use shadows to create depth, especially in light mode**
6. **Keep text readable with proper contrast**
7. **Animate interactions for better UX**
