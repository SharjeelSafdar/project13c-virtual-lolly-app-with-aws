/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAllLollies = /* GraphQL */ `
  query GetAllLollies {
    getAllLollies {
      id
      topColor
      middleColor
      bottomColor
      recipientName
      message
      sendersName
    }
  }
`;
export const getLolly = /* GraphQL */ `
  query GetLolly($id: ID!) {
    getLolly(id: $id) {
      id
      topColor
      middleColor
      bottomColor
      recipientName
      message
      sendersName
    }
  }
`;
