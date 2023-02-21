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
    <div>
      <h1>{data.project.name}</h1>
      <p>{data.project.description}</p>
      <button>Borrar</button>
      <TaskForm/>
      <TaskList Tasks={data.project.tareas}/>
    </div>
  )
}
