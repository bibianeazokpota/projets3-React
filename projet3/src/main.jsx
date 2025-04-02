import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/Footer.css'
import App from './App.jsx'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
