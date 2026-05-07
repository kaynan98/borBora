function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white text-lg">💊</span>
            <span className="text-white font-semibold">Farmácia - Sistema de Gestão</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Termos</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Privacidade</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors text-sm">Suporte</a>
          </div>
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
