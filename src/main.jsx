import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'         // ← not from ./components/…
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode><App/></React.StrictMode>
)