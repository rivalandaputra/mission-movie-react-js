// ========================================
// 1. IMPORT DATA FILM
// Mengimpor data film dari setiap kategori.
// ========================================

import {
  continueWatchingMovies,
  topRatingMovies,
  trendingMovies,
  newReleaseMovies,
} from '../data/movies'


// ========================================
// 2. IMPORT HOOK REACT
// Mengimpor Hook untuk mengelola state.
// ========================================

import { useState } from 'react'


// ========================================
// 3. IMPORT ASSETS
// Mengimpor gambar untuk bagian Hero.
// ========================================

import heroImage from '../assets/moana.jpg'
import moanaLogo from '../assets/logo-moana.png'


// ========================================
// 4. IMPORT KOMPONEN
// Mengimpor komponen yang digunakan di halaman Home.
// ========================================

import MyList from './MyList'
import Navbar from './NavbarTemp'
import ContinueWatching from './ContinueWatching'
import MovieCard from './MovieCard'
import MovieSection from './MovieSection'
import Footer from './Footer'


// ========================================
// 5. KOMPONEN HOME
// Mengatur halaman utama, pencarian film,
// dan fitur Daftar Saya.
// ========================================

function Home() {
  // State untuk menyimpan kata kunci pencarian.
  const [searchTerm, setSearchTerm] = useState('')

  // State untuk menyimpan daftar film dari localStorage.
  const [savedMovies, setSavedMovies] = useState(() => {
    const saved = localStorage.getItem('myList')
    return saved ? JSON.parse(saved) : []
  })


  // ========================================
  // 6. MENGGABUNGKAN DATA FILM
  // Menggabungkan semua kategori dan mencegah
  // judul film yang sama muncul berulang.
  // ========================================

  const allMovies = [
    ...new Map(
      [
        ...continueWatchingMovies,
        ...topRatingMovies,
        ...trendingMovies,
        ...newReleaseMovies,
      ].map((movie) => [
        movie.title.toLowerCase().trim(),
        movie,
      ])
    ).values(),
  ]


  // ========================================
  // 7. MEMFILTER HASIL PENCARIAN
  // Mencari film berdasarkan judul.
  // ========================================

  const filteredMovies = allMovies.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase())
  )


  // ========================================
  // 8. MENAMBAHKAN FILM KE DAFTAR SAYA
  // Menyimpan film ke state dan localStorage.
  // ========================================

  function handleAddToList(movie) {
    // Mengambil identitas film.
    const movieKey = movie.movieKey || movie.id

    // Memeriksa apakah film sudah tersimpan.
    const alreadySaved = savedMovies.some(
      (savedMovie) =>
        (savedMovie.movieKey || savedMovie.id) === movieKey
    )

    // Menghentikan proses jika film sudah tersimpan.
    if (alreadySaved) return

    // Memperbarui daftar film yang tersimpan.
    const updatedList = [...savedMovies, movie]

    setSavedMovies(updatedList)
    localStorage.setItem('myList', JSON.stringify(updatedList))
  }


  // ========================================
  // 9. MENGHAPUS FILM DARI DAFTAR SAYA
  // Menghapus film dari state dan localStorage.
  // ========================================

  function handleRemoveFromList(movieKey) {
    // Membuat daftar tanpa film yang dipilih.
    const updatedList = savedMovies.filter(
      (movie) =>
        (movie.movieKey || movie.id) !== movieKey
    )

    // Memperbarui daftar film yang tersimpan.
    setSavedMovies(updatedList)
    localStorage.setItem('myList', JSON.stringify(updatedList))
  }


  // ========================================
  // 10. MEMERIKSA STATUS PENCARIAN
  // Menentukan apakah pengguna sedang mencari film.
  // ========================================

  const isSearching = searchTerm.trim() !== ''


  // ========================================
  // 11. TAMPILAN HALAMAN HOME
  // Menampilkan navigasi, film, dan footer.
  // ========================================

  return (
    <div className="home-page" id="top">
      {/* Navbar */}
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <main className="home-content">
        {/* Hero dan Lanjut Tonton */}
        {!isSearching && (
          <>
            {/* Hero film */}
            <section
              className="hero-section"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              <div className="hero-overlay">
                {/* Logo film */}
                <img
                  src={moanaLogo}
                  alt="Moana"
                  className="hero-title-logo"
                />

                {/* Deskripsi film */}
                <p>
                  Teenage Moana answers the Ocean's call and, for the
                  first time, voyages beyond the reef of her island of
                  Motunui with infamous demigod Maui on an unforgettable
                  journey to restore prosperity to her people.
                </p>

                {/* Tombol hero */}
                <div className="hero-buttons">
                  <button
                    type="button"
                    className="hero-button"
                  >
                    Mulai Tonton
                  </button>

                  <button
                    type="button"
                    className="hero-info-button"
                  >
                    ℹ Selengkapnya
                  </button>
                </div>
              </div>
            </section>

            {/* Bagian Lanjut Tonton */}
            <ContinueWatching
              movies={continueWatchingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />
          </>
        )}


        {/* Hasil pencarian */}
        {isSearching && (
          <section className="movie-section search-results">
            <h2>Hasil Pencarian</h2>

            {filteredMovies.length > 0 ? (
              <div className="movie-list">
                {filteredMovies.map((movie) => {
                  // Mengambil identitas film.
                  const movieKey = movie.movieKey || movie.id

                  // Memeriksa apakah film sudah tersimpan.
                  const isSaved = savedMovies.some(
                    (savedMovie) =>
                      (savedMovie.movieKey || savedMovie.id) === movieKey
                  )

                  // Menampilkan kartu film.
                  return (
                    <MovieCard
                      key={movieKey}
                      movie={movie}
                      onAddToList={handleAddToList}
                      onRemoveFromList={handleRemoveFromList}
                      isSaved={isSaved}
                    />
                  )
                })}
              </div>
            ) : (
              <p>Film tidak ditemukan.</p>
            )}
          </section>
        )}


        {/* Kategori film dan Daftar Saya */}
        {!isSearching && (
          <>
            {/* Top Rating */}
            <MovieSection
              id="series"
              title="Top Rating Film dan Series Hari Ini"
              movies={topRatingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            {/* Film Trending */}
            <MovieSection
              id="film"
              title="Film Trending"
              movies={trendingMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            {/* Rilis Baru */}
            <MovieSection
              title="Rilis Baru"
              movies={newReleaseMovies}
              onAddToList={handleAddToList}
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />

            {/* Daftar Saya */}
            <MyList
              savedMovies={savedMovies}
              onRemoveFromList={handleRemoveFromList}
            />
          </>
        )}
      </main>


      {/* Footer */}
      <Footer />
    </div>
  )
}


// ========================================
// 12. EXPORT KOMPONEN
// Agar komponen bisa digunakan oleh file lain.
// ========================================

export default Home