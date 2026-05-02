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
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.title} - {task.deadline}
          </span>
          <button onClick={() => onDelete(task.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  )
}

export default TaskList
