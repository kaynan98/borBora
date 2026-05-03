import { Link } from 'react-router-dom'

function Index() {
  return (
    <div className="max-w-4xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Sistema de Gestão de Farmácia</h1>
      <p className="text-lg text-gray-600 mb-8">
        Selecione uma das opções abaixo para começar:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <Link
          to="/receitas"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-4 rounded-lg shadow-lg transition duration-200"
        >
          Gerenciar Receitas
        </Link>
        <Link
          to="/clientes"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-6 px-4 rounded-lg shadow-lg transition duration-200"
        >
          Cadastro de Clientes
        </Link>
        <Link
          to="/medicamentos"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-6 px-4 rounded-lg shadow-lg transition duration-200"
        >
          Cadastro de Medicamentos
        </Link>
        <Link
          to="/historico"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-6 px-4 rounded-lg shadow-lg transition duration-200"
        >
          Histórico do Cliente
        </Link>
      </div>
    </div>
  )
}

export default Index
