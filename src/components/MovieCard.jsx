// ========================================
// 1. KOMPONEN KARTU FILM
// Menerima data film dan status Daftar Saya dari komponen induk.
// ========================================

function MovieCard({
  movie,
  onAddToList,
  isSaved,
  onRemoveFromList,
}) {
  // ========================================
  // 2. IDENTITAS FILM
  // Menggunakan movieKey jika tersedia, atau id sebagai alternatif.
  // ========================================

  const movieKey = movie.movieKey || movie.id

  // ========================================
  // 3. TAMPILAN KARTU FILM
  // Menampilkan poster, informasi film, dan tombol Daftar Saya.
  // ========================================

  return (
    <div className="movie-card">
      {/* Poster film */}
      <img
        src={movie.poster}
        alt={movie.title}
      />

      {/* Informasi film */}
      <div className="movie-card-info">
        <h3>{movie.title}</h3>

        {movie.year && <p>{movie.year}</p>}

        {/* Tombol untuk menambah atau menghapus film dari Daftar Saya */}
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
          {isSaved ? '✓ Sudah Disimpan' : '+ Daftar Saya'}
        </button>
      </div>
    </div>
  )
}


// ========================================
// 4. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default MovieCard