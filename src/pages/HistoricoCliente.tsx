import { useState, useEffect } from 'react'

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
  telefone: string
  documento: string
}

function HistoricoCliente() {
  const [receitas, setReceitas] = useState<Receita[]>(() => {
    const stored = localStorage.getItem('receitas')
    return stored ? JSON.parse(stored) : []
  })

  const [clientes, setClientes] = useState<Cliente[]>(() => {
    const stored = localStorage.getItem('clientes')
    return stored ? JSON.parse(stored) : []
  })

  const [busca, setBusca] = useState('')
  const [clienteSelecionado, setClienteSelecionado] = useState<string>('')

  // Verificar se veio parâmetro da URL (clienteId)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const clienteId = params.get('clienteId')
    if (clienteId) {
      const cliente = clientes.find((c) => c.id === Number(clienteId))
      if (cliente) {
        setClienteSelecionado(cliente.nome)
        setBusca(cliente.nome)
      }
    }
  }, [clientes])

  const receitasFiltradas = receitas.filter((r) => {
    const nomeCliente = r.cliente.toLowerCase()
    const termo = busca.toLowerCase()
    return nomeCliente.includes(termo)
  })

  const receitasDoCliente = clienteSelecionado
    ? receitasFiltradas.filter((r) => r.cliente === clienteSelecionado)
    : receitasFiltradas

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Histórico do Cliente</h1>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="busca">
          Buscar por nome do cliente
        </label>
        <input
          id="busca"
          type="text"
          value={busca}
          onChange={(e) => {
            setBusca(e.target.value)
            setClienteSelecionado('')
          }}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Digite o nome do cliente..."
        />
      </div>

      {busca && !clienteSelecionado && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Clientes encontrados</h2>
          <div className="space-y-2">
            {clientes
              .filter((c) => c.nome.toLowerCase().includes(busca.toLowerCase()))
              .map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setClienteSelecionado(c.nome)
                    setBusca(c.nome)
                  }}
                  className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium py-2 px-4 rounded w-full text-left"
                >
                  {c.nome} - {c.telefone}
                </button>
              ))}
            {clientes.filter((c) =>
              c.nome.toLowerCase().includes(busca.toLowerCase())
            ).length === 0 && (
              <p className="text-gray-500">Nenhum cliente encontrado com esse nome.</p>
            )}
          </div>
        </div>
      )}

      {clienteSelecionado && (
        <>
          <h2 className="text-xl font-semibold mb-3">
            Receitas de {clienteSelecionado}
          </h2>

          {receitasDoCliente.length === 0 ? (
            <p className="text-gray-500">
              Nenhuma receita encontrada para este cliente.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white shadow-md rounded">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Medicamento</th>
                    <th className="py-3 px-6 text-left">Lote</th>
                    <th className="py-3 px-6 text-center">Quantidade</th>
                    <th className="py-3 px-6 text-center">Data de Validade</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm">
                  {receitasDoCliente.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <span className="font-medium">{r.medicamento}</span>
                      </td>
                      <td className="py-3 px-6 text-left">{r.lote}</td>
                      <td className="py-3 px-6 text-center">{r.quantidade}</td>
                      <td className="py-3 px-6 text-center">
                        {new Date(r.dataValidade).toLocaleDateString('pt-BR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Total de receitas: {receitasDoCliente.length}
            </p>
            <p className="text-sm text-gray-600">
              Total de unidades: {receitasDoCliente.reduce((acc, r) => acc + r.quantidade, 0)}
            </p>
          </div>
        </>
      )}

      {!busca && !clienteSelecionado && (
        <div className="bg-blue-50 border border-blue-200 rounded p-4 text-blue-700">
          Digite o nome de um cliente acima para visualizar o histórico de receitas.
        </div>
      )}
    </div>
  )
}

export default HistoricoCliente
