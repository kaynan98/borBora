import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import Receitas from './pages/Receitas'
import Clientes from './pages/Clientes'
import Medicamentos from './pages/Medicamentos'
import HistoricoCliente from './pages/HistoricoCliente'

const navItems = [
  { path: '/', label: 'Início' },
  { path: '/receitas', label: 'Receitas' },
  { path: '/clientes', label: 'Clientes' },
  { path: '/medicamentos', label: 'Medicamentos' },
  { path: '/historico', label: 'Histórico' },
]

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-white font-bold text-xl tracking-tight">
                🏥 Farmácia Gestão
              </span>
            </div>
            <div className="flex space-x-1 sm:space-x-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-white/20 text-white shadow-inner'
                        : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/medicamentos" element={<Medicamentos />} />
          <Route path="/historico" element={<HistoricoCliente />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
