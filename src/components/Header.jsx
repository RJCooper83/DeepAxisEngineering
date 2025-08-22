import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const pillBase = 'px-3 py-2 rounded-xl text-sm transition'
const navClass = ({ isActive }) =>
  isActive
    ? `bg-black/30 text-white ${pillBase}`
    : `text-brand-gray hover:text-brand-blue hover:bg-black/20 ${pillBase}`

/** shared state so button & panel stay in sync */
function useMobileMenu() {
  const key = '__dae_mobile_open__'
  if (window[key] === undefined) window[key] = { open: false, subs: [] }
  const [, force] = useState(0)
  const setOpen = (v) => {
    window[key].open = typeof v === 'function' ? v(window[key].open) : v
    window[key].subs.forEach(fn => fn(x => x + 1))
  }
  if (!window[key].subs.includes(force)) window[key].subs.push(force)
  return [window[key].open, setOpen]
}

function MobileMenuButton() {
  const [open, setOpen] = useMobileMenu()
  return (
    <button
      className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-600 p-2 hover:bg-black/30 text-brand-gray"
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
  const linkClass = ({ isActive }) =>
    isActive ? `bg-black/30 text-white ${pillBase}` : `hover:bg-black/30 ${pillBase}`

  return (
    <div className="md:hidden border-t border-slate-800 bg-brand-dark/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-brand-gray">
        <NavLink to="/services"  className={linkClass} onClick={() => setOpen(false)}>Services</NavLink>
        <NavLink to="/process"   className={linkClass} onClick={() => setOpen(false)}>Process</NavLink>
        <NavLink to="/expertise" className={linkClass} onClick={() => setOpen(false)}>Expertise</NavLink>
        <NavLink to="/work"      className={linkClass} onClick={() => setOpen(false)}>Work</NavLink>
        <NavLink to="/about"     className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
        <NavLink
          to="/contact"
          className="rounded-xl bg-brand-blue text-white px-4 py-2 text-sm transition hover:bg-brand-red"
          onClick={() => setOpen(false)}
        >
          Free Consult
        </NavLink>
      </div>
    </div>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-brand-dark/80 border-b border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src="/img/mini-logo.png" alt="Deep Axis" className="h-8 w-auto" />
          <span className="font-semibold tracking-tight text-brand-gray">Deep Axis Engineering</span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-2 text-brand-gray">
          <NavLink to="/services"  className={navClass}>Services</NavLink>
          <NavLink to="/process"   className={navClass}>Process</NavLink>
          <NavLink to="/expertise" className={navClass}>Expertise</NavLink>
          <NavLink to="/work"      className={navClass}>Work</NavLink>
          <NavLink to="/about"     className={navClass}>About</NavLink>
          <NavLink
            to="/contact"
            className="rounded-xl bg-brand-blue text-white px-4 py-2 hover:bg-brand-red text-sm transition"
          >
            Free Consult
          </NavLink>
        </nav>

        <MobileMenuButton />
      </div>
      <MobilePanel />
    </header>
  )
}
