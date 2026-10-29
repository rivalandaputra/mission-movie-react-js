// ========================================
// 1. IMPORT
// Mengimpor React Hook, komponen navigasi, CSS, dan logo.
// ========================================

import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auth.css'
import logo from '../assets/Logo.png'


// ========================================
// 2. KOMPONEN REGISTER
// Menampilkan form pendaftaran akun pengguna.
// ========================================

function Register() {
  // State untuk menyimpan input pengguna dan pesan.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')


  // ========================================
  // 3. FUNGSI REGISTER
  // Memeriksa input dan menyimpan akun baru ke localStorage.
// ========================================

  function handleRegister(event) {
    event.preventDefault()

    // Memeriksa kesesuaian password dan konfirmasinya.
    if (password !== confirmPassword) {
      setMessage('Password dan konfirmasi password tidak sama!')
      return
    }

    // Mengambil data akun yang sudah tersimpan.
    const savedUser = localStorage.getItem('user')

    // Memeriksa apakah username sudah digunakan.
    if (savedUser) {
      const existingUser = JSON.parse(savedUser)

      if (existingUser.username === username) {
        setMessage('Username sudah digunakan!')
        return
      }
    }

    // Menyiapkan data akun baru.
    const user = {
      username: username,
      password: password,
    }

    // Menyimpan akun ke localStorage.
    localStorage.setItem('user', JSON.stringify(user))

    setMessage('Pendaftaran berhasil! Silakan login.')
  }


  // ========================================
  // 4. TAMPILAN HALAMAN REGISTER
  // Menampilkan form pendaftaran dan navigasi ke halaman login.
// ========================================

  return (
    <div className="auth-page register-page">
      <div className="auth-card">
        {/* Logo CHILL */}
        <div className="auth-logo">
          <img src={logo} alt="Chill" />
        </div>

        {/* Judul dan deskripsi */}
        <h1>Daftar</h1>
        <p className="auth-subtitle">Selamat datang!</p>

        {/* Form pendaftaran */}
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Masukkan username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-password">
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Masukkan ulang password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          {/* Link menuju halaman login */}
          <p className="auth-links">
            <span>
              Sudah punya akun? <Link to="/">Masuk</Link>
            </span>
          </p>

          {/* Tombol daftar */}
          <button type="submit" className="auth-button">
            Daftar
          </button>

          {/* Pesan hasil pendaftaran */}
          {message && <p>{message}</p>}
        </form>

        {/* Pemisah metode pendaftaran */}
        <div className="auth-divider">
          <span>Atau</span>
        </div>

        {/* Tombol pendaftaran Google */}
        <button type="button" className="google-button">
          G&nbsp; Daftar dengan Google
        </button>
      </div>
    </div>
  )
}


// ========================================
// 5. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default Register
