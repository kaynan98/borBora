function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-xl">💊</span>
            <h1 className="text-xl font-bold text-white">Controle de Receitas</h1>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
