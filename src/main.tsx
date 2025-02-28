import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ClerkProvider } from '@clerk/clerk-react';

// Import your Publishable Key from your .env file
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// Ensure the publishable key is available, else throw an error
if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key. Please add it to your .env file as VITE_CLERK_PUBLISHABLE_KEY');
}

// Render the app, wrapping it with ClerkProvider to manage authentication
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* ClerkProvider manages authentication, pass publishable key */}
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <App />
    </ClerkProvider>
  </React.StrictMode>
);
