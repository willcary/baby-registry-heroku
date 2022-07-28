import { Routes, Route } from 'react-router-dom'
import './App.min.css'
// import Home from './components/Home'
// import BabyShower from './components/BabyShower'
import Registry from './components/Registry'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className='App text-center'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Registry />} />
        {/* <Route path='/babyshower' element={<BabyShower />} />
        <Route path='home' element={<Home />} /> */}
      </Routes>
    </div>
  )
}

export default App
