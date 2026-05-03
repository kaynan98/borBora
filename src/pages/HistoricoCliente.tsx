import React, { useState } from 'react'

interface Receita {
  id: string
  cliente: string
  medicamento: string
  data: string
  observacao: string
}

interface Cliente {
  id: string
  nome: string
  telefone: string
  email: string
}

function HistoricoCliente() {
  const [receitas] = useState<Receita[]>(() => {
    const stored = localStorage.getItem('receitas')
    return stored ? JSON.parse(stored) : []
  })

  const [clientes] = useState<Cliente[]>(() => {
    const stored = localStorage.getItem('clientes')
    return stored ? JSON.parse(stored) : []
  })

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Histórico do Cliente</h1>
      <p className="text-gray-600">Selecione um cliente para visualizar o histórico de receitas.</p>
    </div>
  )
}

export default HistoricoCliente
