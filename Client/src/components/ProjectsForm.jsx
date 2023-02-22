import { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PROJECT, GET_PROJECTS } from "../graphql/consultaProjects";


export const ProjectsForm = () => {

  const [project, setProject] = useState({
    name: "",
    description: ""
  });

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries:[
      {
        query: GET_PROJECTS
      },
      "GetProjects",
    ],
  });

  const handleChange = ({ target: { name, value } }) => {
    setProject({
      ...project,
      [name]: value,
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({
      variables: {
        name: project.name,
        description: project.description,
      }
    })
  };


  return (
    <form onSubmit={handleSubmit} className=" w-2/5">
      <input type="text" name="name" placeholder="Escribe una titulo" onChange={handleChange} className=" bg-zinc-800 rounded-lg p-4 block w-full mb-3 "/>
      <textarea name="description" rows="3" placeholder="white a description" onChange={handleChange} className="bg-zinc-800 rounded-lg block w-full mb-3"></textarea>
      <button type="submit" disabled={!project.name || !project.description || loading} className=" bg-blue-500 px-4 py-1 text-lg mb-3 disabled:bg-zinc-400">Guardar</button>
    </form>
  )
}
