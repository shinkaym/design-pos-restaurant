# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Pristine Dining Management System** - A restaurant management web application featuring a modern, elegant UI with a burgundy and gold color scheme. The project consists of static HTML pages with vanilla CSS (no JavaScript frameworks or build tools).

**Technology Stack:**
- HTML5 for semantic markup
- CSS3 with CSS variables for theming
- Vanilla JavaScript for interactivity (no frameworks)
- Font Awesome 6.4.0 for icons
- Google Fonts: Playfair Display (headings) and Raleway (body text)
- No build process or npm dependencies

**Project Files (18 total):**
- 6 HTML pages (front-end interfaces)
- 8 CSS files (styling - 1 global, 1 components, 6 page-specific)
- 1 shared JavaScript file (common functions)

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
- All pages also import `styles/components.css` for shared UI components
- Responsive design using flexbox and grid
- Mobile-first approach with viewport meta tags
- Backdrop filters and gradient effects for modern aesthetics

### JavaScript Architecture

**shared.js** contains reusable functions for all pages:
- **Navigation Functions:** `toggleNavPopup()`, `closeNavPopup()` - Handle navigation popup visibility
- **Modal Functions:** `closeNoteModal()`, `closePrintModal()` - Manage modal dialogs (used by order and reservation pages)
- **Form Validation Helpers:** `validateEmail()`, `validatePhone()` - Email and phone number validation
- **Event Initialization:** DOMContentLoaded handler for global overlay/Escape key close behavior

**Usage Pattern:**
- Include `<script src="shared.js" defer></script>` in each HTML page
- Load shared.js before page-specific JavaScript if any
- All functions are global and accessible from inline handlers or external scripts

## Development Workflow

### Adding New Pages

1. Create `page_name.html` with:
   - Same DOCTYPE and meta setup as existing pages (see login.html for template)
   - Import order: `global.css` → `components.css` → `page_name.css` → `shared.js`
   - Font Awesome CDN link (already in all pages)
   - Link to `shared.js` with `defer` attribute for shared functions

2. Create `styles/page_name.css` with:
   - Page-specific styles only
   - Reference CSS variables from `global.css`
   - Use existing animation patterns (slideUp, slideInLeft, etc.)

3. Add page-specific JavaScript if needed (after shared.js in import order):
   - Functions should not conflict with shared.js functions
   - Prefix custom functions with page identifier (e.g., `orderPageInit()`)
   - Attach event listeners in DOMContentLoaded handler

4. Follow the color scheme: burgundy for headings/primary actions, beige for backgrounds, gold for accents

### Modifying Styles

**Global Changes:**
- Edit `styles/global.css` for colors, fonts, spacing, shadows
- CSS variables are prefixed with `--` and centralized at `:root`

**Page-Specific Changes:**
- Edit the corresponding page's CSS file
- Don't duplicate styles from `global.css`
- Reference color variables instead of hardcoding hex values

**Common Classes Across Pages:**
- `.container` - Main content wrapper (90% width, max 1600px, centered, with background and shadow)
- `.form-group` - Form field wrapper with consistent spacing
- `.form-label`, `.form-input` - Label and input styling
- `.branded-header` - Header section with logo and branding
- Navigation popup: `#navPopup`, `#navOverlay`, `.active` (toggle with `toggleNavPopup()`)
- Modals: `.modal`, `.modal.active` (close with modal-specific functions)

**JavaScript Patterns:**
- Form validation: Call `validateEmail()` or `validatePhone()` during form submission
- Popup toggles: Use `toggleNavPopup()` on button click, `closeNavPopup()` to close
- Modal dialogs: Use `closeNoteModal()` or `closePrintModal()` to dismiss
- All event listeners in shared.js automatically handle overlay clicks and Escape key

### Responsive Design

- Uses `max-width: 960px` for main containers
- Employs `display: flex` and `justify-content/align-items` for centering
- Background images use `background-attachment: fixed` for parallax effect
- Mobile padding handled with responsive margins (`margin: 40px auto`)

## Testing & Validation

**Manual Testing (No Build Process):**
- Open HTML files directly in browser or use a local server (e.g., `python -m http.server 8000`)
- Test across modern browsers: Chrome, Firefox, Safari, Edge
- Test responsive design at breakpoints: mobile (320px), tablet (768px), desktop (1200px)

**Validation Checklist:**
- CSS: Verify all color variables are used consistently, no hardcoded hex values
- JavaScript: Test form validation, popup/modal functionality, Escape key close
- Forms: Verify email/phone validation triggers correctly on login and register pages
- Navigation: Test popup open/close on all pages that have navigation
- Modals: Test modal open/close on order and reservation pages
- Responsive: Check layout at mobile, tablet, and desktop sizes

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

## Quick Development Commands

**Start local server (for testing):**
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

**View changes before committing:**
```bash
git status                      # See modified files
git diff styles/global.css     # View CSS changes
git diff login.html            # View HTML changes
```

## Git Workflow

When making changes:
- **CSS-only updates:** Commit separately (e.g., "Enhance search bar styles for mobile UX")
- **HTML structure changes:** Separate from CSS commits (e.g., "Add customer note section to bill page")
- **JavaScript updates:** Group with related page changes (e.g., "Implement shared validation functions")
- **Multi-page changes:** Group related pages together (e.g., "Update auth pages - login and register")
- Use descriptive messages with specifics: "Fix search-bar responsive design" not just "Fix styles"

**Recent commits show active areas:**
- Form validation and error handling (login, register)
- Responsive design refinement (search bar, card layouts)
- Shared JavaScript extraction (moved popup functions to shared.js)
- UI enhancements (date pickers, stats dashboards)

## Design Principles Observed

1. **Consistency** - All pages follow the same color scheme, typography, and spacing
2. **Elegance** - Gradient overlays, subtle shadows, and animations create refinement
3. **Readability** - High contrast between text and backgrounds
4. **Hierarchy** - Burgundy headings establish visual priority
5. **Luxury Aesthetic** - Serif headings and gold accents convey sophistication appropriate for fine dining

