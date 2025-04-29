# The Relay - Landing Page

A modern React landing page built with Vite, Material-UI, and React 18. This project serves as the landing page for The Relay platform.

## Tech Stack

- React 18
- Vite
- Material-UI (MUI) v6
- Emotion for styled components
- Lucide React for icons

## Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd therelay-landing-react
```

2. Install dependencies
```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000/](http://localhost:3000/) to view it in your browser.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run preview`

Previews the built app locally, useful for testing the production build before deployment.

### `npm test`

Launches the test runner (Vitest) in interactive watch mode.

## Project Structure

```
therelay-landing-react/
├── src/
│   ├── assets/        # Static assets
│   ├── Components/    # React components
│   ├── hooks/        # Custom React hooks
│   ├── styles/       # Global styles and theme
│   ├── App.jsx       # Main App component
│   ├── index.jsx     # Entry point
│   └── ThemeProvider.jsx # MUI theme configuration
├── public/           # Public static files
└── dist/            # Production build output
```

## Development

This project uses:
- Vite for fast development and optimized builds
- Material-UI for component library
- Emotion for styled components
- ESLint for code linting
- Vitest for testing

## Browser Support

The project supports modern browsers including:
- Latest versions of Chrome, Firefox, and Safari
- Edge
- Not optimized for Opera Mini

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Material-UI Documentation](https://mui.com/material-ui/)
- [Vitest Documentation](https://vitest.dev/guide/)
