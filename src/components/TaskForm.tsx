import { useState } from 'react'

interface TaskFormProps {
  onAdd: (title: string, deadline: string) => void
}

function TaskForm({ onAdd }: TaskFormProps) {
  const [title, setTitle] = useState('')
  const [deadline, setDeadline] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) return
    onAdd(title, deadline)
    setTitle('')
    setDeadline('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        ➕ Nova Tarefa
      </h3>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Título
          </label>
          <input
            type="text"
            placeholder="Digite o título da tarefa"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
        <div className="sm:w-48">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Prazo
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-xl hover:from-blue-700 hover:to-blue-800 shadow-md hover:shadow-lg transition-all duration-200"
          >
            Adicionar
          </button>
        </div>
      </div>
    </form>
  )
}

export default TaskForm
