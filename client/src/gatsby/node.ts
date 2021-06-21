import { GatsbyNode } from "gatsby";
import { Lolly } from "../graphql/api";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { data }: QueryResponse = await graphql(`
    query GetAllLollies {
      virtualLolly {
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
    }
  `);

  if (data && data.virtualLolly) {
    const lollies = data.virtualLolly.getAllLollies;
    lollies.forEach(lolly => {
      actions.createPage({
        path: `/lolly/${lolly.id}`,
        component: require.resolve("../templates/showLolly"),
        context: {
          ...lolly,
        },
      });
    });
  }
};

type QueryResponse = {
  data?: {
    virtualLolly: {
      getAllLollies: Lolly[];
    };
  };
  errors?: any;
};
