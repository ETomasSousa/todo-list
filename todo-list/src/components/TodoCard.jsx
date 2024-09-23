import React from 'react'

export default function TodoCard(props) {
  const { children, handleDeleteTask, handleEditTask, index } = props
  return (
    <li className="tasks">
      {children}
      <div className="tasksActions">
        <button onClick={() => {
          handleEditTask(index)
        }}>
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button onClick={() => {
          handleDeleteTask(index)
        }}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </li>
  )
}
