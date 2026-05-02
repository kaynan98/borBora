import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Clientes from './pages/Clientes'
import Medicamentos from './pages/Medicamentos'
import Receitas from './pages/Receitas'
import HistoricoCliente from './pages/HistoricoCliente'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: '1rem', background: '#f0f0f0', marginBottom: '1rem' }}>
        <Link to="/clientes" style={{ marginRight: '1rem' }}>Clientes</Link>
        <Link to="/medicamentos" style={{ marginRight: '1rem' }}>Medicamentos</Link>
        <Link to="/receitas" style={{ marginRight: '1rem' }}>Receitas</Link>
        <Link to="/historico">Histórico do Cliente</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/historico" element={<HistoricoCliente />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App