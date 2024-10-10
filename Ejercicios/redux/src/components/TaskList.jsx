import React from 'react'
import { useSelector } from 'react-redux'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks)
    
  return (
    <ul>
    {tasks.map((task) => (
        <li key={task.id}>
            <p>{task.name}</p>
        </li>
    ))}
    </ul>
  )
}

export default TaskList
