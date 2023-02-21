import {gql} from 'graphql-tag';

export const typeDefs = gql`
   type Query {
    hello : String
    projects: [Project]
    project(_id: ID!): Project
    tareas: [Tarea]
    tarea(_id: ID!): Tarea
   }

   type Mutation {
    createProject(name: String, description: String): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: ID!, name: String!, description: String): Project
    createTarea(title: String, projectId: ID): Tarea
    deleteTarea(_id: ID!): Tarea
    updateTarea(_id: ID!, title: String, projectId: ID!): Tarea
   }

   type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    tareas: [Tarea]
   }

   type Tarea {
      _id: ID
      title: String
      project: Project
      createdAt: String
      updatedAt: String
   }
`