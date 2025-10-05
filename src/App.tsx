import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Invitation from './components/Invitation'
import Gallery from './components/Gallery'
import Location from './components/Location'
import ShareButtons from './components/ShareButtons'
import Footer from './components/Footer'

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app">
      <Hero />
      <Invitation />
      <Gallery />
      <Location />
      <ShareButtons />
      <Footer />
      
      {showScrollTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  )
}

export default App