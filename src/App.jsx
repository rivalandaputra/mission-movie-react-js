// ========================================
// 1. IMPORT
// Mengimpor komponen routing dan halaman aplikasi.
// ========================================

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'


// ========================================
// 2. KOMPONEN APP
// Mengatur navigasi antarhalaman menggunakan React Router.
// ========================================

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}


// ========================================
// 3. EXPORT KOMPONEN
// Agar komponen App bisa digunakan oleh file lain.
// ========================================

export default App