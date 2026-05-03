import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Index from './pages/Index'
import Receitas from './pages/Receitas'
import Clientes from './pages/Clientes'
import Medicamentos from './pages/Medicamentos'
import HistoricoCliente from './pages/HistoricoCliente'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/medicamentos" element={<Medicamentos />} />
        <Route path="/historico" element={<HistoricoCliente />} />
      </Routes>
    </Layout>
  )
}

export default App
