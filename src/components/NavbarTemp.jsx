// ========================================
// 1. IMPORT
// Mengimpor React Hook dan fungsi navigasi.
// ========================================

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// ========================================
// 2. KOMPONEN NAVBAR
// Menampilkan logo, menu navigasi, pencarian, dan tombol logout.
// ========================================

function Navbar({ searchTerm, setSearchTerm }) {
  // State untuk mengatur pencarian dan menu mobile.
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  // Menyiapkan navigasi halaman.
  const navigate = useNavigate()

  // Mengatur tampilan input pencarian.
  function toggleSearch() {
    setShowSearch(!showSearch)

    if (showSearch) {
      setSearchTerm('')
    }
  }

  // Mengatur tampilan menu mobile.
  function toggleMenu() {
    setShowMenu(!showMenu)
  }

  // Mengarahkan pengguna ke halaman login setelah logout.
  function handleLogout() {
    navigate('/')
  }

  // Menutup menu setelah pengguna memilih navigasi.
  function closeMenu() {
    setShowMenu(false)
  }

  // ========================================
  // 3. TAMPILAN NAVBAR
  // Menampilkan logo, menu, tombol aksi, dan input pencarian.
  // ========================================

  return (
    <nav className="navbar">
      {/* Logo CHILL */}
      <a href="#top" className="navbar-logo">
        CHILL
      </a>

      {/* Tombol pencarian dan menu mobile */}
      <div className="navbar-actions">
        <button
          type="button"
          className="search-button"
          onClick={toggleSearch}
          aria-label="Cari film"
          aria-expanded={showSearch}
        >
          🔍
        </button>

        <button
          type="button"
          className="menu-button"
          onClick={toggleMenu}
          aria-label={showMenu ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={showMenu}
        >
          {showMenu ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu navigasi */}
      <div
        className={`navbar-menu ${showMenu ? 'menu-open' : ''}`}
      >
        <a href="#series" onClick={closeMenu}>
          Series
        </a>

        <a href="#film" onClick={closeMenu}>
          Film
        </a>

        <a href="#daftar-saya" onClick={closeMenu}>
          Daftar Saya
        </a>

        <button
          type="button"
          className="logout-button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* Input pencarian */}
      {showSearch && (
        <input
          type="text"
          className="search-input"
          placeholder="Cari film..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          autoFocus
          aria-label="Cari film"
        />
      )}
    </nav>
  )
}


// ========================================
// 4. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default Navbar