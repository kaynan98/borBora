import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 shadow-lg sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:bg-cyan-500/30 transition-all duration-300 neon-glow">
              <span className="text-xl">💊</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold gradient-text tracking-tight">Farmácia</h1>
              <span className="text-xs text-gray-400 -mt-1">Sistema de Gestão</span>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 bg-gray-800 rounded-full text-gray-300 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Online
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
