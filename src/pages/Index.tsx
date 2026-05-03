import { Link } from 'react-router-dom'

const cards = [
  {
    to: '/receitas',
    title: 'Gerenciar Receitas',
    description: 'Cadastre e gerencie receitas médicas',
    bgColor: 'from-blue-500 to-blue-700',
    icon: '📋',
  },
  {
    to: '/clientes',
    title: 'Cadastro de Clientes',
    description: 'Mantenha os dados dos clientes atualizados',
    bgColor: 'from-green-500 to-green-700',
    icon: '👥',
  },
  {
    to: '/medicamentos',
    title: 'Cadastro de Medicamentos',
    description: 'Controle o estoque de medicamentos',
    bgColor: 'from-purple-500 to-purple-700',
    icon: '💊',
  },
  {
    to: '/historico',
    title: 'Histórico do Cliente',
    description: 'Consulte o histórico completo dos clientes',
    bgColor: 'from-orange-500 to-orange-700',
    icon: '📊',
  },
]

function Index() {
  return (
    <div className="py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Sistema de Gestão de Farmácia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Selecione uma das opções abaixo para gerenciar sua farmácia de forma
          eficiente e moderna.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className={`bg-gradient-to-br ${card.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
          >
            <div className="text-5xl mb-4">{card.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{card.title}</h2>
            <p className="text-white/80 text-sm">{card.description}</p>
            <div className="mt-4 flex items-center text-white/60 text-sm">
              <span>Acessar</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Index
