import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Area from './pages/Area/Area'
import Home from './pages/Home/Home'
import { Route,Routes} from 'react-router-dom'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import AdminHome from './pages/AdminHome/AdminHome'
import Installation from './pages/Installation/Installation'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Adminsite from './pages/Adminsite/Adminsite'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
    <div className='app'>

    <Navbar />
    
    <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/area' element={<Area />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<AdminHome />} />
          <Route path='/installations' element={<Installation />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/adminsite' element={<Adminsite />} />
        </Routes>
      </div>
     
    </div>
    <Footer />
    </div>

  )
}

export default App
