// ========================================
// 1. IMPORT LOGO
// Mengimpor gambar logo Chill.
// ========================================

import logo from '../assets/Logo.png'


// ========================================
// 2. KOMPONEN FOOTER
// Menampilkan logo, hak cipta, genre, dan informasi bantuan.
// ========================================

function Footer() {
  return (
    <footer className="footer">
      {/* Logo dan hak cipta */}
      <div className="footer-brand">
        <img src={logo} alt="Chill" />
        <p>©2026 Chill All Rights Reserved.</p>
      </div>

      {/* Daftar genre film */}
      <div className="footer-genres">
        <h3>Genre</h3>

        <div className="genre-list">
          {/* Kolom genre pertama */}
          <div>
            <a href="#film">Aksi</a>
            <a href="#film">Komedi</a>
            <a href="#film">Anak-anak</a>
            <a href="#film">Petualangan</a>
            <a href="#film">Anime</a>
            <a href="#film">Perang</a>
            <a href="#film">KDrama</a>
          </div>

          {/* Kolom genre kedua */}
          <div>
            <a href="#film">Drama</a>
            <a href="#film">Sains & Alam</a>
            <a href="#film">Fantasi Ilmiah & Fantasi</a>
            <a href="#film">Thriller</a>
            <a href="#film">Kejahatan</a>
            <a href="#film">Britania</a>
            <a href="#film">Romantis</a>
          </div>
        </div>
      </div>

      {/* Informasi bantuan */}
      <div className="footer-help">
        <h3>Bantuan</h3>

        <div className="help-list">
          {/* Kolom bantuan pertama */}
          <div>
            <a href="#faq">FAQ</a>
            <a href="#privasi">Privasi</a>
          </div>

          {/* Kolom bantuan kedua */}
          <div>
            <a href="#kontak">Kontak Kami</a>
            <a href="#syarat">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}


// ========================================
// 3. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default Footer