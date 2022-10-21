import { ThemeProvider } from '@emotion/react';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { lightTheme } from './themes/light-theme';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
