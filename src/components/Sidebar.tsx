import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Início', icon: '🏠', desc: 'Dashboard' },
  { to: '/clientes', label: 'Clientes', icon: '👥', desc: 'Gerenciar clientes' },
  { to: '/medicamentos', label: 'Medicamentos', icon: '💊', desc: 'Estoque e remédios' },
  { to: '/receitas', label: 'Receitas', icon: '📋', desc: 'Prescrições' },
  { to: '/historico', label: 'Histórico', icon: '📊', desc: 'Registros' },
]

function Sidebar() {
  const location = useLocation()

  return (
    <aside className="w-64 min-h-screen p-4 hidden md:block">
      <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-800 p-4 h-full">
        <nav className="space-y-2">
          {navItems.map((item) => {
            const active = location.pathname === item.to
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  active
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-[1.02]'
                    : 'text-gray-400 hover:bg-gray-800 hover:text-cyan-400 hover:shadow-sm'
                }`}
              >
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-lg ${
                  active ? 'bg-white/20' : 'bg-gray-800'
                }`}>
                  {item.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold">{item.label}</span>
                  <span className={`text-xs ${active ? 'text-white/70' : 'text-gray-500'}`}>{item.desc}</span>
                </div>
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar
