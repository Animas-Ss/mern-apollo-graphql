import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
mutation($title: String, $projectId: ID){
  createTarea(title: $title, projectId: $projectId) {
    title
    project {
      _id
    }
  }
}
`;

export const DELETE_TASK = gql`
mutation($id: ID!){
  deleteTarea(_id: $id) {
    _id
    title
  }
}
`