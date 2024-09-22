import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {tasks} = props
  
  return (
    <ul className="main">
        {tasks.map((task, index) => {
          return (
            <TodoCard key={index}>
              <p>{task}</p>
            </TodoCard>
          )
        })}
    </ul>
  )
}
