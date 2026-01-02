# Tarinby - Smart Buying Platform

A modern, trustworthy fintech-style web application for smart, informed buying decisions with targeted deals.

## 🎯 Brand Promise
- **Smart, informed buying**
- **Targeted deals**
- Persian (RTL) UI with the brand name "Tarinby" in Latin

## 🎨 Design System

### Colors
- **Background**: Deep navy (#0a0e1a) and charcoal (#131720)
- **Primary Gradient**: Blue (#3b82f6) to Green (#10b981)
- **Text**: White (#ffffff) with subtle gray (#94a3b8) for secondary
- **Semantic Colors**:
  - Success: #10b981
  - Warning: #f59e0b
  - Destructive: #ef4444

### Typography
- **Primary Font**: Inter (for English/Latin)
- **RTL Font**: Vazirmatn (for Persian/Farsi)
- Font weights: 400 (normal), 500 (medium), 600 (semi-bold), 700 (bold)

### Spacing
- **Base Unit**: 8px
- Consistent 8px spacing system throughout

### Border Radius
- Small: 8px
- Medium: 12px (default)
- Large: 16px

### Shadows
- Soft shadows with subtle opacity
- Enhanced shadows for gradient buttons

## 📱 Screens

### 1. Landing / Home Page
- Hero section with logo and headline: "خرید خوب، با آگاهی"
- Primary CTA: "ثبت نیاز"
- Secondary CTA: "دیدن فرصت‌های بازار"
- 3-step explainer section
- Trust section highlighting differences from classifieds

### 2. Need Registration
- Multi-step form (3 steps) with progress stepper
- Category selector (Property / Car / Digital goods)
- Detailed property form with RTL support
- Confirmation screen after submission

### 3. Opportunities List
- Summary header showing matched opportunities
- Filterable opportunity cards with:
  - Match score percentage
  - Price fairness indicator
  - Risk badges
  - Key attributes
- Sorting and filtering options

### 4. Opportunity Detail
- Detailed match analysis
- Market price comparison widget
- "Why suitable / Why not suitable" explanations
- Request contact flow with:
  - Sign-in modal
  - Paywall modal for contact access

### 5. Seller Onboarding
- Listing submission (URL paste or manual entry)
- Match results showing qualified buyers
- Pay-per-request pricing model explanation

### 6. Component Library
- Complete design system documentation
- All reusable components showcase
- Color palette, typography, spacing reference
- For development handoff

## 🧩 Components

### Core Components
- **Logo**: Brand logo with gradient checkmark icon
- **GradientButton**: Primary, secondary, and outline variants
- **OpportunityCard**: Cards for displaying matched opportunities
- **Stepper**: Multi-step progress indicator
- **RTL Form Components**: Input, Select, Textarea with RTL support

## 🚀 Development

### Quick Navigation
In development mode, use the dev navigation panel (bottom-left) to quickly jump between screens.

### View Component Library
Add `?view=components` to the URL to see the complete component library.

### Screens
- Landing Page (default)
- Need Registration
- Opportunities List
- Opportunity Detail
- Seller Onboarding
- Component Library

## 🌐 RTL Support
Full RTL (Right-to-Left) layout support for Persian text:
- All form inputs support RTL
- Proper text alignment
- Correct layout flow for Persian content
- Brand name "Tarinby" remains in Latin

## 📐 Responsive Design
- **Desktop**: Full layout with sidebars and multi-column grids
- **Mobile**: Stacked layout with optimized spacing
- Breakpoints: sm, md, lg

## 🎯 Trust & Premium Feel
- Fintech-level trust indicators
- Clean, minimal layout
- No clutter
- Soft shadows and gradients
- Professional color scheme
- Clear information hierarchy

## 💡 User Flows

### Buyer Flow
1. Land on homepage
2. Register need with detailed requirements
3. View matched opportunities with scores
4. Explore detailed opportunity analysis
5. Request contact (sign-in → payment)

### Seller Flow
1. Submit listing (URL or manual)
2. See matched buyer needs
3. Accept qualified requests (pay-per-request)

## 🔧 Tech Stack
- React 18
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)
- Vazirmatn & Inter fonts

---

**© 2025 Tarinby.com | Tarinby.ir**
