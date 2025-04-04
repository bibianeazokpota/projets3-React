import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/Footer.css'
import Footer from './Components/Footer.jsx'
import App from './App.jsx'
import NavBar from './Components/NavBar.jsx' 
import './Components/NavBar.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <Footer />
  </StrictMode>,
)

