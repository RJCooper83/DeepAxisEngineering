import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const pill = 'px-3 py-2 rounded-xl text-sm'
const linkClass = ({ isActive }) =>
  isActive ? `bg-slate-900 text-white ${pill}` : `hover:bg-slate-100 ${pill}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <NavLink to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">Δ</div>
          <span className="font-semibold tracking-tight">Deep Axis Engineering</span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/process"  className={linkClass}>Process</NavLink>
          <NavLink to="/expertise" className={linkClass}>Expertise</NavLink>
          <NavLink to="/work"     className={linkClass}>Work</NavLink>
          <NavLink to="/about"    className={linkClass}>About</NavLink>
          <NavLink
            to="/contact"
            className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 text-sm"
          >
            Free Consult
          </NavLink>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-300 p-2 hover:bg-slate-100"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* simple hamburger */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2">
            <NavLink to="/services" className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
            <NavLink to="/process"  className={linkClass} onClick={() => setOpen(false)}>Process</NavLink>
            <NavLink to="/expertise"className={linkClass} onClick={() => setOpen(false)}>Expertise</NavLink>
            <NavLink to="/work"     className={linkClass} onClick={() => setOpen(false)}>Work</NavLink>
            <NavLink to="/about"    className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink
              to="/contact"
              className="rounded-xl bg-slate-900 text-white px-4 py-2 text-sm text-center"
              onClick={() => setOpen(false)}
            >
              Free Consult
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
