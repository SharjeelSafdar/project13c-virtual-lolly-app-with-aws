/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type NewLollyInput = {
  topColor: string,
  middleColor: string,
  bottomColor: string,
  recipientName: string,
  message: string,
  sendersName: string,
};

export type Lolly = {
  __typename: "Lolly",
  id: string,
  topColor: string,
  middleColor: string,
  bottomColor: string,
  recipientName: string,
  message: string,
  sendersName: string,
};

export type CreateLollyMutationVariables = {
  newLolly: NewLollyInput,
};

export type CreateLollyMutation = {
  createLolly:  {
    __typename: "Lolly",
    id: string,
    topColor: string,
    middleColor: string,
    bottomColor: string,
    recipientName: string,
    message: string,
    sendersName: string,
  },
};

export type GetAllLolliesQuery = {
  getAllLollies:  Array< {
    __typename: "Lolly",
    id: string,
    topColor: string,
    middleColor: string,
    bottomColor: string,
    recipientName: string,
    message: string,
    sendersName: string,
  } | null >,
};

export type GetLollyQueryVariables = {
  id: string,
};

export type GetLollyQuery = {
  getLolly:  {
    __typename: "Lolly",
    id: string,
    topColor: string,
    middleColor: string,
    bottomColor: string,
    recipientName: string,
    message: string,
    sendersName: string,
  },
};
