import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Preloader from './components/animation/Preloader.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Preloader />
    <App />
  </StrictMode>,
)
