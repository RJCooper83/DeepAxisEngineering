import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Process from './pages/Process.jsx'
import Expertise from './pages/Expertise.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/process" element={<Process />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
