# Dr. Serena Blake, PsyD - Clinical Psychologist Website

A professional, responsive website for Dr. Serena Blake, a licensed clinical psychologist in Los Angeles, CA. Built with **Next.js 14** and **Tailwind CSS**.

## 🌟 Features

- **Modern, Professional Design** - Clean, calming aesthetic suitable for a therapy practice
- **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **Complete Sections**:
  - Hero Section with prominent "Book a Free Consult" button
  - About Section with credentials and experience
  - Services & Specialties (Anxiety, Relationship Counseling, Trauma Recovery)
  - Office Hours & Location (In-person and Virtual sessions)
  - Session Fees (Individual and Couples)
  - FAQ Section
  - Contact Form
- **Google Form Integration** - "Book a Free Consult" button opens Google Form in new tab
- **Accessibility Features** - Keyboard navigation, screen reader friendly, proper focus states
- **Professional Typography** - Inter and Playfair Display fonts for readability and elegance

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dr-serena-blake-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm run start
```

## 📱 Responsive Design

The website is fully responsive and provides an optimal viewing experience across all devices:

- **Desktop**: Full navigation bar, two-column layouts
- **Tablet**: Adapted layouts with proper spacing
- **Mobile**: Hamburger menu, stacked sections, mobile-optimized forms

## 🎨 Color Scheme

Professional color palette designed for a calming, trustworthy appearance:

- **Primary Colors**: Blues (#0ea5e9, #0284c7, #0369a1)
- **Secondary Colors**: Greens and Purples for accents
- **Neutral Colors**: Grays for text and backgrounds
- **Background**: Clean whites and light grays

## 📞 Contact Information

- **Phone**: (323) 555-0192
- **Email**: serena@blakepsychology.com
- **Address**: 1287 Maplewood Drive, Los Angeles, CA 90026

## 📅 Office Hours

- **In-Person**: Tuesday & Thursday, 10:00 AM – 6:00 PM
- **Virtual**: Monday, Wednesday & Friday, 1:00 PM – 5:00 PM

## 💰 Session Fees

- **Individual Session**: $200 (50 minutes)
- **Couples Session**: $240 (50 minutes)

## 🔧 Technical Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Typography**: Google Fonts (Inter, Playfair Display)
- **Language**: TypeScript
- **Deployment**: Optimized for Vercel

## 📁 Project Structure

```
dr-serena-blake-website/
├── app/
│   ├── globals.css          # Global styles and Tailwind setup
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main homepage component
├── components/
│   └── MobileMenu.tsx       # Mobile navigation component
├── public/                  # Static assets
└── README.md               # This file
```

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

Or deploy manually:
```bash
npm run build
```

## 📝 Customization

To customize for different therapists or practices:

1. Update contact information in `app/page.tsx`
2. Modify services and specialties
3. Change colors in `app/globals.css`
4. Update the Google Form URL in the "Book a Free Consult" button
5. Replace the therapist's photo URL

## 🔍 SEO Optimization

- Proper meta tags and descriptions
- Structured data for local business
- Optimized images with alt text
- Clean URL structure
- Fast loading times

## 🎯 Call-to-Action

The prominent "Book a Free Consult" button in the hero section links to:
**Google Form URL**: https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit

## 📞 Support

For any questions or modifications, please contact the development team.

---

**Built with ❤️ for mental health professionals**

*Licensed under standard web development practices for professional therapy websites.*
