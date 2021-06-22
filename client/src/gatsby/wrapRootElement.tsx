import React from "react";
import { WrapRootElementBrowserArgs } from "gatsby";

import { LollyContextProvider } from "../context/lollyContext";

export const wrapRootElement = ({ element }: WrapRootElementBrowserArgs) => (
  <LollyContextProvider>{element}</LollyContextProvider>
);
