// ========================================
// 1. IMPORT
// Mengimpor React Hook, CSS, logo, dan komponen navigasi.
// ========================================

import { useState } from 'react'
import './Auth.css'
import logo from '../assets/Logo.png'
import { Link, useNavigate } from 'react-router-dom'


// ========================================
// 2. KOMPONEN LOGIN
// Menampilkan form login dan memeriksa akun pengguna.
// ========================================

function Login() {
  const navigate = useNavigate()

  // State untuk menyimpan input pengguna dan pesan.
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')


  // ========================================
  // 3. FUNGSI LOGIN
  // Memeriksa username dan password yang dimasukkan.
  // ========================================

  function handleLogin(event) {
    event.preventDefault()

    // Mengambil data akun dari localStorage.
    const savedUser = localStorage.getItem('user')

    // Memeriksa apakah akun sudah terdaftar.
    if (!savedUser) {
      setMessage('Akun belum terdaftar!')
      return
    }

    // Mengubah data akun menjadi objek.
    const user = JSON.parse(savedUser)

    // Memeriksa kecocokan username dan password.
    if (user.username === username && user.password === password) {
      navigate('/home')
    } else {
      setMessage('Username atau password salah!')
    }
  }


  // ========================================
  // 4. TAMPILAN HALAMAN LOGIN
  // Menampilkan form login dan navigasi ke halaman lain.
  // ========================================

  return (
    <div className="auth-page login-page">
      <div className="auth-card">
        {/* Logo Chill */}
        <div className="auth-logo">
          <img src={logo} alt="CHILL" />
        </div>

        {/* Judul dan deskripsi */}
        <h1>Masuk</h1>
        <p className="auth-subtitle">Selamat datang kembali!</p>

        {/* Form login */}
        <form onSubmit={handleLogin}>
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

          {/* Link pendaftaran dan lupa kata sandi */}
          <p className="auth-links">
            <span>
              Belum punya akun? <Link to="/register">Daftar</Link>
            </span>

            <a href="#">Lupa kata sandi?</a>
          </p>

          {/* Tombol login */}
          <button type="submit" className="auth-button">
            Masuk
          </button>

          {/* Pesan hasil login */}
          {message && <p>{message}</p>}
        </form>

        {/* Pemisah metode login */}
        <div className="auth-divider">
          <span>Atau</span>
        </div>

        {/* Tombol login Google */}
        <button type="button" className="google-button">
          G&nbsp; Masuk dengan Google
        </button>
      </div>
    </div>
  )
}


// ========================================
// 5. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default Login