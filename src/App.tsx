import { Routes, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import Receitas from './pages/Receitas'
import HistoricoCliente from './pages/HistoricoCliente'

function App() {
  return (
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/receitas" style={{ marginRight: '1rem' }}>Receitas</Link>
        <Link to="/historico">Histórico do Cliente</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/historico" element={<HistoricoCliente />} />
      </Routes>
  )
}

export default App
