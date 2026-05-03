  const [receitas] = useState<Receita[]>(() => {
    const stored = localStorage.getItem('receitas')
    return stored ? JSON.parse(stored) : []
  })

  const [clientes] = useState<Cliente[]>(() => {
    const stored = localStorage.getItem('clientes')
    return stored ? JSON.parse(stored) : []
  })