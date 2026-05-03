import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/clientes', label: 'Clientes', icon: '👥' },
  { to: '/medicamentos', label: 'Medicamentos', icon: '💊' },
  { to: '/receitas', label: 'Receitas', icon: '📋' },
  { to: '/historico', label: 'Histórico', icon: '📊' },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 bg-gray-900 min-h-screen p-4 hidden md:block">
      <nav className="space-y-2">
        {navItems.map((item) => {
          const active = location.pathname === item.to
          return (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                active
                  ? 'bg-indigo-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar
