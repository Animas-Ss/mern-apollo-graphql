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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Escribe una titulo" onChange={handleChange} />
      <textarea name="description" rows="3" placeholder="white a description" onChange={handleChange}></textarea>
      <button type="submit" disabled={!project.name || !project.description || loading}>Guardar</button>
    </form>
  )
}
