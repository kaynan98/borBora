import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface Cliente {
  id: number
  nome: string
  telefone: string
  documento: string
}

function Clientes() {
  const navigate = useNavigate()
  const [clientes, setClientes] = useState<Cliente[]>(() => {
    const stored = localStorage.getItem('clientes')
    return stored ? JSON.parse(stored) : []
  })
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [documento, setDocumento] = useState('')

  useEffect(() => {
    localStorage.setItem('clientes', JSON.stringify(clientes))
  }, [clientes])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !telefone.trim()) return
    const novo: Cliente = {
      id: Date.now(),
      nome: nome.trim(),
      telefone: telefone.trim(),
      documento: documento.trim(),
    }
    setClientes((prev) => [...prev, novo])
    setNome('')
    setTelefone('')
    setDocumento('')
  }

  const handleVerHistorico = (clienteId: number) => {
    navigate(`/historico?clienteId=${clienteId}`)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Clientes</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
            Nome completo
          </label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Nome do cliente"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefone">
            Telefone (WhatsApp)
          </label>
          <input
            id="telefone"
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="(11) 99999-9999"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documento">
            Documento (opcional)
          </label>
          <input
            id="documento"
            type="text"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="CPF ou RG"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Cadastrar Cliente
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">Clientes Cadastrados</h2>
      {clientes.length === 0 ? (
        <p className="text-gray-500">Nenhum cliente cadastrado ainda.</p>
      ) : (
        <ul className="space-y-3">
          {clientes.map((cliente) => (
            <li
              key={cliente.id}
              className="bg-white shadow rounded p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium">{cliente.nome}</p>
                <p className="text-sm text-gray-600">{cliente.telefone}</p>
                {cliente.documento && (
                  <p className="text-sm text-gray-500">Doc: {cliente.documento}</p>
                )}
              </div>
              <button
                onClick={() => handleVerHistorico(cliente.id)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-3 rounded text-sm"
              >
                Ver Histórico
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Clientes
