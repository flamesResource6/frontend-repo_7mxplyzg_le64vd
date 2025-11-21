import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
    isActive ? 'bg-white/20 text-white' : 'text-white/80 hover:text-white hover:bg-white/10'
  }`

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-teal-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-400 via-emerald-400 to-lime-300 shadow-inner" />
          <span className="text-white font-semibold tracking-tight">BetterMann</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/how-it-works" className={navLinkClass}>How it works</NavLink>
          <NavLink to="/directory" className={navLinkClass}>Find a therapist</NavLink>
          <NavLink to="/pricing" className={navLinkClass}>Pricing</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Resources</NavLink>
          <NavLink to="/faqs" className={navLinkClass}>FAQs</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Support</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/login" className="text-white/80 hover:text-white text-sm px-3 py-2">Login</Link>
          <Link to="/signup" className="bg-saffron-500 hover:bg-saffron-600 text-teal-950 text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Get started</Link>
        </div>
      </div>
    </header>
  )
}
