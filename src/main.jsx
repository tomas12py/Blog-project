import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Navbar } from './components/Navbar'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar
    routes={["Login"]}
    />
  </StrictMode>
)
