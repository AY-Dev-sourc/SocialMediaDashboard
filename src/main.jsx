import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/style/layout.css'
import './assets/style/style.css'
import './assets/style/effect.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
