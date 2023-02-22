import React from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_TASK } from '../../graphql/consultaTareas';

export const TaskCard = ({task}) => {

  const [ deleteTask ]= useMutation(DELETE_TASK, {
    refetchQueries: ['getProject']
  });

  const handleDeleteTask = () => {
    deleteTask({
      variables: {
        id: task._id,
      },
    });
  };

  return (
    <div className=' bg-slate-600 w-96 h-14 px-2 py-3 rounded-md flex justify-between m-2'>
        <h1>{task.title}</h1>
        <button onClick={() => handleDeleteTask()}>Eliminar</button>
    </div>
  )
}
