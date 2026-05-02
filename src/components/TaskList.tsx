import React from 'react'

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
    return <p>Nenhuma tarefa cadastrada.</p>
  }

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task) => (
        <li key={task.id} style={{ marginBottom: '0.5rem' }}>
          <label style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggle(task.id)}
            />
            {task.title} - Prazo: {task.deadline}
          </label>
          <button onClick={() => onDelete(task.id)} style={{ marginLeft: '0.5rem' }}>Excluir</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
