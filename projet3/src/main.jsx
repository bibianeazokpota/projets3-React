import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/Footer.css'
import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
)
