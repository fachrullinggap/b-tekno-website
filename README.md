# B-Tekno Website

Corporate website for **PT Bumi Teknologi Berkah (B-Tekno)**, focused on OT/IT convergence, industrial software, IIoT edge hardware, and OT/IT cybersecurity solutions.

The website is available in Indonesian and English and is built as a responsive single-page Next.js application.

## Main Features

- Indonesian and English language switching with `localStorage` persistence
- Responsive navigation and mobile menu
- Industrial solutions and OT/IT architecture overview
- Enterprise historian and operational feature sections
- Industry use cases
- Interactive location and Google Maps section
- Technical consultation form that opens the visitor's email client
- Direct company and WhatsApp contact links
- Smooth entrance and scroll animations
- Copy-to-clipboard coordinates

## Technology

- **Next.js 16** using the App Router
- **React 19**
- **Tailwind CSS 4**
- **Framer Motion**
- **Lucide React** and **React Icons**
- **Geist** and **Geist Mono** fonts

## Project Structure

```text
.
├── public/
│   └── logo.png              # Main B-Tekno brand logo
├── src/
│   ├── app/
│   │   ├── globals.css       # Global styles and Tailwind setup
│   │   ├── layout.jsx        # Root layout and website metadata
│   │   └── page.jsx          # Main bilingual landing page
│   └── components/
│       ├── Footer.jsx        # Bilingual footer and contact details
│       └── Navbar.jsx        # Responsive navigation and language switcher
├── next.config.mjs
├── postcss.config.mjs
└── package.json
```

## Requirements

- Node.js 18.17 or newer
- npm

## Installation

From the project directory:

```bash
npm install
```

## Development

Start the Next.js development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Run the production build |
| `npm run lint` | Run ESLint |

## Production Build

```bash
npm run build
npm run start
```

## Customization

### Content and sections

Most landing-page content is maintained in the Indonesian and English dictionaries in `src/app/page.jsx`. The main content includes:

- Hero and CTA text
- Integration challenges
- Products and solutions
- OT/IT architecture
- Historian features
- Industry use cases
- Company and location information
- Consultation form fields

### Navigation and footer

- Navigation links and language labels are defined in `src/components/Navbar.jsx`.
- Footer navigation and contact details are defined in `src/components/Footer.jsx`.

### Branding

- Replace `public/logo.png` to update the site logo.
- Update metadata in `src/app/layout.jsx` to change the page title or description.
- Update theme tokens and global styles in `src/app/globals.css`.

### Company location

The current location configuration is in `src/app/page.jsx`:

- Cikampek Industrial Corridor, Karawang, West Java
- Coordinates: `-6.4189, 107.4567`

Update `COMPANY_LOCATION` and the matching footer map link if the location changes.

## Contact Information

- **Technical:** Fachrul Lingga Pramadia — `fachrul.lingga@b-tekno.com` — `+62 821-2802-7268`
- **Marketing:** Angga Kusumah — `angga.k@b-tekno.com` — `+62 813-2252-2708`

## Notes

Several visual elements use local SVG illustrations or embedded placeholder graphics. Replace the matching constants or files in `src/app/page.jsx` and `public/` with approved photography and final brand assets before production release.