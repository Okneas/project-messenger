import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import ThemeProvider from './theme/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
      <CssBaseline enableColorScheme></CssBaseline>
      <App />
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
