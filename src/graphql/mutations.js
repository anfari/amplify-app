/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNota = /* GraphQL */ `
  mutation CreateNota(
    $input: CreateNotaInput!
    $condition: ModelNotaConditionInput
  ) {
    createNota(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const updateNota = /* GraphQL */ `
  mutation UpdateNota(
    $input: UpdateNotaInput!
    $condition: ModelNotaConditionInput
  ) {
    updateNota(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
export const deleteNota = /* GraphQL */ `
  mutation DeleteNota(
    $input: DeleteNotaInput!
    $condition: ModelNotaConditionInput
  ) {
    deleteNota(input: $input, condition: $condition) {
      id
      text
      createdAt
      updatedAt
    }
  }
`;
