import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Index from './pages/Index'
import Receitas from './pages/Receitas'
import Clientes from './pages/Clientes'
import Medicamentos from './pages/Medicamentos'
import HistoricoCliente from './pages/HistoricoCliente'

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <Link
      to={to}
      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
        active
          ? 'bg-indigo-600 text-white shadow-md'
          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
      }`}
    >
      {children}
    </Link>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-xl">💊</span>
              <h1 className="text-xl font-bold text-white">Controle de Receitas</h1>
            </div>
            <div className="flex gap-2">
              <NavLink to="/">🏠 Início</NavLink>
              <NavLink to="/clientes">👥 Clientes</NavLink>
              <NavLink to="/medicamentos">💊 Medicamentos</NavLink>
              <NavLink to="/receitas">📋 Receitas</NavLink>
              <NavLink to="/historico">📊 Histórico</NavLink>
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
