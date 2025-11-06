# MarkIt Website

A modern, responsive download page for the MarkIt Progressive Web Application - a digital marketplace connecting farmers and fisherfolk directly with consumers.

## About MarkIt

MarkIt is a Progressive Web Application (PWA) designed to bridge the gap between smallholder farmers, fisherfolk, and consumers in rural Philippine communities. Built with accessibility in mind, MarkIt works on low-end smartphones with minimal data requirements, ensuring that even communities with limited digital infrastructure can participate in fair and transparent agricultural trade.

### Key Features

- **Offline-First Design**: Works seamlessly even with intermittent connectivity
- **Direct Connection**: Eliminates costly middlemen between producers and consumers
- **Real-Time Messaging**: Instant communication with message persistence
- **Price Analytics**: Transparent pricing with market data visualization
- **Multilingual Support**: Available in English, Tagalog, and Waray
- **Secure & Private**: ISO/IEC 27001 compliant with encrypted data storage

## Tech Stack

- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone or navigate to the project directory:
```bash
cd "/home/kzyarou/Downloads/Projects/MarkIt Website"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
MarkIt Website/
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind
├── public/              # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS configuration
```

## Customization

### Update Download Links

Edit the download button `href` attributes in `src/App.tsx`:

```tsx
// Android Download
<a href="YOUR_ANDROID_APK_URL">

// Web App
<a href="YOUR_WEB_APP_URL">
```

### Change Colors

Modify the color scheme in `tailwind.config.js`:

```js
colors: {
  primary: {
    // Your custom colors
  },
}
```

## Research Background

MarkIt was developed through rigorous research in Dolores, Eastern Samar, Philippines. The platform addresses systemic inefficiencies in agricultural supply chains by promoting direct producer-to-consumer engagement.

- **Tested with**: 30 participants (farmers, fisherfolk, local buyers)
- **Standards**: ISO/IEC 25010:2011, ISO 9241-210:2019, ISO/IEC 27001:2022
- **Impact**: 30-50% income increase for producers by eliminating intermediaries

## License

Open-source digital marketplace for rural communities.

## Contact

For more information about the MarkIt project, please refer to the research paper and documentation.
