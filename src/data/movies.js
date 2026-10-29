// ========================================
// 1. IMPORT GAMBAR
// Mengimpor poster film untuk setiap kategori.
// ========================================

// Lanjut Tonton
import moanaPoster from '../assets/Moana_(2026_film)_poster.jpg'
import spiderManPoster from '../assets/spider-man.jpg'
import gameOfThronesPoster from '../assets/game-of-thrones.jpg'
import shopForKillersPoster from '../assets/a-shop-for-killers.jpg'
import niceOnesPoster from '../assets/the-nice-ones.jpg'
import mentalistPoster from '../assets/the-mentalist.jpg'

// Top Rating
import flexxCopPoster from '../assets/Flexx_Cop-p.jpg'
import lanternsPoster from '../assets/lantern-top-rating.jpg'
import boneFideKillerPoster from '../assets/A_Bona_Fide_Killer_poster.png'
import fourHandsPoster from '../assets/four-hands.jpg'

// Film Trending
import loveHypothesisPoster from '../assets/the-love-hypothesis.jpg'
import uprisingPoster from '../assets/The_Uprising_(2026_film)_poster.jpg'
import runnerPoster from '../assets/runner.jpg'
import endOfOakStreetPoster from '../assets/The_End_of_Oak_Street_poster.jpg'

// Rilis Baru
import sakamotoPoster from '../assets/sakamoto-days.jpg'
import nightAndDayPoster from '../assets/Virginia_Woolf\'s_Night_and_Day.jpg'
import mononokePoster from '../assets/Mononoke_Paper_Umbrella_Film_Poster.jpg'
import datesPoster from '../assets/40-dates-40-nights.jpg'


// ========================================
// 2. DATA LANJUT TONTON
// Menyimpan informasi film yang sedang ditonton.
// ========================================

export const continueWatchingMovies = [
  {
    id: 1,
    title: 'Moana',
    year: 2026,
    poster: moanaPoster,
    progress: 70,
  },
  {
    id: 2,
    movieKey: 'spider-man',
    title: 'Spider-Man: Brand New Home',
    year: 2026,
    poster: spiderManPoster,
    progress: 45,
  },
  {
    id: 3,
    title: 'Game of Thrones',
    year: 2011,
    poster: gameOfThronesPoster,
    progress: 85,
  },
  {
    id: 4,
    title: 'A Shop for Killers',
    year: 2024,
    poster: shopForKillersPoster,
    progress: 30,
  },
  {
    id: 5,
    title: 'The Nice Ones',
    year: 2025,
    poster: niceOnesPoster,
    progress: 60,
  },
  {
    id: 6,
    title: 'The Mentalist',
    year: 2008,
    poster: mentalistPoster,
    progress: 25,
  },
]


// ========================================
// 3. DATA TOP RATING
// Menyimpan informasi film dengan kategori Top Rating.
// ========================================

export const topRatingMovies = [
  {
    id: 6,
    title: 'The Mentalist',
    year: 2008,
    poster: mentalistPoster,
    rating: '8.4',
    badge: 'Trending 1',
    badgeType: 'blue',
  },
  {
    id: 102,
    title: 'Flex X Cop',
    year: 2024,
    poster: flexxCopPoster,
    rating: '7.9',
    badge: 'Episode Baru',
    badgeType: 'blue',
  },
  {
    id: 103,
    title: 'Lanterns',
    year: 2026,
    poster: lanternsPoster,
    rating: '6.8',
  },
  {
    id: 104,
    title: 'A Bone Fide Killer',
    year: 2026,
    poster: boneFideKillerPoster,
    rating: '7.6',
  },
  {
    id: 105,
    title: 'Four Hands Two Sonatas',
    year: 2026,
    poster: fourHandsPoster,
    rating: '6.8',
    badge: 'Top 10',
    badgeType: 'orange',
  },
]


// ========================================
// 4. DATA FILM TRENDING
// Menyimpan informasi film yang sedang trending.
// ========================================

export const trendingMovies = [
  {
    id: 201,
    title: 'The Love Hypothesis',
    year: 2026,
    poster: loveHypothesisPoster,
    rating: '8.8',
    badge: 'Top 10',
    badgeType: 'orange',
  },
  {
    id: 202,
    title: 'The Uprising',
    year: 2026,
    poster: uprisingPoster,
    rating: '7.2',
  },
  {
    id: 203,
    title: 'Runner',
    year: 2026,
    poster: runnerPoster,
    rating: '8.0',
  },
  {
    id: 204,
    movieKey: 'spider-man',
    title: 'Spider-Man: Brand New Home',
    year: 2026,
    poster: spiderManPoster,
    rating: '7.9',
  },
  {
    id: 205,
    title: 'The End of Oak Street',
    year: 2026,
    poster: endOfOakStreetPoster,
    rating: '6.3',
  },
]


// ========================================
// 5. DATA RILIS BARU
// Menyimpan informasi film dalam kategori Rilis Baru.
// ========================================

export const newReleaseMovies = [
  {
    id: 301,
    title: 'Sakamoto Days',
    year: 2026,
    poster: sakamotoPoster,
    rating: '7.7',
  },
  {
    id: 302,
    title: "Virginia Woolf's Night & Day",
    year: 2026,
    poster: nightAndDayPoster,
    rating: '6.3',
    badge: 'Must Watching',
    badgeType: 'blue',
  },
  {
    id: 303,
    title: 'Mononoke Paper Umbrella',
    year: 2026,
    poster: mononokePoster,
    rating: '10.0',
  },
  {
    id: 304,
    title: 'The Nice Ones',
    year: 2026,
    poster: niceOnesPoster,
    rating: '0.0',
  },
  {
    id: 305,
    title: '40 Dates and 40 Nights',
    year: 2026,
    poster: datesPoster,
    rating: '7.1',
  },
]