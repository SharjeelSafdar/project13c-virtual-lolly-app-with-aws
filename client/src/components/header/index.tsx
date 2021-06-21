import React, { FC } from "react";
import { Link } from "gatsby";

import GithubCornor from "../githubCornor";

/**
 * Header component that sits at the top of each component.
 */
const Header: FC = () => {
  const repoUrl =
    "https://github.com/SharjeelSafdar/project13c-virtual-lolly-app-with-aws";

  return (
    <>
      <GithubCornor repoUrl={repoUrl} />
      <header>
        <h1 className="title">
          <Link to="/">virtual lollipop</Link>
        </h1>
        <p className="subtitle">
          because we all know someone
          <br />
          who deserves some sugar.
        </p>
      </header>
    </>
  );
};

export default Header;
