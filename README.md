# WhatsApp Link Generator

A modern web application to easily generate WhatsApp direct chat links, with support for custom messages, country code selection, emoji input, and instant QR code generation. Built with React, TypeScript, Vite, and Tailwind CSS.

![SayHi Link Website Screenshot](./src/assets/images/og-image.jpg)

## Features

- **Phone Number Input**: Enter any phone number with country code selection. 
- **Custom Message**: Add a pre-filled message to your WhatsApp link.
- **Emoji Picker**: Insert emojis into your message with ease.
- **QR Code Generation**: Instantly generate a QR code for your WhatsApp link.
- **Copy & Share**: Copy the generated link or QR code for easy sharing.
- **Templates**: Use message templates for quick link creation.
- **Dark/Light Theme**: Toggle between light and dark modes.
- **Responsive Design**: Works great on desktop and mobile devices.

## Demo

[Live Demo](https://sayhilink.netlify.app/)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```powershell
   git clone https://github.com/0x98c9/sayhi-link.git
   cd whatsapp-link-generator
   ```
2. **Install dependencies:**
   ```powershell
   npm install
   # or
   yarn install
   ```

### Running Locally

```powershell
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` (or as shown in your terminal).

### Building for Production

```powershell
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```powershell
npm run preview
# or
yarn preview
```

## Project Structure

```
project/
├── src/
│   ├── components/         # Reusable UI components
│   ├── contexts/           # React context providers
│   ├── hooks/              # Custom React hooks
│   ├── layouts/            # Layout components
│   ├── pages/              # Page components
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Utility functions
│   └── assets/             # Images and icons
├── index.html              # Main HTML file
├── package.json            # Project metadata and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
└── ...
```

## Configuration

- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Vite**: Fast build tool and dev server.
- **TypeScript**: Type safety for React components and utilities.

## Deployment

This project is ready for deployment on [Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/), or any static hosting provider.

- `netlify.toml` and `_redirects` are included for Netlify configuration.

## Contributing

Contributions are welcome! Please follow these guidelines:

- **Frontend Only**: This project is free, without authentication, and does not log or track any data. Therefore, no backend code will be accepted.
- Fork the repository and create a new branch for your feature or bug fix.
- Submit a pull request with a clear description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Emoji Mart](https://github.com/missive/emoji-mart) (for emoji picker)
- [qrcode.react](https://github.com/zpao/qrcode.react) (for QR code generation)

---

> © 2025 WhatsApp Link Generator. All rights reserved.
