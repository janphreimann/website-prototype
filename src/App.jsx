import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import LogoWall from './components/LogoWall.jsx'
import StatsTicker from './components/StatsTicker.jsx'
import FeatureGrid from './components/FeatureGrid.jsx'
import Enterprise from './components/Enterprise.jsx'
import ScaleStats from './components/ScaleStats.jsx'
import Startups from './components/Startups.jsx'
import Testimonials from './components/Testimonials.jsx'
import Blog from './components/Blog.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <LogoWall />
        <StatsTicker />
        <FeatureGrid />
        <Enterprise />
        <ScaleStats />
        <Startups />
        <Testimonials />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
