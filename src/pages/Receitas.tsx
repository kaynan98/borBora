import { useState } from 'react'

interface Receita {
  id: number
  cliente: string
  medicamento: string
  lote: string
  quantidade: number
  dataValidade: string
}

interface Cliente {
  id: number
  nome: string
}

interface Lote {
  id: number
  numero: string
  quantidade: number
  dataValidade: string
}

interface Medicamento {
  id: number
  nome: string
  laboratorio: string
  principioAtivo: string
  lote: Lote
}

function Receitas() {
  const [receitas, setReceitas] = useState<Receita[]>(() => {
    const stored = localStorage.getItem('receitas')
    return stored ? JSON.parse(stored) : []
  })

  const [cliente, setCliente] = useState('')
  const [medicamento, setMedicamento] = useState('')
  const [lote, setLote] = useState('')
  const [quantidade, setQuantidade] = useState(1)
  const [dataValidade, setDataValidade] = useState('')

  const clientes: Cliente[] = (() => {
    const stored = localStorage.getItem('clientes')
    return stored ? JSON.parse(stored) : []
  })()

  const medicamentos: Medicamento[] = (() => {
    const stored = localStorage.getItem('medicamentos')
    return stored ? JSON.parse(stored) : []
  })()

  const lotesDisponiveis = medicamento
    ? medicamentos.filter((m) => m.nome === medicamento)
    : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!cliente || !medicamento || !lote || !dataValidade) return

    const nova: Receita = {
      id: Date.now(),
      cliente,
      medicamento,
      lote,
      quantidade,
      dataValidade,
    }

    const atualizadas = [...receitas, nova]
    setReceitas(atualizadas)
    localStorage.setItem('receitas', JSON.stringify(atualizadas))

    setCliente('')
    setMedicamento('')
    setLote('')
    setQuantidade(1)
    setDataValidade('')
  }

  const handleDelete = (id: number) => {
    const atualizadas = receitas.filter((r) => r.id !== id)
    setReceitas(atualizadas)
    localStorage.setItem('receitas', JSON.stringify(atualizadas))
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Lançamento de Receitas</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <label>Cliente: </label>
          <select value={cliente} onChange={(e) => setCliente(e.target.value)} required>
            <option value="">Selecione um cliente</option>
            {clientes.map((c) => (
              <option key={c.id} value={c.nome}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label>Medicamento: </label>
          <select
            value={medicamento}
            onChange={(e) => {
              setMedicamento(e.target.value)
              setLote('')
            }}
            required
          >
            <option value="">Selecione um medicamento</option>
            {[...new Set(medicamentos.map((m) => m.nome))].map((nome) => (
              <option key={nome} value={nome}>
                {nome}
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label>Lote: </label>
          <select value={lote} onChange={(e) => setLote(e.target.value)} required disabled={!medicamento}>
            <option value="">Selecione um lote</option>
            {lotesDisponiveis.map((m) => (
              <option key={m.id} value={m.lote}>
                {m.lote} (validade: {m.validade})
              </option>
            ))}
          </select>
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label>Quantidade: </label>
          <input
            type="number"
            min={1}
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            required
          />
        </div>

        <div style={{ marginBottom: '0.5rem' }}>
          <label>Data de Validade: </label>
          <input
            type="date"
            value={dataValidade}
            onChange={(e) => setDataValidade(e.target.value)}
            required
          />
        </div>

        <button type="submit">Lançar Receita</button>
      </form>

      <h2>Receitas Lançadas</h2>
      {receitas.length === 0 ? (
        <p>Nenhuma receita lançada.</p>
      ) : (
        <table border={1} cellPadding={8} style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Medicamento</th>
              <th>Lote</th>
              <th>Quantidade</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {receitas.map((r) => (
              <tr key={r.id}>
                <td>{r.cliente}</td>
                <td>{r.medicamento}</td>
                <td>{r.lote}</td>
                <td>{r.quantidade}</td>
                <td>{r.dataValidade}</td>
                <td>
                  <button onClick={() => handleDelete(r.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Receitas