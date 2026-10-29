// ========================================
// 1. KOMPONEN DAFTAR SAYA
// Menampilkan seluruh film yang tersimpan.
// ========================================

function MyList({ savedMovies, onRemoveFromList }) {
  // ========================================
  // 2. TAMPILAN DAFTAR SAYA
  // Menampilkan pesan kosong atau daftar kartu film.
// ========================================

  return (
    <section className="movie-section" id="daftar-saya">
      <h2>Daftar Saya</h2>

      {/* Menampilkan pesan jika daftar film kosong */}
      {savedMovies.length === 0 ? (
        <p className="empty-list">
          Belum ada film yang kamu simpan.
        </p>
      ) : (
        <div className="movie-list">
          {savedMovies.map((movie) => (
            <div
              className="movie-card"
              key={movie.movieKey || movie.id}
            >
              {/* Poster film */}
              <img
                src={movie.poster}
                alt={movie.title}
              />

              {/* Informasi film */}
              <div className="movie-card-info">
                <h3>{movie.title}</h3>

                {movie.year && <p>{movie.year}</p>}

                {/* Tombol untuk menghapus film dari Daftar Saya */}
                <button
                  type="button"
                  className="remove-list-button"
                  onClick={() =>
                    onRemoveFromList(movie.movieKey || movie.id)
                  }
                >
                  Hapus dari Daftar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}


// ========================================
// 3. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh Home.jsx.
// ========================================

export default MyList