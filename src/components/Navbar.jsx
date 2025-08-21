import { NavLink, Link } from 'react-router-dom'

const linkBase = 'px-3 py-2 rounded-xl text-sm'
const linkClass = ({ isActive }) =>
  (isActive ? 'bg-slate-900 text-white ' : 'hover:bg-slate-100 ') + linkBase

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-slate-900 text-white grid place-items-center font-bold">Δ</div>
          <span className="font-semibold tracking-tight">Deep Axis Engineering</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/services" className={linkClass}>Services</NavLink>
          <NavLink to="/process" className={linkClass}>Process</NavLink>
          <NavLink to="/expertise" className={linkClass}>Expertise</NavLink>
          <NavLink to="/work" className={linkClass}>Work</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/contact" className="rounded-xl bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 text-sm">Free Consult</NavLink>
        </nav>
      </div>
    </header>
  )
}
