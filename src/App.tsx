
import Navbar from './components/Navbar.tsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Profile from './pages/Profile.tsx'
import Services from './pages/Services.tsx'
import Footer from './components/Footer.tsx'




function App() {
  return (
    <main>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer/>
    </main>
  )
}

export default App
