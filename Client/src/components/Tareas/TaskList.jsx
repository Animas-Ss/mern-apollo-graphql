import React from 'react'
import { TaskCard } from './TaskCard'

export const TaskList = ({Tasks}) => {
  return (
    <div>
        {
            Tasks.map((task)=>(
                <TaskCard task={task} key={task._id}/>
            ))
        }
    </div>
  )
}
