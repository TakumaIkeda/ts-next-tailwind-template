import { ReactNode } from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import Headline from "../components/utils/Headline";
import LinkBtn from "../components/utils/LinkBtn";

const IndexPage: ReactNode = () => {
  const link_row_class = classNames("mt-5");
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <div>
        <Headline>
          <span>Hello Next.js </span>
          <span role="img" aria-label="hello">
            👋
          </span>
        </Headline>
        <p className={link_row_class}>
          <LinkBtn title="About" to="/about"></LinkBtn>
        </p>
      </div>
    </Layout>
  );
};

export default IndexPage;
