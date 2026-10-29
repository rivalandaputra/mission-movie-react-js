// ========================================
// 1. IMPORT
// Mengimpor useRef untuk mengakses elemen carousel film.
// ========================================

import { useRef } from 'react'


// ========================================
// 2. KOMPONEN SECTION FILM
// Menerima data film dan fungsi untuk mengelola Daftar Saya.
// ========================================

function MovieSection({
  id,
  title,
  movies,
  onAddToList,
  savedMovies,
  onRemoveFromList,
}) {
  // ========================================
  // 3. REFERENSI CAROUSEL
  // Mengakses daftar film untuk menggeser tampilannya.
// ========================================

  const sliderRef = useRef(null)

  // ========================================
  // 4. FUNGSI GESER FILM
  // Menggeser daftar film ke kiri atau kanan.
// ========================================

  function scrollSlider(direction) {
    if (!sliderRef.current) return

    sliderRef.current.scrollBy({
      left: direction * 350,
      behavior: 'smooth',
    })
  }

  // ========================================
  // 5. TAMPILAN SECTION FILM
  // Menampilkan judul, daftar film, dan tombol panah.
// ========================================

  return (
    <section className="trending-section" id={id}>
      <h2>{title}</h2>

      <div className="trending-wrapper">
        {/* Tombol geser ke kiri */}
        <button
          type="button"
          className="trending-arrow trending-prev"
          onClick={() => scrollSlider(-1)}
          aria-label="Geser ke kiri"
        >
          ‹
        </button>

        {/* Daftar kartu film */}
        <div className="trending-list" ref={sliderRef}>
          {movies.map((movie) => {
            // Menentukan identitas film.
            const movieKey = movie.movieKey || movie.id

            // Memeriksa apakah film sudah tersimpan.
            const isSaved = savedMovies.some(
              (savedMovie) =>
                (savedMovie.movieKey || savedMovie.id) === movieKey
            )

            return (
              <div className="trending-card" key={movie.id}>
                {/* Poster dan badge film */}
                <div className="trending-poster">
                  <img src={movie.poster} alt={movie.title} />

                  {movie.badge && (
                    <span
                      className={`movie-badge ${movie.badgeType || ''}`}
                    >
                      {movie.badge}
                    </span>
                  )}
                </div>

                {/* Judul dan rating film */}
                <h3>{movie.title}</h3>

                <p className="movie-rating">
                  ⭐ {movie.rating}
                </p>

                {/* Tombol untuk mengelola Daftar Saya */}
                <button
                  type="button"
                  className="my-list-button"
                  onClick={() => {
                    if (isSaved) {
                      onRemoveFromList(movieKey)
                    } else {
                      onAddToList(movie)
                    }
                  }}
                >
                  {isSaved
                    ? '✓ Sudah Ditambahkan'
                    : '+ Daftar Saya'}
                </button>
              </div>
            )
          })}
        </div>

        {/* Tombol geser ke kanan */}
        <button
          type="button"
          className="trending-arrow trending-next"
          onClick={() => scrollSlider(1)}
          aria-label="Geser ke kanan"
        >
          ›
        </button>
      </div>
    </section>
  )
}


// ========================================
// 6. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default MovieSection