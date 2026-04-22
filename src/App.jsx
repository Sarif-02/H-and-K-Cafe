import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import PopularItems from './components/PopularItems'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <PopularItems />
        <Gallery />
        <Reviews />
        <Location />
      </main>
      <Footer />
    </div>
  )
}
