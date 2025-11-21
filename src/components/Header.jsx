import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-bold text-slate-900 text-lg tracking-tight">
          Mis Recomendados
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <NavLink to="/usa" className={({isActive}) => `px-3 py-1.5 rounded-md transition-colors ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
            🇺🇸 USA
          </NavLink>
          <NavLink to="/ar" className={({isActive}) => `px-3 py-1.5 rounded-md transition-colors ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
            🇦🇷 Argentina
          </NavLink>
          <NavLink to="/blog" className={({isActive}) => `px-3 py-1.5 rounded-md transition-colors ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
            📝 Blog
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
