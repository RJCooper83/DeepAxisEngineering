import { NavLink, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Process from './pages/Process.jsx'
import Expertise from './pages/Expertise.jsx'
import Work from './pages/Work.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Success from './pages/Success.jsx'

const pillBase = 'px-3 py-2 rounded-xl text-sm'
const navClass = ({ isActive }) => (isActive ? `bg-slate-900 text-white ${pillBase}` : `hover:bg-slate-100 ${pillBase}`)

function MobileMenuButton() {
  const [open, setOpen] = useMobileMenu()
  return (
    <button
      className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 hover:bg-slate-100"
      aria-label="Open menu"
      aria-expanded={open}
      onClick={() => setOpen(v => !v)}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </button>
  )
}

function MobilePanel() {
  const [open, setOpen] = useMobileMenu()
  if (!open) return null
  const pill = 'px-3 py-2 rounded-xl text-sm'
  const linkClass = ({ isActive }) =>
    isActive ? `bg-slate-900 text-white ${pill}` : `hover:bg-slate-100 ${pill}`

  return (
    <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
        <NavLink to="/services"  className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/process"   className={linkClass} onClick={() => setOpen(false)}>Process</NavLink>
        <NavLink to="/expertise" className={linkClass} onClick={() => setOpen(false)}>Expertise</NavLink>
        <NavLink to="/work"      className={linkClass} onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about"     className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
        <NavLink
          to="/contact"
          className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm text-center"
          onClick={() => setOpen(false)}
        >
          Free Consult
        </NavLink>
      </div>
    </div>
  )
}

/** simple shared state hook so button & panel stay in sync */
function useMobileMenu() {
  // hoist one shared state on window so both components read/write it
  const key = '__dae_mobile_open__'
  if (window[key] === undefined) window[key] = { open: false, subs: [] }
  const [, force] = useState(0)
  const setOpen = (v) => {
    window[key].open = typeof v === 'function' ? v(window[key].open) : v
    window[key].subs.forEach(fn => fn(x => x + 1))
  }
  // subscribe this component to updates
  if (!window[key].subs.includes(force)) window[key].subs.push(force)
  return [window[key].open, setOpen]
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
    <NavLink to="/" className="flex items-center gap-2">
      <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">Δ</div>
      <span className="font-semibold tracking-tight">Deep Axis Engineering</span>
    </NavLink>

    {/* Desktop nav */}
    <nav className="hidden md:flex items-center gap-2">
      <NavLink to="/services"  className={navClass}>Services</NavLink>
      <NavLink to="/process"   className={navClass}>Process</NavLink>
      <NavLink to="/expertise" className={navClass}>Expertise</NavLink>
      <NavLink to="/work"      className={navClass}>Work</NavLink>
      <NavLink to="/about"     className={navClass}>About</NavLink>
      <NavLink
        to="/contact"
        className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 text-sm"
      >
        Free Consult
      </NavLink>
    </nav>

    {/* Mobile menu button */}
    <MobileMenuButton />
  </div>

  {/* Mobile panel */}
  <MobilePanel />
</header>

      {/* ROUTES */}
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

      {/* FOOTER */}
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <div>© {new Date().getFullYear()} Deep Axis Engineering</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Terms</a>
            <a href="#" className="hover:text-slate-700">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
