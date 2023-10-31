
import './App.css'
import { Counter } from './components/shared/Counter'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Homepage from './pages/Homepage'

function App() {

  return (
    <>
      <Counter>
        <Navbar />
        <Homepage />
        <Footer />
      </Counter>
    </>
  )
}

export default App
