# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Pristine Dining Management System** - A restaurant management web application featuring a modern, elegant UI with a burgundy and gold color scheme. The project consists of static HTML pages with vanilla CSS (no JavaScript frameworks or build tools).

**Technology Stack:**
- HTML5 for semantic markup
- CSS3 with CSS variables for theming
- Font Awesome 6.4.0 for icons
- Google Fonts: Playfair Display (headings) and Raleway (body text)
- No build process, framework, or dependencies

**Project Files (12 total, ~118KB):**
- 6 HTML pages (front-end interfaces)
- 5 CSS files (styling)
- No JavaScript files

## Architecture & Organization

### Design System

**Color Variables** (defined in `styles/global.css`):
- Primary: `#800020` (Burgundy) - used for headings, borders, accents
- Secondary: `#F5F5DC` (Beige) - background tints
- Accent: `#FFD700` (Gold) - highlights and special elements
- Text: `#333` (Dark gray)
- Background: `#FFFFFF` (White)

**Typography:**
- **Headings (h1, h2, h3):** Playfair Display, serif, bold (font-weight: 700)
- **Body Text:** Raleway, sans-serif, regular/medium
- **Font Sizes:** h1=3em, h2=2.2em, h3=1.7em

**Styling Patterns:**
- `--container-bg: rgba(255, 255, 255, 0.95)` - Semi-transparent white containers
- `--shadow: 0 4px 12px rgba(0, 0, 0, 0.1)` - Subtle drop shadows
- `--border-radius: 8px` - Consistent border radius
- CSS animations (slideUp, slideInLeft) for entrance effects
- Linear gradients for layered depth and visual interest

### Page Structure

**Authentication Pages:**
- `login.html` - User login interface with styled form inputs
- `register.html` - User registration interface

**Management Pages:**
- `order.html` - Order management system with stats dashboard
- `reservation.html` - Reservation/booking interface
- `restaurant_reception.html` - Front desk/reception management
- `restaurant_bill.html` - Billing and invoice management

**Styling Approach:**
- Each page has a dedicated CSS file (e.g., `login.html` + `login.css`)
- All pages import `styles/global.css` for base styles
- Responsive design using flexbox and grid
- Mobile-first approach with viewport meta tags
- Backdrop filters and gradient effects for modern aesthetics

## Development Workflow

### Adding New Pages

1. Create `page_name.html` with:
   - Same DOCTYPE and meta setup as existing pages
   - Import `styles/global.css` first
   - Import `styles/page_name.css` second
   - Font Awesome CDN link (already in all pages)

2. Create `styles/page_name.css` with:
   - Page-specific styles only
   - Reference CSS variables from `global.css`
   - Use existing animation patterns (slideUp, slideInLeft, etc.)

3. Follow the color scheme: burgundy for headings/primary actions, beige for backgrounds, gold for accents

### Modifying Styles

**Global Changes:**
- Edit `styles/global.css` for colors, fonts, spacing, shadows
- CSS variables are prefixed with `--` and centralized at `:root`

**Page-Specific Changes:**
- Edit the corresponding page's CSS file
- Don't duplicate styles from `global.css`
- Reference color variables instead of hardcoding hex values

**Common Classes Across Pages:**
- `.container` - Main content wrapper (90% width, max 960px, centered)
- `.form-group` - Form field wrapper
- `.form-label`, `.form-input` - Label and input styling
- `.branded-header` - Header section with logo and branding

### Responsive Design

- Uses `max-width: 960px` for main containers
- Employs `display: flex` and `justify-content/align-items` for centering
- Background images use `background-attachment: fixed` for parallax effect
- Mobile padding handled with responsive margins (`margin: 40px auto`)

## Testing & Validation

**Since this is a static HTML/CSS project:**
- No automated tests or build process
- Manual browser testing recommended across modern browsers (Chrome, Firefox, Safari, Edge)
- Test responsive design at breakpoints: mobile (320px), tablet (768px), desktop (1200px)
- Validate CSS for proper variable usage and color consistency

## Common Modifications

### Updating Brand Colors

Update `:root` variables in `styles/global.css`:
- `--primary-color: #800020` → Change burgundy
- `--accent-color: #FFD700` → Change gold
- All pages automatically inherit the new colors

### Adjusting Font Sizes

Modify heading sizes in `styles/global.css`:
- `h1 { font-size: 3em; }`
- `h2 { font-size: 2.2em; }`
- `h3 { font-size: 1.7em; }`

### Adding Icons

- Use Font Awesome classes: `<i class="fas fa-utensils"></i>`
- Icon gallery: https://fontawesome.com/icons
- Already included in all pages via CDN

## Git Workflow

Current commits show incremental development:
- `a1cff1b` - Initial project setup
- `fdeb189` - Font Awesome and styling updates
- `ea4d2c7` - Refactor reservation and billing pages with branding updates

When making changes:
- Commit CSS updates separately from HTML structure changes
- Group related page changes together (e.g., all form pages)
- Use descriptive messages: "Update order page styles" or "Add responsive design to reception page"

## Design Principles Observed

1. **Consistency** - All pages follow the same color scheme, typography, and spacing
2. **Elegance** - Gradient overlays, subtle shadows, and animations create refinement
3. **Readability** - High contrast between text and backgrounds
4. **Hierarchy** - Burgundy headings establish visual priority
5. **Luxury Aesthetic** - Serif headings and gold accents convey sophistication appropriate for fine dining

