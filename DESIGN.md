```markdown
**Version:** 1.1.0
**Last Updated:** 2026-11-02

## 1. Brand Overview

### Mission
Nova Business Banking kiçik və orta sahibkarların gündəlik maliyyə əməliyyatlarını bir platformadan idarə etməsinə imkan verən rəqəmsal biznes bankçılığı platformasıdır. Hədəf istifadəçi: kiçik və orta biznes sahibləri, maliyyə menecerləri və şirkət mühasibləri. Dashboard istifadəçilərə hesab qalıqlarını, son əməliyyatları, ödənişləri və əsas maliyyə göstəricilərini bir baxışda izləməyə kömək edir.
```

```markdown
### Design Principles
1. ** Clarity First**: Hər ekran bir əsas sualı cavablandırır.
   Bəzək məlumatı gizlədirsə, bəzəyi atırıq.
2. **Trust Through Consistency**: Maliyyə məhsullarında istifadəçi hər addımda nə baş verdiyini anlamalıdır. Stabil komponentlər və aydın feedback istifadəçi inamını artırır.
3. **Accessible from the start**: Kontrast, fokus və toxunma sahəsi sonradan
   yamaq deyil, ilkin tələbdir.
4. **Consistent across surfaces**: Web, iOS və Android eyni token-lərdən
   qidalanır, ona görə də platformalar arasında brend hissi qorunur.
```

```markdown
### Voice & Tone
- **Do**: Qısa, birbaşa, faktiki. "3 hesab bağlantısı gözləyir."
- **Do**: İstifadəçiyə hörmətli, panika yaratmayan. "Ödəniş uğursuz oldu.
  Yenidən cəhd et və ya kartı yenilə."
- **Don't**: Həyəcanlı satış dili. "İnanılmaz! Sən bunu bacardın!"
- **Don't**: Texniki jarqon. "Error 402: payment_intent failed."
- Helpful, not robotic  "Fayl əlavə edin və davam edin." Don't  "Invalid input"
```

```markdown
## 2. Colors

### Primitive Palette
Bunlar xam dəyərlərdir, birbaşa UI-da istifadə olunmur. Boyalar, amma
hələ divara vurulmayıb.

| Token | Hex | RGB | Usage |
|-------|-----|-----|-------|
| white | #FFFFFF | 255,255,255 | Base white, backgrounds |
| black | #000000 | 0,0,0 | True black, avoid in UI, prefer gray-900 |
| gray-50 | #F8FAFC | 248,250,252 | Lightest surface tint |
| gray-100 | #F1F5F9 | 241,245,249 | Subtle fills, code blocks |
| gray-200 | #E2E8F0 | 226,232,240 | Default borders |
| gray-300 | #CBD5E1 | 203,213,225 | Disabled borders |
| gray-400 | #94A3B8 | 148,163,184 | Placeholder text |
| gray-500 | #64748B | 100,116,139 | Secondary text |
| gray-600 | #475569 | 71,85,105 | Muted headings |
| gray-700 | #334155 | 51,65,85 | Strong body on light |
| gray-800 | #1E293B | 30,41,59 | Dark surfaces |
| gray-900 | #0F172A | 15,23,42 | Primary text, darkest surface |
| teal-50 | #F0FDFA | 240,253,250 | Lightest teal tint |
| teal-100 | #CCFBF1 | 204,251,241 | Hover backgrounds |
| teal-200 | #99F6E4 | 153,246,228 | Selected tint |
| teal-300 | #5EEAD4 | 94,234,212 | Subtle accents |
| teal-400 | #2DD4BF | 45,212,191 | Interactive on dark mode |
| teal-500 | #14B8A6 | 20,184,166 | Focus rings, info, links|
| teal-600 | #0F766E | 15,118,110 | Primary brand, CTAs |
| teal-700 | #115E59 | 17,94,89 | Primary hover |
| teal-800 | #134E4A | 19,78,74 | Primary pressed |
| teal-900 | #042F2E | 4,47,46 | Deepest brand shade |
| green-500 | #22C55E | 34,197,94 | Success states |
| green-600 | #16A34A | 22,163,74 | Success hover, positive trend |
| red-500 | #EF4444 | 239,68,68 | Error states, destructive |
| red-600 | #DC2626 | 220,38,38 | Error hover |
| amber-500 | #F59E0B | 245,158,11 | Warning states |
```

```markdown
### Semantic Tokens
Semantic token rəngi deyil, məqsədi adlandırır. `color-bg-primary` deyir
ki, bu əsas arxa fondur. Onun arxasında Light mode-da white, Dark mode-da
gray-900 durur, amma komponent bunu bilmir, sadəcə token adını çağırır.

| Token | Light Mode | Dark Mode | Usage |
|-------|-----------|-----------|-------|
| color-bg-primary | {white} | {gray-900} | Main page background |
| color-bg-secondary | {gray-50} | {gray-800} | Cards, raised sections |
| color-bg-tertiary | {gray-100} | {gray-700} | Inputs, code blocks |
| color-bg-inverse | {gray-900} | {gray-50} | Contrast sections, tooltips |
| color-bg-brand | {teal-600} | {teal-500} | Brand-colored surfaces |
| color-text-primary | {gray-900} | {gray-50} | Headings, body text |
| color-text-secondary | {gray-500} | {gray-400} | Descriptions, captions |
| color-text-tertiary | {gray-400} | {gray-500} | Placeholders, disabled |
| color-text-inverse | {white} | {gray-900} | Text on inverse surfaces |
| color-text-brand | {teal-600} | {teal-400} | Links, branded text |
| color-border-primary | {gray-200} | {gray-700} | Default borders |
| color-border-secondary | {gray-100} | {gray-800} | Subtle dividers |
| color-border-focus | {teal-500} | {teal-400} | Focus rings |
| color-interactive-primary | {teal-600} | {teal-400} | Primary buttons, links |
| color-interactive-primary-hover | {teal-700} | {teal-300} | Primary hover |
| color-interactive-secondary | {gray-100} | {gray-700} | Secondary buttons |
| color-success | {green-500} | {green-500} | Positive feedback |
| color-error | {red-500} | {red-500} | Negative feedback |
| color-warning | {amber-500} | {amber-500} | Caution feedback |
| color-info | {teal-500} | {teal-400} | Neutral feedback |
```

```markdown
### Accessibility
Palitradakı bütün kombinasiyalar WCAG 2.2 AA-nı keçmir. Uyğunluq rəngin
özündən deyil, **rəng + fon + istifadə növü** kombinasiyasından asılıdır.
Ona görə rənglər üç qrupa bölünür: mətn rəngləri, qeyri-mətn UI
elementləri (ikon, fokus halqası, sərhəd) və dekorativ rənglər/fon tintləri.

#### WCAG 2.2 AA hədləri
| Növ | Minimum kontrast | WCAG kriteriyası |
|-----|------------------|------------------|
| Normal mətn | **4.5:1** | 1.4.3 Contrast (Minimum) |
| Böyük mətn (≥ 24px regular və ya ≥ 18.66px bold) | **3:1** | 1.4.3 Contrast (Minimum) |
| Mənalı ikonlar, fokus halqası, input sərhədi | **3:1** | 1.4.11 Non-text Contrast |
| Dekorativ elementlər, fon tintləri, disabled komponentlər | tələb yoxdur | — |

Type Scale-də böyük mətn sayılan token-lər: `text-xl` (24px/600) və
yuxarısı. `text-lg` (18px/500) bold deyil, ona görə **normal mətn** kimi
4.5:1 tələb edir.

#### Hesablama metodu
Bütün nisbətlər WCAG relative luminance düsturu ilə, Primitive Palette-dəki
hex dəyərlərdən müstəqil hesablanıb və 2 onluq rəqəmə yuvarlaqlaşdırılıb.
Şəffaflıq (opacity) və ya qarışıq fon nəzərə alınmayıb.

#### Mətn kombinasiyaları: Light mode
| Mətn | Fon | Nisbət | Normal mətn (4.5:1) | Böyük mətn (3:1) |
|------|-----|--------|---------------------|------------------|
| color-text-primary (gray-900) | color-bg-primary (white) | 17.85:1 | Keçir | Keçir |
| color-text-primary (gray-900) | color-bg-secondary (gray-50) | 17.06:1 | Keçir | Keçir |
| color-text-secondary (gray-500) | color-bg-primary (white) | 4.76:1 | Keçir | Keçir |
| color-text-secondary (gray-500) | color-bg-secondary (gray-50) | 4.55:1 | Keçir | Keçir |
| color-text-secondary (gray-500) | color-bg-tertiary (gray-100) | 4.34:1 | **Keçmir** | Keçir |
| color-text-brand / color-interactive-primary (teal-600) | color-bg-primary (white) | 5.47:1 | Keçir | Keçir |
| color-text-brand / color-interactive-primary (teal-600) | color-bg-secondary (gray-50) | 5.23:1 | Keçir | Keçir |
| color-interactive-primary-hover (teal-700) | color-bg-primary (white) | 7.58:1 | Keçir | Keçir |
| white | color-bg-brand (teal-600) | 5.47:1 | Keçir | Keçir |
| color-text-inverse (white) | color-bg-inverse (gray-900) | 17.85:1 | Keçir | Keçir |
| color-text-tertiary (gray-400) | color-bg-primary (white) | 2.56:1 | **Keçmir** | **Keçmir** |
| color-info (teal-500) | color-bg-primary (white) | 2.49:1 | **Keçmir** | **Keçmir** |
| color-success (green-500) | color-bg-primary (white) | 2.28:1 | **Keçmir** | **Keçmir** |
| color-warning (amber-500) | color-bg-primary (white) | 2.15:1 | **Keçmir** | **Keçmir** |
| color-error (red-500) | color-bg-primary (white) | 3.76:1 | **Keçmir** | Keçir |
| green-600 | color-bg-primary (white) | 3.30:1 | **Keçmir** | Keçir |
| red-600 | color-bg-primary (white) | 4.83:1 | Keçir | Keçir |

#### Mətn kombinasiyaları: Dark mode
| Mətn | Fon | Nisbət | Normal mətn (4.5:1) | Böyük mətn (3:1) |
|------|-----|--------|---------------------|------------------|
| color-text-primary (gray-50) | color-bg-primary (gray-900) | 17.06:1 | Keçir | Keçir |
| color-text-primary (gray-50) | color-bg-secondary (gray-800) | 13.98:1 | Keçir | Keçir |
| color-text-secondary (gray-400) | color-bg-primary (gray-900) | 6.96:1 | Keçir | Keçir |
| color-text-secondary (gray-400) | color-bg-secondary (gray-800) | 5.71:1 | Keçir | Keçir |
| color-text-brand / color-interactive-primary (teal-400) | color-bg-primary (gray-900) | 9.59:1 | Keçir | Keçir |
| color-text-brand / color-interactive-primary (teal-400) | color-bg-secondary (gray-800) | 7.86:1 | Keçir | Keçir |
| color-text-inverse (gray-900) | color-bg-inverse (gray-50) | 17.06:1 | Keçir | Keçir |
| gray-900 | color-bg-brand (teal-500) | 7.17:1 | Keçir | Keçir |
| color-success (green-500) | color-bg-primary (gray-900) | 7.83:1 | Keçir | Keçir |
| color-warning (amber-500) | color-bg-primary (gray-900) | 8.31:1 | Keçir | Keçir |
| color-error (red-500) | color-bg-primary (gray-900) | 4.74:1 | Keçir | Keçir |
| color-error (red-500) | color-bg-secondary (gray-800) | 3.89:1 | **Keçmir** | Keçir |
| color-text-tertiary (gray-500) | color-bg-primary (gray-900) | 3.75:1 | **Keçmir** | Keçir |
| color-text-tertiary (gray-500) | color-bg-secondary (gray-800) | 3.07:1 | **Keçmir** | Keçir |
| white | color-bg-brand (teal-500) | 2.49:1 | **Keçmir** | **Keçmir** |

#### Light fonda normal mətn kimi qadağandır
Aşağıdakı primitive-lər hazırkı kombinasiyalarında light fonda (white,
gray-50, gray-100) **normal ölçülü mətn** kimi istifadə olunmamalıdır:

| Primitive | white (#FFFFFF) üzərində | gray-50 (#F8FAFC) üzərində | gray-100 (#F1F5F9) üzərində | Hansı token-lər təsirlənir |
|-----------|--------------------------|----------------------------|-----------------------------|----------------------------|
| gray-400 (#94A3B8) | 2.56:1 **Keçmir** | 2.45:1 **Keçmir** | 2.34:1 **Keçmir** | color-text-tertiary (light) |
| teal-500 (#14B8A6) | 2.49:1 **Keçmir** | 2.38:1 **Keçmir** | 2.27:1 **Keçmir** | color-info, color-border-focus (light) |
| green-500 (#22C55E) | 2.28:1 **Keçmir** | 2.18:1 **Keçmir** | 2.08:1 **Keçmir** | color-success |
| amber-500 (#F59E0B) | 2.15:1 **Keçmir** | 2.05:1 **Keçmir** | 1.96:1 **Keçmir** | color-warning |

Bu dörd rəng light fonda böyük mətn üçün də 3:1-ə çatmır. Status
mesajlarında rəngi mətnə deyil, ikona/badge fonuna ver və mətni
color-text-primary ilə yaz. Mənanı yalnız rənglə ötürmə (WCAG 1.4.1).

#### Qeyri-mətn elementləri (ikon, fokus halqası, sərhəd)
Məna daşıyan ikonlar və UI vəziyyət göstəriciləri fonla **3:1** kontrast
tələb edir. Light fonda (white):

| Element | Rəng | Nisbət | 3:1 |
|---------|------|--------|-----|
| Fokus halqası (color-border-focus) | teal-500 | 2.49:1 | **Keçmir** |
| Info ikonu (color-info) | teal-500 | 2.49:1 | **Keçmir** |
| Success ikonu (color-success) | green-500 | 2.28:1 | **Keçmir** |
| Warning ikonu (color-warning) | amber-500 | 2.15:1 | **Keçmir** |
| Error ikonu (color-error) | red-500 | 3.76:1 | Keçir |
| Positive trend ikonu | green-600 | 3.30:1 | Keçir |
| Brand ikonu | teal-600 | 5.47:1 | Keçir |

Dark mode-da (gray-900 fonda) fokus halqası teal-400 9.59:1, status
rəngləri green-500 7.83:1, amber-500 8.31:1, red-500 4.74:1 ilə 3:1-i keçir.

Dekorativ ikonlar (`aria-hidden="true"`), fon tintləri (teal-50…teal-200,
gray-50, gray-100) və disabled komponentlər kontrast tələbindən azaddır.
Placeholder mətn isə azad **deyil**: oxunmalı olan hər mətn 4.5:1 tələb edir.

#### Məlum uyğunsuzluqlar
Aşağıdakı token istifadələri hazırda AA-nı keçmir və həll olunana qədər
açıq məsələ kimi qalır:
- Input "Error text: {color-error}" light mode-da red-500 on white: 3.76:1.
- Placeholder (color-text-tertiary): light 2.56:1, dark 3.75:1.
- Light mode fokus halqası (teal-500 on white): 2.49:1, 3:1 tələbindən aşağı.
- color-text-secondary on color-bg-tertiary (light): 4.34:1.

Qayda: yeni rəng kombinasiyası əlavə edəndə əvvəlcə kontrastı yoxla,
sonra istifadə et. Kontrast normal mətn üçün 4.5:1-dən, böyük mətn üçün
3:1-dən aşağıdırsa, o kombinasiya həmin mətn ölçüsü üçün qadağandır.

### Theming Anchor

Nova Business Banking brand rəng sistemi `teal-600` primitive tokenindən idarə olunur. `teal-600` bütün əsas brand rənglərinin mənbəyi (brand anchor) kimi çıxış edir və ona bağlı semantic token-lər (`color-interactive-primary`, `color-border-focus`, `color-text-link`, aktiv vəziyyətlər və digər brand elementləri) bu dəyər üzərindən qurulur. `teal-600` dəyişdirildikdə bütün sistem üzrə brand elementləri avtomatik yenilənməlidir.
```

```markdown
## 3. Typography

### Font Families
- **Display/Heading**: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Body**: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- **Mono**: "IBM Plex Mono", "SF Mono", Menlo, Consolas, monospace

### Type Scale
| Token | Size | Line Height | Weight | Usage |
|-------|------|-------------|--------|-------|
| text-xs | 12px | 16px (1.33) | 400 | Captions, badges, labels |
| text-sm | 14px | 20px (1.43) | 400 | Helper text, metadata |
| text-base | 16px | 24px (1.5) | 400 | Body text, table content, form fields, default |
| text-lg | 18px | 28px (1.56) | 500 | Lead paragraphs, card titles, subsection headings |
| text-xl | 24px | 32px (1.33) | 600 | Section titles |
| text-2xl | 32px | 40px (1.25) | 700 | Page titles |
| text-3xl | 40px | 48px (1.2) | 700 | Hero headlines mobile, Dashboard welcome title |
| text-4xl | 56px | 64px (1.14) | 700 | Hero headlines desktop, Marketing hero, landing pages |
| mono-xs | 12px | 16px | 400 | OTP codes, small IDs, labels |
| mono-sm | 14px | 20px | 400 | Transaction IDs, short codes |
| mono-base | 16px | 24px | 400 | Code blocks, IBANs, account numbers |

### Heading Rules
- H1: text-3xl on mobile, text-4xl on desktop
- H2: text-2xl on mobile, text-3xl on desktop
- H3: text-xl on mobile, text-2xl on desktop
- H4: text-lg on all breakpoints
- **Body text:** Always use **Inter** for paragraphs, tables, forms, buttons and navigation.
-**Numeric and technical data:** Always use **IBM Plex Mono** for IBAN, account numbers, transaction IDs, reference codes and other machine-readable values.
- Never skip heading levels (H1 straight to H3 is not allowed),
  çünki ekran oxuyucular iyerarxiyanı başlıq səviyyəsindən qurur.
```

```markdown
## 4. Spacing

### Scale (4px base)
Bütün boşluqlar 4px-in qatlarıdır. Bu, ixtiyari rəqəmlərin (13px, 17px)
sistemə girməsinin qarşısını alır.

| Token | Value | Common Usage |
|-------|-------|-------------|
| space-0 | 0px | Reset |
| space-1 | 4px | Tight inner padding |
| space-2 | 8px | Small gaps, badges, icon padding |
| space-3 | 12px | Input padding, small cards, chip spacing |
| space-4 | 16px | Standard padding, grid gaps |
| space-5 | 20px | Medium gaps, Card content spacing |
| space-6 | 24px | Card padding, form spacing |
| space-8 | 32px | Large gaps, Section gaps, widget spacing |
| space-10 | 40px | Dashboard section spacing|
| space-12 | 48px | Large cards, modal padding, Component height, tall gaps |
| space-16 | 64px | Major section spacing, Section padding mobile |
| space-20 | 80px | Section padding desktop |
| space-24 | 96px | Large section padding, empty states |
| space-32 | 128px | Hero padding |
```

```markdown
### Layout Rules
- Content max-width: 1280px
- Full-bleed max-width: 1440px
- Page side padding: space-4 (mobile), space-8 (tablet), space-16 (desktop)
- Section vertical padding: space-16 (mobile), space-24 (desktop)
- Card grid gap: space-6
- Grid system: 12-column layout
- Column gutter: space-6 (24px)
- Container alignment: Centered
```

```markdown
## 5. Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| radius-none | 0px | Sharp corners, tables |
| radius-sm | 4px | Badges, tags |
| radius-md | 8px | Buttons, inputs, selects |
| radius-lg | 12px | Cards |
| radius-xl | 16px | Modals, sheets |
| radius-2xl | 24px | Feature cards, hero blocks |
| radius-full | 9999px | Avatars, pills, toggles |
```

```markdown
## 6. Shadows
| Token | Value | Usage |
|-------|-------|-------|
| shadow-none | none | Flat elements, tables |
| shadow-sm | 0 1px 2px rgba(0,0,0,0.05) | Subtle lift, resting cards |
| shadow-md | 0 4px 6px -1px rgba(0,0,0,0.07) | Default cards |
| shadow-lg | 0 10px 15px -3px rgba(0,0,0,0.1) | Card hover, dropdowns |
| shadow-xl | 0 20px 25px -5px rgba(0,0,0,0.1) | Modals, popovers |

Dark mode-da kölgələr zəif görünür, ona görə də dark mode-da qalxma
hissini kölgə deyil, color-bg-secondary səthi ilə ver.
```

```markdown
## 7. Breakpoints
| Token | Value | Target |
|-------|-------|--------|
| bp-sm | 640px | Large phones landscape |
| bp-md | 768px | Tablets |
| bp-lg | 1024px | Small laptops |
| bp-xl | 1280px | Desktops |
| bp-2xl | 1440px | Large screens |
```

```markdown
### Button
#### Variants
| Variant | Background | Text Color | Border |
|---------|-----------|------------|--------|
| primary | {color-interactive-primary} | {color-text-on-primary} | none |
| secondary | {color-bg-secondary} | {color-text-primary} | 1px solid {color-border-primary} |
| ghost | transparent | {color-interactive-primary} | none |
| danger | {color-interactive-danger} | {color-text-on-danger} | none |

#### Sizes
| Size | Height | Padding X | Font Size | Radius |
|------|--------|-----------|-----------|--------|
| sm | 32px | 12px | 14px | {radius-md} |
| md | 40px | 16px | 14px | {radius-md} |
| lg | 48px | 24px | 16px | {radius-md} |

#### States
- Default: as specified above
- Hover: color-interactive-primary-hover (primary uses color-interactive-primary-hover)
- Active/Pressed: color-interactive-primary-active
- Focus: 2px ring {color-border-focus} with 2px offset
- Focus state must be visible on all backgrounds.
- Disabled: Disabled: Use color-state-disabled tokens, Reduce contrast, Remove interaction
- Loading: spinner replaces text, width stays fixed to avoid layout shift

#### Rules
- Minimum width: 120px, 120px for text buttons- Icon-only buttons are exempt.
-Primary actions become full-width below bp-sm (640px).
- Maximum 2 buttons side by side
- Icon plus text: icon 20px, 8px gap before text
- Icon-only buttons are square and require a tooltip, çünki ikonun
  mənası hər istifadəçiyə aydın olmur. 
  Icon-only buttons:
- Must have tooltip
- Must include accessible aria-label
- Use only for universally recognized actions

```

```
### Card
#### Variants
| Variant | Background | Border | Shadow |
|---------|-----------|--------|--------|
| default | {color-bg-secondary} | 1px solid {color-border-primary} | {shadow-sm} |
| elevated | {color-bg-secondary} | none | {shadow-md} |
| outlined | {color-bg-secondary} | 1px solid {color-border-primary} | none |
| interactive | {color-bg-secondary} | 1px solid {color-border-primary} | {shadow-sm} to {shadow-md} on hover |

#### Structure
[Card] [Card.Image] optional, full-width, top radius only [Card.Header] title (text-lg, semibold) + subtitle (text-sm, secondary) [Card.Body] content area, padding {space-6} [Card.Footer] actions, top border {color-border-secondary}, padding {space-4}

#### Rules
- Radius: {radius-lg}
- Padding: {space-6}
- Interactive cards need a visible focus state, not just hover, çünki
  klaviatura istifadəçisi hover görə bilmir.
- Footer divider is optional. Use only when separating actions from content.

### Input
#### States
| State | Border | Background | Label |
|-------|--------|-----------|-------|
| default | 1px solid {color-border-primary} | {color-bg-primary} | {color-text-secondary} |
| focus | 2px solid {color-border-focus} | {color-bg-primary} | {color-interactive-primary} |
| error | 2px solid {color-border-error color-text-error} | {color-bg-primary} | {color-border-error
color-text-error} |
| disabled | 1px solid {color-border-disabled} | {color-bg-disabled} | {color-text-disabled} |

#### Rules
- Height: 40px
- Radius: {radius-md}
- Padding: {space-3} vertical, {space-4} horizontal
- Label always visible above the field, never placeholder-only, çünki
  placeholder mətn yazılanda itir və istifadəçi sahənin nə olduğunu unudur.
- Helper text: below input, text-sm, {color-text-secondary}
- Error text: below input, text-sm, {color-error}
- Required indicator: red asterisk after the label

---
```

```
## 9. Animation

### Timing
| Token | Value | Usage |
|-------|-------|-------|
| duration-fast | 100ms | Micro-interactions (checkbox, toggle),feedback |
| duration-normal | 200ms | Standard transitions (hover, color change), Accordion, sidebar |
| duration-slow | 300ms | Layout shifts, modal entrance,component transition |
| duration-slower | 500ms | Only for large transitions or onboarding flows.
Avoid in daily dashboard interactions. |
| duration-pulse | 1500ms| Skeleton loading |

### Easing
| Token | Value | Usage |
|-------|-------|-------|
| ease-in | cubic-bezier(0.4, 0, 1, 1) | Elements exiting |
| ease-out | cubic-bezier(0, 0, 0.2, 1) | Elements entering |
| ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | Elements moving in place |

### Rules
- Every animation respects `prefers-reduced-motion: reduce`. Reduced
  motion halında transform və opacity animasiyaları söndürülür, keçidlər
  ani olur, çünki bəzi istifadəçilərdə hərəkət baş gicəllənməsi yaradır.
- No UI animation longer than 500ms
- No animation on critical-path actions Avoid decorative animations during critical actions. Provide immediate feedback:
- loading state
- progress indicator
- success/error state.
```

```
## 10. Iconography
- Style: outlined, 1.5px stroke
- Base size: 24 by 24px
- Available sizes: 16, 20, 24, 32
- Color: inherits text color (currentColor)
- Touch target: always 44 by 44px minimum, ikonun görünən ölçüsündən
  asılı olmayaraq, çünki kiçik toxunma sahəsi mobil istifadəçini yorur.
- Icons with meaning need an aria-label, decorative icons need
  aria-hidden="true"
- Set: Lucide (or your chosen library), kept consistent across the app
-Do not scale icons arbitrarily. Use predefined icon size tokens.
```

```
## 11. Grid & Layout
- Columns: 4 (mobile), 8 (tablet), 12 (desktop)
- Gutter: 16px (mobile), 24px (tablet), 32px (desktop)
- Margin: 16px (mobile), 32px (tablet), auto-center (desktop)
- Max content width: 1280px
- Content sits inside the grid, full-bleed sections may extend to 1440px Usage Hero banner Analytics overview Large charts Promotional sections
```