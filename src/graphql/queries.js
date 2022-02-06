/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNota = /* GraphQL */ `
  query GetNota($id: ID!) {
    getNota(id: $id) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const listNotas = /* GraphQL */ `
  query ListNotas(
    $filter: ModelNotaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
