import React from "react";
import classNames from "classnames";

const Headline: React.FC = ({ children }) => {
  const className = classNames("text-2xl", "font-bold");
  return <h1 className={className}>{children}</h1>;
};

export default Headline;
