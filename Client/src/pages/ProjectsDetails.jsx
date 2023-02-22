import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../graphql/consultaProjects';
import { TaskList } from '../components/Tareas/TaskList';
import { TaskForm } from '../components/Tareas/TaskForm';

export const ProjectsDetails = () => {
  const params = useParams();

  const { loading , error, data } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  if(loading) return <h1>loading..</h1>
  if(error) return <h1>Error</h1>

  return (
    <div className='bg-zinc-800 p-6 rounded-lg shadow-lg w-3/5 h-4/5'>
      <div className=' bg-slate-600 px-3 py-2 text-center'>
      <h1 className='text-2xl'>{data.project.name}</h1>
      <p className=' text-xl'>{data.project.description}</p>
      </div>
      <button className="bg-red-700 px-3 py-2">Borrar</button>
      <div className='flex justify-between m-2 p-2'>
      <TaskForm/>
      <div className=" bg-neutral-900 overflow-y-auto h-80 w-full ml-5 flex justify-center">
        <div className='flex flex-row justify-center w-80 mt-2'>
      <TaskList Tasks={data.project.tareas}/>
        </div>
      </div>
      </div>
    </div>
  )
}
