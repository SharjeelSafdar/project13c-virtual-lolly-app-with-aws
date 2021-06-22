import React, { FC } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DisplayLolly from "../components/displayLolly";
import { useLollyContext } from "../context/lollyContext";

const FrozenLolly: FC<PageProps> = ({ location }) => {
  const { lollies } = useLollyContext();
  const lollyId = location.pathname.slice(6);
  const lolly = lollies[lollyId];

  return (
    <Layout>
      <SEO title="Frozen Lolly" />
      <DisplayLolly {...lolly} />
    </Layout>
  );
};

export default FrozenLolly;
