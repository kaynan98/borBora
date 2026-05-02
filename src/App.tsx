import { Routes, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import Receitas from './pages/Receitas'
import Clientes from './pages/Clientes'
import Medicamentos from './pages/Medicamentos'
import HistoricoCliente from './pages/HistoricoCliente'

function App() {
  return (
    <>
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Início</Link>
        <Link to="/receitas" style={{ marginRight: '1rem' }}>Receitas</Link>
        <Link to="/clientes" style={{ marginRight: '1rem' }}>Clientes</Link>
        <Link to="/medicamentos" style={{ marginRight: '1rem' }}>Medicamentos</Link>
        <Link to="/historico">Histórico do Cliente</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/historico" element={<HistoricoCliente />} />
      </Routes>
    </>
  )
}

export default App
