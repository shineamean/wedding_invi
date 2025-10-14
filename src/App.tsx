import './App.css'
import MainSection from './components/MainSection'
import GreetingSection from './components/GreetingSection'
import DateSection from './components/DateSection'
import GallerySection from './components/GallerySection'
import LocationSection from './components/LocationSection'
import AccountSection from './components/AccountSection'
import ClosingSection from './components/ClosingSection'

function App() {
  return (
    <div className="app">
      <MainSection />
      <GreetingSection />
      <DateSection />
      <GallerySection />
      <LocationSection />
      <AccountSection />
      <ClosingSection />
    </div>
  )
}

export default App