import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [tasks, setTasks] = useState([])

  function handleAddTask(newTask) {
    const newTodoList = [...tasks, newTask]
    setTasks(newTodoList)
  }

  return (
    <>
      <TodoInput handleAddTask={handleAddTask}/>
      <TodoList tasks={tasks}/>
    </> 
  )
}

export default App
