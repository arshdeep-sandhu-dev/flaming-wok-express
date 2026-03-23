# 🔥 Claude Opus Prompt: Flaming Wok Express — Next.js Website

> **How to use this:** Paste the prompt below into a new Claude conversation 
> (Claude Opus recommended). Claude will scaffold a complete Next.js App Router 
> project. Run it locally with `npm run dev` and open `localhost:3000` to preview 
> before approaching the owners.

---

## Prerequisites

Make sure you have Node.js 18+ installed. After Claude generates the files, run:

```bash
npx create-next-app@latest flaming-wok-express --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd flaming-wok-express
# then paste in all generated files, replacing defaults
npm run dev
```

---

## The Prompt

```
You are a senior full-stack web developer and restaurant branding expert. 
Build me a complete, production-quality Next.js 14 App Router website for a 
real local restaurant called Flaming Wok Express in San Antonio, TX. I want 
to show this to the owners as a surprise proposal — it needs to look 
professional enough to make them say "we need this."

---

## Project Setup

Framework: Next.js 14 with App Router
Styling: Tailwind CSS + custom CSS variables for the brand palette
Fonts: Import via next/font/google — use a bold display font for headings 
  (something with fire/energy: "Bebas Neue", "Black Han Sans", or "Titan One") 
  paired with "DM Sans" for body copy
No component libraries — pure Tailwind + custom CSS
Image placeholders: Use next/image with Unsplash URLs for food photography 
  (search terms: "chinese fried rice wok", "orange chicken", etc.)

---

## Real Restaurant Data — Use ALL of This Exactly

**Name:** Flaming Wok Express  
**Tagline (from their own site):** "Prepare your taste buds..."  
**Address:** 6819 N Loop 1604 W, San Antonio, TX 78249  
**Phone:** (210) 257-0885  
**Cuisine type:** Chinese · Asian · Asian Fusion  
**Features:** Drive-Thru · Takeout · Delivery · Dine-In · Wheelchair Accessible 
  · WiFi · Parking · Credit Cards Accepted · Pets Allowed (patio)

**Hours:**
- Monday – Saturday: 11:00 AM – 9:00 PM  
- Sunday: Closed

**Ordering platforms they're already on:**
- Uber Eats, Postmates, Grubhub (link to these in the Order section)

---

## Real Menu — Use Exact Item Names, Descriptions & Prices

### ⭐ Fan Favorites (most ordered)
| Item | Price | Notes |
|------|-------|-------|
| Yang Chow Fried Rice | $15.74 | #1 Most Liked |
| Flaming Wok Fried Rice | $15.69 | #2 Most Liked — house specialty |
| Moo-Goo Gai Pan | $17.24 | #3 Most Liked |
| Orange Chicken | $17.24 | — |
| Beef with Broccoli | $19.42 | — |
| Crystal Shrimp | $19.54 | — |

### 🍲 Soups
| Item | Price | Description |
|------|-------|-------------|
| Hot & Sour Soup | $7.58 | Spicy, tangy broth loaded with wood ear mushrooms, bamboo strips, lily flowers, and egg ribbons. Earthy, bold, and invigorating. (SPICY) 🌶 |
| Wonton Soup | market price | Packed with shrimp, chicken, and a crisp vegetable blend of snow peas, bamboo shoots, and carrots. |

### 🍳 Fried Rice
| Item | Price | Description |
|------|-------|-------------|
| Flaming Wok Fried Rice | $15.69 | Wok fried rice tossed in a tangy tomato sauce with shrimp, chicken, and beef. Finished with fresh onions, carrots, and celery. Smoky, savory, and slightly sweet — our house specialty. |
| Yang Chow Fried Rice | $15.74 | Classic Yang Chow style with a generous blend of proteins and vegetables. |
| Jalapeño Chicken Fried Rice | market price | A San Antonio twist — spicy jalapeño heat meets wok-fired chicken and rice. |

### 🍜 Noodle Dishes
| Item | Price | Description |
|------|-------|-------------|
| Singapore Rice Noodles | $16.99 | Thin rice noodles wok-tossed in a fragrant curry sauce with shrimp, chicken, and beef. Accented with shredded onion, celery, bean sprouts, and carrots. Vibrant, savory, lightly spiced. (SPICY) 🌶 |
| Pan-Fried Noodles | $17.49 | Crispy, golden egg noodles topped with a savory trio of shrimp, chicken, and beef. The sauce creates a perfect contrast — top layer soft and flavorful, bottom wonderfully crunchy. |

### 🥩 Entrées
| Item | Price | Description |
|------|-------|-------------|
| Kung Pao Chicken | $17.24 | Diced chicken wok-tossed with chili peppers, onion whites, and water chestnuts in a spicy, tangy sauce. Topped with roasted peanuts for a classic, smoky crunch. |
| Bourbon Chicken | $17.24 | Our Famous Bourbon Chicken — marinated overnight and grilled to perfection. A house signature. |
| Moo-Goo Gai Pan | $17.24 | Tender chicken and fresh mushrooms in a delicate, savory white sauce. |
| Beef with Broccoli | $19.42 | Tender beef strips wok-tossed with crisp broccoli in a rich savory sauce. |
| Crystal Shrimp | $19.54 | Delicate shrimp in a light, glistening sauce. Subtle and elegant. |
| Orange Chicken | $17.24 | Crispy chicken tossed in a bright, tangy-sweet orange glaze. |

### 🥟 Appetizers
| Item | Price | Description |
|------|-------|-------------|
| Veggie Egg Roll (1) | $2.47 | Cabbage, carrot, celery, and onions in a crispy wrapper. |
| Pork Egg Roll (1) | $3.09 | Golden, crispy wrapper with a savory pork filling. |
| Crab Rangoon | market price | Crispy wonton wrappers stuffed with cream cheese. |
| Pork Dumplings (6 pcs) | market price | Six steamed dumplings filled with seasoned pork. |
| Beef Pan-Fried Dumplings (6 pcs) | market price | Six pan-fried dumplings filled with seasoned beef. |

### 🥤 Drinks
| Item | Price |
|------|-------|
| Fountain Drink – 24 oz | $2.06 |
| Fountain Drink – 32 oz | $2.64 |
| Iced Tea | $2.63 |
| Bottled Water | $3.21 |

---

## Design Direction

Commit fully to a **dark, fiery, bold aesthetic** — this should feel like a 
premium version of the restaurant's personality, not a generic "Chinese 
restaurant red and gold" template.

**Color palette (define as CSS custom properties in globals.css):**
```css
--flame-orange: #F5621E;
--ember-red: #C0392B;
--gold: #E8A838;
--charcoal: #111111;
--surface: #1A1A1A;
--card: #222222;
--text-primary: #F5F0E8;
--text-muted: #9A9083;
--border: #2E2E2E;
```

**Typography:** Bold display font for all headlines and section titles. DM Sans 
for all body copy and prices. Font size scale should be generous — big, 
restaurant-confident typography.

**Atmosphere effects:**
- Subtle radial gradient glow (orange/red) behind the hero headline
- Grain/noise texture overlay on the hero background (use CSS filter or an SVG 
  feTurbulence pattern)
- Cards with a very subtle inner glow on hover (box-shadow with flame-orange at 
  low opacity)
- Smooth scroll via `scroll-behavior: smooth` in globals
- Fade-up entrance animations using Tailwind's `animate-` classes + 
  IntersectionObserver in a client component

---

## File & Component Structure

Generate ALL of these files with complete, working code:

```
src/
├── app/
│   ├── layout.tsx          # Root layout with fonts, metadata, sticky nav
│   ├── page.tsx            # Home page (imports all sections)
│   └── globals.css         # CSS variables, base styles, animations
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile hamburger menu, smooth scroll links
│   ├── Hero.tsx            # Full-viewport section with tagline + CTAs
│   ├── About.tsx           # Brand story + drive-thru highlight
│   ├── FeaturedDishes.tsx  # Fan favorites grid (top 4-6 items, image + name + price)
│   ├── FullMenu.tsx        # Full scrollable menu, tabbed by category
│   ├── Highlights.tsx      # Icon feature cards (Drive-Thru, Fresh Wok, Bold Flavors, etc.)
│   ├── OrderOnline.tsx     # Links to Uber Eats, Postmates, Grubhub
│   ├── Location.tsx        # Hours, address, map embed, phone
│   └── Footer.tsx          # Logo, links, social placeholders, copyright
```

---

## Section-by-Section Specs

### `Navbar.tsx`
- Logo: flame emoji + "Flaming Wok Express" in display font
- Links: Menu, About, Order Online, Location
- Sticky with `backdrop-blur` + semi-transparent dark background on scroll
- Mobile: hamburger → full-screen overlay menu with animated open/close
- "Order Now" pill button in the nav (links to #order section)

### `Hero.tsx`
- Full-viewport height
- Background: dark with a dramatic radial gradient glow (ember red → transparent) 
  centered behind the text, plus a grain texture overlay
- Headline (3 lines, huge): 
  Line 1: "FIRE."  
  Line 2: "FLAVOR."  
  Line 3: "SAN ANTONIO."
- Sub-headline: "Prepare your taste buds. Wok-fired fresh, every order."
- Two CTAs: "See Our Menu" (smooth scroll to #menu) and "Order Online Now" 
  (smooth scroll to #order)
- Subtle animated ember/spark effect: 5–8 small dots that float upward using 
  CSS keyframe animations with random delays and positions
- Scroll indicator arrow at bottom

### `About.tsx`
- Two-column: left text, right decorative element
- Headline: "Born in the Flame"
- Body copy: Write a short, compelling brand story. This is a new local 
  restaurant on the northwest side of San Antonio (Loop 1604 corridor). They 
  offer a drive-thru, take their food seriously (Bourbon Chicken marinated 
  overnight), and are building a community following. The staff is friendly and 
  even offers samples. Keep the tone warm, confident, and community-focused.
- Callout stat boxes: "Drive-Thru Available", "Mon–Sat 11AM–9PM", 
  "(210) 257-0885"

### `FeaturedDishes.tsx`
- Section title: "San Antonio's Favorites"
- Grid of 6 cards for top dishes: Yang Chow Fried Rice, Flaming Wok Fried Rice, 
  Moo-Goo Gai Pan, Orange Chicken, Kung Pao Chicken, Bourbon Chicken
- Each card: Unsplash placeholder image (use relevant search terms in URL), 
  dish name, short description (from menu data above), price
- "Fan Favorite" badge on Yang Chow Fried Rice and Flaming Wok Fried Rice
- Hover: card lifts slightly, image scales 1.05, subtle glow border

### `FullMenu.tsx`
- Tabbed interface: Fan Favorites | Soups | Fried Rice | Noodles | Entrées | 
  Appetizers | Drinks
- Active tab indicator in flame-orange
- Each tab shows a clean list of items: name on left, price on right, 
  description below in muted text
- Spicy items get a 🌶 badge
- Menu data should be defined as a typed TypeScript const array at the top of 
  the file (not hardcoded inline in JSX)

### `Highlights.tsx`
- 4 feature cards in a row (2x2 on mobile):
  1. 🚗 **Drive-Thru Available** — Quick and convenient on Loop 1604
  2. 🔥 **Wok-Fired to Order** — Every dish made fresh in the flame
  3. 🌶 **Bold, Authentic Flavors** — From Kung Pao to our signature Bourbon 
     Chicken
  4. 🤝 **Friendly Local Service** — Family-run, community-first

### `OrderOnline.tsx`
- Full-width dark section with flame-orange accent
- Headline: "Order Your Way"
- Three platform buttons: 
  - Uber Eats → link: https://www.ubereats.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg
  - Postmates → link: https://postmates.com/store/flaming-wok-express-6819-n-loop-1604-w/jesWqQ5oUFGzBiS8R-QRSg
  - Grubhub → link: https://www.grubhub.com/restaurant/flaming-wok-express-6819-north-loop-1604-west-san-antonio/13398968
- Each button styled as a large card with the platform name and "Order Now →" 
  text; open in new tab

### `Location.tsx`
- Two-column: left = hours + address + phone, right = Google Maps embed
- Google Maps embed URL for 6819 N Loop 1604 W, San Antonio TX 78249:
  `https://maps.google.com/maps?q=6819+N+Loop+1604+W+San+Antonio+TX+78249&output=embed`
- Hours table (use exact data):
  - Monday – Saturday: 11:00 AM – 9:00 PM
  - Sunday: Closed
- Phone: (210) 257-0885 (make it a `tel:` link)
- "Get Directions" button → links to Google Maps URL

### `Footer.tsx`
- Logo, address, hours summary
- Delivery links (Uber Eats, Postmates, Grubhub)
- Social icons (placeholder `#` hrefs for Facebook, Instagram, TikTok)
- Copyright: © 2025 Flaming Wok Express — San Antonio, TX

---

## TypeScript Typing

Define a proper `MenuItem` type:
```typescript
type MenuItem = {
  name: string;
  price: string;
  description?: string;
  spicy?: boolean;
  badge?: string; // e.g. "Fan Favorite", "House Specialty"
};
```

Use this type for all menu data arrays.

---

## SEO & Metadata (in layout.tsx)

```typescript
export const metadata = {
  title: "Flaming Wok Express | Chinese & Asian Fusion | San Antonio, TX",
  description: "Wok-fired Chinese and Asian fusion in San Antonio. Drive-thru available. Famous Bourbon Chicken, Flaming Wok Fried Rice, Kung Pao, and more. Mon–Sat 11AM–9PM.",
  keywords: ["Chinese food San Antonio", "drive thru Chinese", "wok fired", "Asian fusion 1604"],
};
```

---

## Final Output Instructions

Generate every file in full — no truncation, no "// add the rest here" shortcuts. 
Each component must be complete and ready to paste directly into the project.

Output the files in this order:
1. `src/app/globals.css`
2. `src/app/layout.tsx`
3. `src/app/page.tsx`
4. `src/components/Navbar.tsx`
5. `src/components/Hero.tsx`
6. `src/components/About.tsx`
7. `src/components/FeaturedDishes.tsx`
8. `src/components/FullMenu.tsx`
9. `src/components/Highlights.tsx`
10. `src/components/OrderOnline.tsx`
11. `src/components/Location.tsx`
12. `src/components/Footer.tsx`

After all files, output the exact terminal commands to get the project running 
from scratch.
```

---

## After You Get the Code

**To run the preview:**
```bash
npx create-next-app@latest flaming-wok-express --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd flaming-wok-express
# Paste all generated files, overwriting defaults
npm run dev
# Open http://localhost:3000
```

**To deploy a shareable preview link (free, instant):**
```bash
npm install -g vercel
vercel
# Follow prompts — you'll get a live URL like flaming-wok-express.vercel.app
# Share this link with the owners
```

---

## Optional Follow-Up Prompts

> "Add a photo gallery section pulling real food photography from Unsplash using 
> the Next.js Image component with a masonry grid layout."

> "Add a catering inquiry form using React Hook Form with client-side validation."

> "Convert the FullMenu component to fetch from a local JSON file so menu updates 
> don't require code changes."

> "Write me a short pitch script I can use when I walk into Flaming Wok Express 
> to propose the website."

> "Add a toast notification that pops up after 10 seconds: 'Enjoying the preview? 
> Contact us to get this live.'"
