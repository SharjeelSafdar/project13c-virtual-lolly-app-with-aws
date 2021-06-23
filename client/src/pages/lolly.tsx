import React, { FC, useEffect } from "react";
import { PageProps } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import DisplayLolly from "../components/displayLolly";
import { useLollyContext } from "../context/lollyContext";

const ShowLolly: FC<PageProps> = ({ location }) => {
  const { lollies, getLollyById } = useLollyContext();
  const lollyId = location.search.slice(4);
  const lolly = lollies[lollyId];

  useEffect(() => {
    getLollyById(lollyId);
  }, []);

  return (
    <Layout>
      <SEO title="Frozen Lolly" />
      <DisplayLolly
        id={lollyId}
        topColor={lolly?.topColor}
        middleColor={lolly?.middleColor}
        bottomColor={lolly?.bottomColor}
        recipientName={lolly?.recipientName}
        message={lolly?.message}
        sendersName={lolly?.sendersName}
      />
    </Layout>
  );
};

export default ShowLolly;
