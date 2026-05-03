interface Task {
  id: number
  title: string
  deadline: string
  completed: boolean
}

interface TaskListProps {
  tasks: Task[]
  onToggle: (id: number) => void
  onDelete: (id: number) => void
}

function TaskList({ tasks, onToggle, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="text-5xl mb-4">📭</div>
        <p className="text-gray-500 text-lg">Nenhuma tarefa cadastrada.</p>
        <p className="text-gray-400 text-sm mt-1">
          Crie uma nova tarefa usando o formulário acima.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between hover:shadow-md transition-all ${
            task.completed ? 'opacity-75' : ''
          }`}
        >
          <div className="flex items-center gap-4 flex-1">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
            />
            <div className="flex-1">
              <span
                className={`text-gray-800 font-medium ${
                  task.completed ? 'line-through text-gray-400' : ''
                }`}
              >
                {task.title}
              </span>
              {task.deadline && (
                <span className="ml-3 text-sm text-gray-400">
                  📅 {new Date(task.deadline).toLocaleDateString('pt-BR')}
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => onDelete(task.id)}
            className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
            title="Excluir tarefa"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}

export default TaskList
