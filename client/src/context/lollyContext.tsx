import React, { createContext, FC, useContext, useState } from "react";
import { API } from "aws-amplify";
import { navigate } from "gatsby";

import { getLolly } from "../graphql/queries";
import { createLolly } from "../graphql/mutations";
import {
  Lolly,
  GetLollyQuery,
  GetLollyQueryVariables,
  NewLollyInput,
  CreateLollyMutation,
  CreateLollyMutationVariables,
} from "../graphql/api";

export interface ContextType {
  lollies: Record<string, Lolly | undefined>;
  isCreating: boolean;
  getLollyById: (id: string) => void;
  createNewLolly: (newLolly: NewLollyInput) => void;
}

const initialState: ContextType = {
  lollies: {},
  isCreating: false,
  getLollyById: () => {},
  createNewLolly: () => {},
};

export const LollyContext = createContext<ContextType>(initialState);

export const useLollyContext = () => useContext(LollyContext);

export const LollyContextProvider: FC = ({ children }) => {
  const [lollies, setLollies] = useState(initialState.lollies);
  const [isCreating, setIsCreating] = useState(initialState.isCreating);

  const getLollyById = async (id: string) => {
    setIsCreating(true);
    try {
      const variables: GetLollyQueryVariables = { id };
      const response = (await API.graphql({
        query: getLolly,
        variables,
      })) as { data: GetLollyQuery };

      setLollies(prev => ({
        ...prev,
        [response.data.getLolly.id]: response.data.getLolly,
      }));
      setIsCreating(false);
    } catch (err) {
      console.log("Error fetching lolly: ", err);
      navigate("/404");
      setIsCreating(false);
    }
  };

  const createNewLolly = async (newLolly: NewLollyInput) => {
    setIsCreating(true);
    try {
      const variables: CreateLollyMutationVariables = { newLolly };
      const response = (await API.graphql({
        query: createLolly,
        variables,
      })) as { data: CreateLollyMutation };

      setLollies(prev => ({
        ...prev,
        [response.data.createLolly.id]: response.data.createLolly,
      }));
      setIsCreating(false);
      navigate(`/lolly?id=${response.data.createLolly.id}`);
    } catch (err) {
      console.log("Error creating new lolly: ", err);
      setIsCreating(false);
    }
  };

  const value: ContextType = {
    lollies,
    isCreating,
    getLollyById,
    createNewLolly,
  };

  return (
    <LollyContext.Provider value={value}>{children}</LollyContext.Provider>
  );
};
