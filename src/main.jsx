// ========================================
// 1. IMPORT
// Mengimpor React, React DOM, CSS, dan komponen App.
// ========================================

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


// ========================================
// 2. RENDER APLIKASI
// Menampilkan komponen App ke elemen root HTML.
// ========================================

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)