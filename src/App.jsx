import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

// pages
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Process from './pages/Process.jsx'
import Expertise from './pages/Expertise.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Success from './pages/Success.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-brand-dark text-brand-gray">
      <Header />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
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

      <footer className="py-10 border-t border-slate-800 bg-black/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-brand-gray/70">
          <div>© {new Date().getFullYear()} Deep Axis Engineering</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-brand-blue">Terms</a>
            <a href="#" className="hover:text-brand-blue">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
