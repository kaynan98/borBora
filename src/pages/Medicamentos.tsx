import { useState, useEffect } from 'react'

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

function Medicamentos() {
  const [medicamentos, setMedicamentos] = useState<Medicamento[]>(() => {
    const stored = localStorage.getItem('medicamentos')
    return stored ? JSON.parse(stored) : []
  })

  const [nome, setNome] = useState('')
  const [laboratorio, setLaboratorio] = useState('')
  const [principioAtivo, setPrincipioAtivo] = useState('')
  const [numeroLote, setNumeroLote] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [dataValidade, setDataValidade] = useState('')

  useEffect(() => {
    localStorage.setItem('medicamentos', JSON.stringify(medicamentos))
  }, [medicamentos])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!nome.trim() || !numeroLote.trim() || !quantidade.trim() || !dataValidade.trim()) return

    const novoMedicamento: Medicamento = {
      id: Date.now(),
      nome: nome.trim(),
      laboratorio: laboratorio.trim(),
      principioAtivo: principioAtivo.trim(),
      lote: {
        id: Date.now() + 1,
        numero: numeroLote.trim(),
        quantidade: parseInt(quantidade, 10),
        dataValidade: dataValidade.trim(),
      },
    }

    setMedicamentos((prev) => [...prev, novoMedicamento])
    setNome('')
    setLaboratorio('')
    setPrincipioAtivo('')
    setNumeroLote('')
    setQuantidade('')
    setDataValidade('')
  }

  const handleExcluir = (id: number) => {
    setMedicamentos((prev) => prev.filter((m) => m.id !== id))
  }

  const totalEstoque = medicamentos.reduce((acc, m) => acc + m.lote.quantidade, 0)

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cadastro de Medicamentos</h1>

      <div className="bg-blue-50 border border-blue-200 rounded p-3 mb-6 text-sm">
        <strong>Total em estoque:</strong> {totalEstoque} unidades
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nome">
              Nome do medicamento
            </label>
            <input
              id="nome"
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: Amoxicilina"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="laboratorio">
              Laboratório
            </label>
            <input
              id="laboratorio"
              type="text"
              value={laboratorio}
              onChange={(e) => setLaboratorio(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: EMS"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="principioAtivo">
              Princípio ativo
            </label>
            <input
              id="principioAtivo"
              type="text"
              value={principioAtivo}
              onChange={(e) => setPrincipioAtivo(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: Amoxicilina 500mg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numeroLote">
              Número do lote
            </label>
            <input
              id="numeroLote"
              type="text"
              value={numeroLote}
              onChange={(e) => setNumeroLote(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: LOTE123"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="quantidade">
              Quantidade
            </label>
            <input
              id="quantidade"
              type="number"
              min="1"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Ex: 100"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataValidade">
              Data de validade
            </label>
            <input
              id="dataValidade"
              type="date"
              value={dataValidade}
              onChange={(e) => setDataValidade(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
        >
          Cadastrar Medicamento
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-3">Medicamentos Cadastrados</h2>
      {medicamentos.length === 0 ? (
        <p className="text-gray-500">Nenhum medicamento cadastrado ainda.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Nome</th>
                <th className="py-3 px-6 text-left">Laboratório</th>
                <th className="py-3 px-6 text-left">Lote</th>
                <th className="py-3 px-6 text-center">Qtd</th>
                <th className="py-3 px-6 text-center">Validade</th>
                <th className="py-3 px-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {medicamentos.map((med) => (
                <tr key={med.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <span className="font-medium">{med.nome}</span>
                    {med.principioAtivo && (
                      <span className="text-gray-400 ml-1">({med.principioAtivo})</span>
                    )}
                  </td>
                  <td className="py-3 px-6 text-left">{med.laboratorio || '-'}</td>
                  <td className="py-3 px-6 text-left">{med.lote.numero}</td>
                  <td className="py-3 px-6 text-center">{med.lote.quantidade}</td>
                  <td className="py-3 px-6 text-center">
                    {new Date(med.lote.dataValidade).toLocaleDateString('pt-BR')}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => handleExcluir(med.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-xs"
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Medicamentos