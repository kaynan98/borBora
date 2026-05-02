import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

interface Task {
  id: number
  title: string
  deadline: string
  completed: boolean
}

function Index() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (title: string, deadline: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      deadline,
      completed: false,
    }
    setTasks((prev) => [...prev, newTask])
  }

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  )
}

export default Index
