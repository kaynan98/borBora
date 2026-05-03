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

  const handleMedicamentoChange = (nome: string) => {
    setMedicamento(nome)
    setLote('')
  }

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
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <span className="text-2xl">📋</span>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Lançamento de Receitas</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 border border-gray-200 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cliente</label>
          <select
            value={cliente}
            onChange={(e) => setCliente(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((c) => (
              <option key={c.id} value={c.nome}>
                {c.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Medicamento</label>
          <select
            value={medicamento}
            onChange={(e) => handleMedicamentoChange(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          >
            <option value="">Selecione um medicamento</option>
            {[...new Set(medicamentos.map((m) => m.nome))].map((nome) => (
              <option key={nome} value={nome}>
                {nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lote</label>
          <select
            value={lote}
            onChange={(e) => setLote(e.target.value)}
            required
            disabled={!medicamento}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Selecione um lote</option>
            {lotesDisponiveis.map((m) => (
              <option key={m.id} value={m.lote.numero}>
                {m.lote.numero} (validade: {new Date(m.lote.dataValidade).toLocaleDateString('pt-BR')})
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Quantidade</label>
            <input
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(Number(e.target.value))}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Data de Validade</label>
            <input
              type="date"
              value={dataValidade}
              onChange={(e) => setDataValidade(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          ➕ Lançar Receita
        </button>
      </form>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cliente</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Medicamento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lote</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantidade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Validade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {receitas.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                  <span className="text-4xl block mb-2">📭</span>
                  Nenhuma receita cadastrada ainda.
                </td>
              </tr>
            ) : (
              receitas.map((receita) => (
                <tr key={receita.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{receita.cliente}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{receita.medicamento}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{receita.lote}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{receita.quantidade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(receita.dataValidade).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button
                      onClick={() => handleDelete(receita.id)}
                      className="inline-flex items-center px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                    >
                      ❌ Excluir
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Receitas
