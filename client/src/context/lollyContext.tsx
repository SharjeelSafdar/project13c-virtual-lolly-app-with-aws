import React, { createContext, FC, useContext, useState } from "react";
import { API } from "aws-amplify";
import { navigate } from "gatsby";

import { createLolly } from "../graphql/mutations";
import {
  Lolly,
  NewLollyInput,
  CreateLollyMutation,
  CreateLollyMutationVariables,
} from "../graphql/api";

export interface ContextType {
  lollies: Record<string, Lolly>;
  isCreating: boolean;
  createNewLolly: (newLolly: NewLollyInput) => void;
}

const initialState: ContextType = {
  lollies: {},
  isCreating: false,
  createNewLolly: () => {},
};

export const LollyContext = createContext<ContextType>(initialState);

export const useLollyContext = () => useContext(LollyContext);

export const LollyContextProvider: FC = ({ children }) => {
  const [lollies, setLollies] = useState(initialState.lollies);
  const [isCreating, setIsCreating] = useState(initialState.isCreating);

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
      navigate(`/showNewLolly/${response.data.createLolly.id}`);
    } catch (err) {
      console.log("Error creating new lolly: ", err);
      setIsCreating(false);
    }
  };

  const value: ContextType = {
    lollies,
    isCreating,
    createNewLolly,
  };

  return (
    <LollyContext.Provider value={value}>{children}</LollyContext.Provider>
  );
};
