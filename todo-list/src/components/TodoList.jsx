import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {
  let tasks = [
    'Deitar o lixo fora',
    'Lavar o chão',
    'Arranjar o carro'
  ]
  
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
