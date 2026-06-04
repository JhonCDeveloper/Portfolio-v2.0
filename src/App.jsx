import Header from './components/Header'
import Intro from "./components/Intro";
import GridBackground from "./components/GridBackground";
import { Analytics } from "@vercel/analytics/react"


function App() {

  return (
    <div className="min-h-screen bg-mainBlack text-white">
      <div
        className="fixed left-0 top-0 bottom-0 w-[2px] z-30 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #8B1A1A 30%, #8B1A1A 70%, transparent)'
        }}
      />
      <Analytics />
      <GridBackground />
      <Header />
      <Intro />



    </div>
  )

}

export default App;