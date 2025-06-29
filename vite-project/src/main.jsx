import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Proj1 from './Proj1.jsx'
import Forms from './Forms.jsx'
import ColorPicker from './ColorPicker.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    <Proj1 />
    <Forms/>
    <ColorPicker/>
  </StrictMode>,
)
