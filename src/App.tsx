import './App.css'
import MainSection from './components/MainSection'
import GreetingSection from './components/GreetingSection'
import DateSection from './components/DateSection'
import LocationSection from './components/LocationSection'
import AccountSection from './components/AccountSection'
import ShareSection from './components/ShareSection'

function App() {
  return (
    <div className="app">
      <MainSection />
      <GreetingSection />
      <DateSection />
      <LocationSection />
      <AccountSection />
      <ShareSection />
    </div>
  )
}

export default App