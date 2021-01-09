import React from "react";
import classNames from "classnames";
import Layout from "../components/Layout";
import Headline from "../components/utils/Headline";
import LinkBtn from "../components/utils/LinkBtn";

const AboutPage: React.FC = () => {
  const content_class = classNames("mx-5");
  const btn_row = classNames("my-5");
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <Headline>About</Headline>
      <p className={content_class}>This is the about page</p>
      <p className={btn_row}>
        <LinkBtn title="Go Home" to="/"></LinkBtn>
      </p>
    </Layout>
  );
};

export default AboutPage;
