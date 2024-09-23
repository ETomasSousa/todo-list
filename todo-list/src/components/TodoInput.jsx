import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTask, taskValue, setTaskValue} = props

    return (
        <div className="inputTask">
            <input value={taskValue} onChange={(e) => {
                setTaskValue(e.target.value)
            }} placeholder="O que vamos fazer?" />
            <button onClick={ () => {
                handleAddTask(taskValue)
                setTaskValue('')
            }}>+</button>
        </div>
    )
}