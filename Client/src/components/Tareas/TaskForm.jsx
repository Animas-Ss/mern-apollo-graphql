import React from 'react';
import { useMutation} from '@apollo/client'
import { CREATE_TASK } from '../../graphql/consultaTareas';
import {useParams} from 'react-router-dom';

export const TaskForm = () => {
  const [createTask] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  });
  const params = useParams();

    const handleSubmit = async (e) => {
      e.preventDefault();
      await createTask({
        variables: {
          title: e.target.title.value,
          projectId: params.id
        },
      });
      e.target.reset();
      e.target.title.focus();
    };

  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name="title" placeholder='agregar tarea' className='bg-zinc-900 text-white rounded-lg mb-2 p-2 w-full'/>
        <button type='submit' className='bg-sky-900 text-white w-full p-2 rounded-lg'>Agregar</button>
    </form>
  )
}
