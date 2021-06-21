import React, { FC } from "react";
import Amplify from "aws-amplify";

import Layout from "../components/layout";
import SEO from "../components/seo";
import NewLollyForm from "../components/newLollyForm";
import awsConfig from "../aws-exports";

const CreateNew: FC = () => {
  Amplify.configure(awsConfig);

  return (
    <Layout>
      <SEO title="Create New Lolly" />
      <NewLollyForm />
    </Layout>
  );
};

export default CreateNew;
