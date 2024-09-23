import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [tasks, setTasks] = useState([])
  const [taskValue, setTaskValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('tasks', JSON.stringify({tasks: newList}))
  }

  function handleAddTask(newTask) {
    const newTodoList = [...tasks, newTask]
    persistData(newTodoList)
    setTasks(newTodoList)
  }

  function handleDeleteTask(index) {
    const newTodoList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newTodoList)
    setTasks(newTodoList)
  }

  function handleEditTask(index) {
    const editValue = tasks[index]
    if (taskValue === '') {
      setTaskValue(editValue)
      handleDeleteTask(index)
    }
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localTasks = localStorage.getItem('tasks')
    if (!localTasks) {
      return
    }

    localTasks = JSON.parse(localTasks).tasks
    setTasks(localTasks)
  }, [])

  return (
    <>
      <TodoInput taskValue={taskValue} setTaskValue={setTaskValue} handleAddTask={handleAddTask}/>
      <TodoList handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} tasks={tasks}/>
    </> 
  )
}

export default App
