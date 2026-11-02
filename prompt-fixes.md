# Prompt Fixes — Module 8, Task 3

`dashboard-v1` üzrə audit düzəlişlərinin jurnalı. Hər fix ayrıca prompt və
ayrıca commit ilə edilib. Hər commit-dən sonra `node token-parity.mjs app`
0 rəng, 0 spacing və 0 font tapıntısı ilə keçib. `token-parity.mjs` yerli
audit skriptidir və heç bir commit-ə daxil edilməyib.

| # | Fix | Commit | Fayllar |
|---|-----|--------|---------|
| 1 | WCAG kontrast sənədləşməsi | `1913ee9` | `DESIGN.md`, `AGENTS.md` |
| 2 | Spacing token düzəlişi | `0f68a1d` | `KpiCard.module.css`, `StatusBadge.module.css` |
| 3 | Teal HEX formatı | `c0dd869` | `DESIGN.md` |
| B1 | Cədvəl hover kontrastı | `45fc15a` | `TransactionsTable.module.css` |
| B2 | Tertiary mətn kontrastı | `8b9b3e7` | `app/globals.css`, `DESIGN.md` |
| B3 | Secondary mətn məhdudiyyətləri | `914dab5` | `DESIGN.md` |
| M1 | Fokus halqası motion | `ca9c149` | `TopBar.module.css` |
| S1 | Empty / error state-lər | `49a1b6b` | `StateMessage.tsx`, `StateMessage.module.css`, `TransactionsTable.tsx`, `AccountConnections.tsx` |
| A1 | Trend etiketi və fokus kontrastı | `aca38f6` | `KpiCard.tsx`, `app/globals.css`, `DESIGN.md` |

> Qeyd: 1, 2, 3 və B1 fix-ləri ayrıca sessiyada edilib. Onların orijinal
> prompt mətni bu jurnalda yoxdur; prompt bölməsi commit diff-inə əsasən
> xülasə kimi yazılıb.

---

## 1. WCAG kontrast sənədləşməsi

**Prompt (xülasə):** `DESIGN.md`-nin Accessibility bölməsi bütün mətnin
WCAG 2.2 AA-nı keçdiyini iddia edir və bəzi nisbətlər səhvdir. Nisbətləri
primitive hex dəyərlərindən yenidən hesabla, keçməyən kombinasiyaları
açıq göstər.

**Dəyişiklik:**
- "Bütün mətn AA-nı keçir" iddiası silindi.
- AA hədləri (4.5:1, 3:1, qeyri-mətn 3:1) cədvəli əlavə olundu.
- Light və dark mətn kombinasiyaları cədvəlləri yenidən hesablandı.
- Light fonda qadağan primitive-lər, qeyri-mətn elementləri və məlum uyğunsuzluqlar bölmələri əlavə olundu.
- Versiya `1.1.0` olaraq qeyd edildi.
- `AGENTS.md`-yə `next dev`-in yaratdığı agent-feedback bloku əlavə olundu.

**Commit:** `1913ee9` — `fix(design-system): correct WCAG contrast documentation`

**Nəticə:** Kontrast sənədləşməsi real nisbətlərlə üst-üstə düşür.

---

## 2. Spacing token düzəlişi

**Prompt (xülasə):** Token parity auditi 4px şkalasından kənar `2px`
padding tapıb. Komponent padding-ini spacing token-ləri ilə uyğunlaşdır.

**Dəyişiklik:**
- `KpiCard.module.css` trend badge: `padding: 2px var(--space-2)` → `padding: var(--space-1) var(--space-2)`.
- `StatusBadge.module.css` badge: eyni düzəliş.

**Commit:** `0f68a1d` — `fix(spacing): align component padding with design tokens`

**Nəticə:** Token parity: 0 spacing tapıntısı.

---

## 3. Teal HEX formatı

**Prompt (xülasə):** `DESIGN.md` Primitive Palette-də teal hex dəyərləri
markdown bold ilə yazılıb (`#**0F766E**`), parity skripti onları oxuya
bilmir. Formatı düzəlt, dəyərləri dəyişmə.

**Dəyişiklik:** `teal-50` … `teal-900` sətirlərində `#**HEX**` → `#HEX`.
Dəyərlər, o cümlədən brend anchor `#0F766E`, dəyişməyib.

**Commit:** `c0dd869` — `fix(tokens): correct palette hex formatting`

**Nəticə:** Token parity: 0 rəng tapıntısı.

---

## B1. Cədvəl hover kontrastı

**Prompt (xülasə):** Əməliyyat cədvəlində hover zamanı sətir fonu
`--color-bg-tertiary` olur və secondary mətn bu fonda AA-dan aşağı düşür.
Hover fonunu kontrastı qoruyan token ilə əvəz et.

**Dəyişiklik:** `app/_components/TransactionsTable.module.css`:
`.table tbody tr:hover` fonu `var(--color-bg-tertiary)` → `var(--color-bg-primary)`.

**Kontrast (hover zamanı secondary mətn):**

| Mode | Əvvəl (bg-tertiary) | Sonra (bg-primary) |
|------|---------------------|--------------------|
| Light | 4.34:1 — keçmir | 4.76:1 — keçir |
| Dark | 4.04:1 — keçmir | 6.96:1 — keçir |

**Commit:** `45fc15a` — `fix(a11y): improve transaction hover contrast`

**Nəticə:** Hover kontrastı hər iki mode-da AA-nı keçir.

---

## B2. Tertiary mətn kontrastı

**Prompt:**

> **Task: Fix B2 — Make the tertiary text token WCAG 2.2 AA compliant**
>
> The contrast audit identified that `--color-text-tertiary` fails WCAG 2.2 AA
> in both themes. Light mode, line 40: `var(--gray-400)` — 2.56:1 on white,
> 2.45:1 on gray-50. Dark mode, line 104: `var(--gray-500)` — 3.75:1 on
> gray-900, 3.07:1 on gray-800. Normal text and placeholder text require at
> least 4.5:1.
>
> Use the existing palette values: light → `var(--gray-500)`, dark →
> `var(--gray-400)`. Update all related references in `DESIGN.md` (Semantic
> Tokens table, contrast tables, forbidden combinations table, Known
> non-conformances). Preserve the token name and semantic role. Do not change
> the brand teal anchor `#0F766E`, introduce new colors or tokens, or modify
> other semantic tokens.
>
> Verify contrast against all documented surfaces, run
> `node token-parity.mjs app` and `git diff --check`, show the diff. Do not
> commit or push.

Əlavə prompt (audit nəticəsindən sonra):

> Keep the current semantic mappings. Update `DESIGN.md` to explicitly define
> the permitted backgrounds for tertiary text: `color-bg-primary` and
> `color-bg-secondary` in both modes. Tertiary text must not be used on
> `color-bg-tertiary`. The Known non-conformances section must not describe
> the token as an unresolved failure when used according to its rules.

**Dəyişiklik:**
- `app/globals.css`: light `--color-text-tertiary: var(--gray-500)`, dark `var(--gray-400)`.
- `DESIGN.md`:
  - Semantic Tokens cədvəlində mapping və icazəli fonlar qaydası.
  - Kontrast cədvəllərində icazəli və qadağan sətirlər.
  - Yeni "Qadağan token kombinasiyaları" bölməsi.
  - Placeholder bəndi məlum uyğunsuzluqlardan silindi.

**Kontrast:**

| Fon | Light (gray-500) | Dark (gray-400) | Status |
|-----|------------------|-----------------|--------|
| color-bg-primary | 4.76:1 | 6.96:1 | İcazəlidir |
| color-bg-secondary | 4.55:1 | 5.71:1 | İcazəlidir |
| color-bg-tertiary | 4.34:1 | 4.04:1 | Qadağandır |

Alternativlər (light gray-600, dark gray-300) bütün fonlarda keçir, amma
tertiary-ni secondary-dən daha qabarıq edib iyerarxiyanı tərsinə çevirir.
Ona görə qəbul olunmayıb.

**Commit:** `8b9b3e7` — `fix(a11y): correct tertiary text contrast`

**Nəticə:** Tertiary token icazəli fonlarda hər iki mode-da AA-nı keçir və heç bir komponentdə qadağan fonda istifadə olunmur.

---

## B3. Secondary mətn məhdudiyyətləri

**Prompt:**

> B3 düzəlişini həyata keçir. Yalnız `DESIGN.md` faylını dəyiş. CSS, semantic
> token mapping-ləri və komponentlərə toxunma.
>
> 1. Semantic Tokens cədvəlində `color-text-secondary` üçün qayda əlavə et:
>    mətn kimi yalnız `color-bg-primary` və `color-bg-secondary` üzərində;
>    `color-bg-tertiary` üzərində mətn kimi qadağandır; qeyri-mətn elementlər
>    (ikonlar) üçün 3:1 tələbi tətbiq olunur.
> 2. Light contrast cədvəlində `gray-500` on `gray-100` (4.34:1) kombinasiyasını
>    "Keçmir — qadağandır" kimi göstər.
> 3. Dark contrast cədvəlinə `gray-400` on `gray-700` (4.04:1) kombinasiyasını
>    əlavə et və qadağan kimi işarələ.
> 4. Qadağan token kombinasiyaları cədvəlinə hər iki kombinasiyanı əlavə et.
>    İkon istisnasını ayrıca izah et.
> 5. Known non-conformances bölməsindən bu problemi sil.
>
> Mövcud UI istifadəsinin dəyişmədiyini təsdiqlə, `node token-parity.mjs app`
> və `git diff --check` işə sal. Commit və push etmə.

**Audit:**
- `color-text-secondary` 14 yerdə istifadə olunur.
- Mətn kimi istifadə olunan bütün yerlər `bg-primary` və ya `bg-secondary` üzərindədir.
- Yeganə `bg-tertiary` istifadəsi `TransactionsTable.module.css:95`-dəki dekorativ istiqamət ikonudur (`aria-hidden`). Ona 3:1 tələbi tətbiq olunur və light 4.34:1, dark 4.04:1 ilə keçir.

**Dəyişiklik (yalnız `DESIGN.md`):**
- Semantic Tokens qaydası əlavə olundu.
- Light 4.34:1 sətri "Keçmir — qadağandır" kimi işarələndi.
- Əvvəl olmayan dark 4.04:1 sətri əlavə olundu.
- Qadağan kombinasiyalar cədvəlinə secondary sətirləri və ikon istisnası əlavə olundu.
- Bənd məlum uyğunsuzluqlardan silindi.

**Commit:** `914dab5` — `docs(a11y): document secondary text contrast restrictions`

**Nəticə:** Secondary mətn icazəli fonlarda hər iki mode-da AA-nı keçir, UI isə dəyişməyib.

---

## M1. Axtarış input-u üçün fokus halqası motion

**Motion auditi:**
- Layihədə `animation` və `@keyframes` yoxdur.
- Bütün keçidlər ≤ 200ms-dir.
- `prefers-reduced-motion` `globals.css`-də dəstəklənir.
- LCP elementində (`h1`) entrance animasiyası yoxdur.
- Problem: `TopBar.module.css:69` fokusda `border-color`-u 200ms animasiya edirdi. Bu, "yalnız `opacity`/`transform`" qaydasını pozur və fokus göstəricisini gecikdirir.

**Prompt (ilkin):**

> ## M1 — Remove Search Input Border Transition
>
> **Finding:** `app/_components/TopBar.module.css:69` —
> `transition: border-color var(--duration-normal) var(--ease-in-out);`
> Axtarış input-u fokus aldıqda border rəngi 200ms ərzində dəyişir.
>
> **Required change:** `.searchInput` qaydasından yalnız `transition` sətrini
> sil. `:focus-visible` üslubunu dəyişmə. Başqa fayllara toxunma.
>
> **Verification:** `grep -rn transition app`, fokus vəziyyəti,
> `prefers-reduced-motion`, `node token-parity.mjs app`, `git diff --check`.

**Prompt (yekun):**

> M1 düzəlişini tamamla: yalnız transition-u silmək əvəzinə, mövcud axtarış
> input-unun focus göstəricisinə kiçik motion əlavə et.
>
> - Focus göstəricisi `opacity` ilə animasiya olunsun.
> - Müddət 150–200ms olsun.
> - Border rəngi dərhal dəyişsin, gecikmə yaranmasın.
> - `prefers-reduced-motion` dəstəyi qorunsun.
> - Focus göstəricisinin əlçatanlığı və görünüşü pozulmasın.
> - Mövcud JSX strukturunu yoxla və əlavə wrapper yaratmaq zəruridirsə,
>   əvvəlcə bunu əsaslandır.
> - Başqa komponentlərə toxunma.
>
> Motion-u real brauzerdə yoxla. Token parity və `git diff --check`
> testlərini təkrarla.

**Fix:** Axtarış input-u üçün 200ms `opacity` əsaslı focus-ring keçidi əlavə edildi.

**Dəyişiklik (`app/_components/TopBar.module.css`):**
- `.searchInput`-dan `transition: border-color` silindi. Border rəngi animasiya edilmir, dərhal dəyişir.
- `.search::after`: 2px `--color-border-focus` halqası, 2px offset. Başlanğıcda `opacity: 0`, keçid `opacity var(--duration-normal) var(--ease-in-out)` (200ms).
- `.search:has(.searchInput:focus-visible)::after { opacity: 1; }`.
- Əlavə wrapper yaradılmayıb. `<input>` pseudo-element qəbul etmədiyi üçün mövcud `<form>` wrapper-i (artıq `position: relative`) istifadə olunub. JSX dəyişməyib.
- `prefers-reduced-motion` aktiv olduqda `globals.css`-dəki qlobal qayda animasiyanı söndürür.
- LCP elementlərinə entrance animasiyası əlavə edilməyib.

**Yoxlama (headless Chrome, CDP, Tab ilə klaviatura fokusu):**

| Ssenari | Input border | Halqa opacity | Nəticə |
|---------|--------------|---------------|--------|
| Light | t=0ms-də 2px teal-500 | 0 → 1.0 (~200ms) | Keçdi |
| Dark | t=0ms-də 2px teal-400 | 0 → 1.0 (~214ms) | Keçdi |
| Reduced motion | t=0ms-də 2px teal | t=0ms-də 1.0, animasiya yoxdur | Keçdi |
| Klaviatura fokusu | Tab sırası: logo → axtarış, `:focus-visible` = true | — | Keçdi |

Token parity: 0/0/0. `git diff --check`: təmiz.

**Commit:** `ca9c149` — `fix(a11y): add reduced-motion-aware focus ring transition`

**Nəticə:** Fokus dərhal görünür, motion yalnız `opacity` ilə işləyir və light, dark, klaviatura və reduced-motion yoxlamaları keçib.

> Qeyd: M1 zamanı light mode fokus rəngi (teal-500, 2.49:1) açıq məsələ idi; A1 (`aca38f6`) onu teal-600-a (5.47:1) dəyişərək həll edib.

---

## S1. Empty və error state-lər

**Prompt:**

> Module 8 Task 3 üçün qalan yoxlamaları sürətli şəkildə tamamla.
>
> 1. EMPTY / ERROR STATES — Mövcud komponentləri yoxla. Ən azı 2 komponentdə
>    empty və error state olduğunu təsdiqlə. Çatışmırsa, mövcud dizayn
>    sisteminə uyğun minimal state əlavə et. Hər iki state-in screenshot və ya
>    konkret fayl/sətir sübutunu göstər.
> 2. MANUAL ACCESSIBILITY — Tab, Shift+Tab, Enter, Space; focus indicator,
>    semantic HTML, label və accessible name-lər; minimal düzəlt; 5 meyar üzrə
>    PASS/FAIL.
> 3. RESPONSIVE — 320, 375, 768, 900, 1280 və 1600px; horizontal scroll yoxdur.
>
> Lazımsız refactor etmə. Mövcud design token-lərdən istifadə et. Commit və push etmə.

**Audit:** Heç bir komponentdə empty və ya error state yox idi.

**Dəyişiklik:**
- Yeni `StateMessage` komponenti. Empty `role="status"`, error `role="alert"` ilə render olunur. Error state "Yenidən cəhd et" linki (44px toxunma sahəsi) göstərir. Yalnız mövcud token-lər istifadə olunub.
- `TransactionsTable`: `error` prop-u əlavə olundu. Boş siyahıda "Hələ əməliyyat yoxdur", xətada "Əməliyyatlar yüklənmədi" göstərilir.
- `AccountConnections`: `error` prop-u əlavə olundu. Boş siyahıda "Bağlı hesab yoxdur", xətada "Hesablar yüklənmədi" göstərilir.
- Mənasız qalan alt başlıq gizlədilir.

**Yoxlama:**
- Production build-də müvəqqəti preview route ilə light, dark və 375px screenshot-ları çəkildi. Route sonra silindi.
- Retry linki Enter ilə `/`-a keçir.
- İkon kontrastı: empty ikonu secondary rəngdədir və 4.55:1+ alır. Error ikonu red-500-dür: light 3.60:1, dark 3.89:1, hər ikisi 3:1-i keçir.
- Responsive: 6 enin hamısında horizontal scroll yoxdur.

**Commit:** `49a1b6b` — `feat(ui): add empty and error states`

**Nəticə:** İki komponent artıq boş və xəta vəziyyətlərini əlçatan, dizayn sisteminə uyğun mesajla göstərir.

---

## A1. Trend etiketi və fokus kontrastı

**Prompt:** S1 ilə eyni prompt (2-ci bənd: MANUAL ACCESSIBILITY).

**Audit (klaviatura + AX tree, production build):**
- Trend badge `aria-label`-i rolsuz `span` üzərində idi. Ekran oxuyucuları bunu etibarlı oxumur.
- Light mode fokus rəngi teal-500 ağ fonda 2.49:1 idi, 3:1 tələbindən aşağı.
- `DESIGN.md` sətir 247 `color-border-focus`-u teal-600-dan qurulan token kimi təsvir edirdi, semantic cədvəl isə teal-500 göstərirdi. İkisi bir-birinə zidd idi.

**Dəyişiklik:**
- `KpiCard.tsx`: `aria-label` əvəzinə gizli "Artım/Azalma" mətni əlavə olundu. `+`/`−` işarəsi `aria-hidden` oldu. İşarə ilə rəqəm bir element içində saxlanılıb ki, flex `gap` vizual görünüşü dəyişməsin.
- `app/globals.css`: light mode `--color-border-focus` `var(--teal-500)` əvəzinə `var(--teal-600)` oldu.
- `DESIGN.md`: fokus sətirləri yeniləndi, light mode fokus bəndi məlum uyğunsuzluqlardan silindi.

**Yoxlama:**

| Meyar | Nəticə |
|-------|--------|
| Klaviatura ilə çatma (logo, axtarış, düymə) | PASS |
| Tab / Shift+Tab sırası, Enter / Space aktivləşməsi | PASS |
| Fokus göstəricisi (teal-600: ağ fonda 5.47:1, kartda 5.23:1) | PASS |
| Semantic HTML (landmark-lar, h1→h3, `th scope`, siyahı) | PASS |
| Label və accessible name (adsız interaktiv element yoxdur) | PASS |

**Commit:** `aca38f6` — `fix(a11y): improve trend labels and focus contrast`

**Nəticə:** Klaviatura ilə bütün yoxlamalar keçir, fokus göstəricisi light mode-da artıq 3:1 tələbini ödəyir.
