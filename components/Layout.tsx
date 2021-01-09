import React, { ReactElement } from "react";
import Link from "next/link";
import Head from "next/head";
import classNames from "classnames";

type Props = {
  title?: string;
  children?: ReactElement[] | ReactElement;
};

const header_class = classNames("p-4", "flex", "justify-end", "border-b");
const link_class = classNames("transition-colors", "duration-300", "pr-2", " hover:text-gray-500");
const footer_class = classNames("fixed", "bottom-0", "left-0", "p-4", "bg-gray-300", "w-screen");

const Layout: React.FC<Props> = ({ title = "This is the default title", children }: Props) => {
  const container_class = classNames("container", "md:container", "lg:container", "mx-auto");

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav className={header_class}>
          <Link href="/">
            <a className={link_class}>Home</a>
          </Link>
          <Link href="/about">
            <a className={link_class}>About</a>
          </Link>
          <Link href="/users">
            <a className={link_class}>Users List</a>
          </Link>
          <Link href="/api/users">
            <a className={link_class}>Users API</a>
          </Link>
        </nav>
      </header>
      <main className={container_class}>{children}</main>
      <footer className={footer_class}>
        <span>I&apos;m here to stay (Footer)</span>
      </footer>
    </div>
  );
};

export default Layout;
