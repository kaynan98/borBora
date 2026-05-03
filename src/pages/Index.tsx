import { Link } from 'react-router-dom'

const quickActions = [
  {
    to: '/receitas',
    title: 'Gerenciar Receitas',
    description: 'Cadastre e gerencie receitas médicas com facilidade',
    icon: '📋',
    color: 'from-indigo-500 to-purple-500',
    shadow: 'shadow-indigo-200'
  },
  {
    to: '/clientes',
    title: 'Clientes',
    description: 'Acesse o cadastro completo de clientes',
    icon: '👥',
    color: 'from-emerald-500 to-teal-500',
    shadow: 'shadow-emerald-200'
  },
  {
    to: '/medicamentos',
    title: 'Medicamentos',
    description: 'Controle o estoque de medicamentos',
    icon: '💊',
    color: 'from-amber-500 to-orange-500',
    shadow: 'shadow-amber-200'
  },
  {
    to: '/historico',
    title: 'Histórico',
    description: 'Consulte o histórico de atendimentos',
    icon: '📊',
    color: 'from-rose-500 to-pink-500',
    shadow: 'shadow-rose-200'
  },
]

function Index() {
  return (
    <div className="space-y-8">
      <div className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          🏥 Bem-vindo ao Sistema Farmácia
        </h1>
        <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">
          Gerencie receitas, clientes, medicamentos e histórico de forma eficiente.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickActions.map((action) => (
          <Link
            key={action.to}
            to={action.to}
            className={`group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
            <div className="p-6">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${action.color} ${action.shadow} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {action.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-sm text-gray-500">{action.description}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">📈 Resumo Rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6">
            <p className="text-sm text-indigo-600 font-medium">Receitas Hoje</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
            <p className="text-sm text-emerald-600 font-medium">Clientes Ativos</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">48</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
            <p className="text-sm text-amber-600 font-medium">Medicamentos em Estoque</p>
            <p className="text-3xl font-bold text-gray-900 mt-2">156</p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link
        to="/receitas"
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center text-2xl z-50 animate-bounce"
        title="Nova Receita"
      >
        ➕
      </Link>
    </div>
  )
}

export default Index
