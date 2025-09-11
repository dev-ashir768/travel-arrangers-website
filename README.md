# Travel Arrangers Inc.

A modern travel agency website built with Next.js, TypeScript, Tailwind CSS, and ShadCN UI components.

![Travel Arrangers Inc.](public/images/branding/logo.svg)

## 🌟 Overview

Travel Arrangers Inc. is a trusted travel agency based in Mississauga offering flight bookings, vacation packages, and corporate travel services. This website provides a modern, responsive interface for customers to explore travel services and make bookings.

## ✨ Features

- **Modern UI/UX**: Built with Next.js 15, React 19, and Tailwind CSS
- **Responsive Design**: Fully responsive layout for all device sizes
- **Dynamic Navigation**: Dropdown menus for travel services and packages
- **Component Library**: Uses ShadCN UI components for consistent design
- **Type Safety**: Fully typed with TypeScript
- **Animation**: Smooth transitions and animations with Framer Motion

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) validation
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Font**: [Montserrat](https://fonts.google.com/specimen/Montserrat) from Google Fonts

## 📋 Services

- **Corporate Travel**: Tailored travel solutions for businesses
- **Cruises**: Luxury cruise experiences
- **Rail Europe**: European rail travel packages
- **Special Packages**:
  - Disney Vacations
  - Umrah & Hajj
  - Destawed (Special destination packages)
  - Ashura Travel
- **Travel Insurance**: Protection for your journey

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd travel-arrangers
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/                  # Next.js App Router
│   ├── fonts.ts          # Font configuration
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   └── ui/               # UI components
│       ├── foundations/  # Foundation components
│       └── shadcn/       # ShadCN UI components
├── json_data/            # Static data
│   └── navigation.tsx    # Navigation menu data
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
│   └── images/           # Image assets
└── type/                 # TypeScript types
    └── navigation.types.ts # Navigation type definitions
```

## 🔧 Configuration

- **ShadCN UI**: Configuration in `components.json`
- **TypeScript**: Configuration in `tsconfig.json`
- **Tailwind CSS**: Configuration in `tailwind.config.js`

## 📄 License

All rights reserved. This codebase is proprietary and confidential.

## 📞 Contact

Travel Arrangers Inc. - [Website](https://travelarrangers.ca)

---

© 2023 Travel Arrangers Inc. TICO licensed travel agency with 20+ years of expertise in Mississauga.
