import { Link } from 'react-router-dom'

const quickActions = [
  {
    to: '/receitas',
    title: 'Gerenciar Receitas',
    description: 'Cadastre e gerencie receitas médicas com facilidade',
    icon: '📋',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    to: '/clientes',
    title: 'Cadastro de Clientes',
    description: 'Mantenha os dados dos clientes sempre atualizados',
    icon: '👥',
    gradient: 'from-emerald-500 to-emerald-700',
  },
  {
    to: '/medicamentos',
    title: 'Cadastro de Medicamentos',
    description: 'Controle o estoque de medicamentos de forma eficiente',
    icon: '💊',
    gradient: 'from-purple-500 to-purple-700',
  },
  {
    to: '/historico',
    title: 'Histórico do Cliente',
    description: 'Consulte o histórico completo de cada cliente',
    icon: '📊',
    gradient: 'from-orange-500 to-orange-700',
  },
]

const stats = [
  { label: 'Receitas Ativas', value: '128', icon: '📋', color: 'text-blue-600' },
  { label: 'Clientes Cadastrados', value: '342', icon: '👥', color: 'text-emerald-600' },
  { label: 'Medicamentos em Estoque', value: '89', icon: '💊', color: 'text-purple-600' },
  { label: 'Atendimentos Hoje', value: '15', icon: '📊', color: 'text-orange-600' },
]

function Index() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            🏥 Sistema de Gestão de Farmácia
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl">
            Gerencie sua farmácia de forma inteligente e moderna. Acesse receitas, clientes, medicamentos e histórico em um só lugar.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/receitas"
              className="inline-flex items-center px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Começar Agora 🚀
            </Link>
            <Link
              to="/clientes"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-200"
            >
              Ver Clientes 👥
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">📈 Resumo Rápido</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <span className={`text-4xl ${stat.color}`}>{stat.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">⚡ Ações Rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action) => (
            <Link
              key={action.to}
              to={action.to}
              className={`group relative bg-gradient-to-br ${action.gradient} rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="text-5xl mb-4">{action.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
              <p className="text-white/80 text-sm">{action.description}</p>
              <div className="mt-4 flex items-center text-white/60 text-sm group-hover:text-white transition-colors duration-200">
                <span>Acessar</span>
                <svg
                  className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
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
      </section>

      {/* Welcome Section */}
      <section className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              🌟 Bem-vindo ao Sistema
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Este sistema foi desenvolvido para facilitar o dia a dia da sua farmácia. 
              Com ele, você pode cadastrar clientes, gerenciar receitas médicas, 
              controlar o estoque de medicamentos e consultar o histórico completo 
              de cada cliente de forma rápida e intuitiva.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-emerald-500">✅</span> Interface moderna
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-emerald-500">✅</span> Dados seguros
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="text-emerald-500">✅</span> Suporte 24h
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="w-48 h-48 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center">
              <span className="text-7xl">🏪</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Index
