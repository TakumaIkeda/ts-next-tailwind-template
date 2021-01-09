import React, { ReactElement } from "react";
import Link from "next/link";
import classNames from "classnames";

type Props = {
  title: string;
  to: string;
  children?: ReactElement;
};

const LinkBtn: React.FC<Props> = ({ title, to }: Props) => {
  const btn_class = classNames(
    "transition",
    "rounded",
    "text-white",
    "py-2",
    "px-4",
    "m-5",
    "bg-blue-500",
    "hover:bg-blue-600",
    "focus:bg-blue-700"
  );
  return (
    <Link href={to}>
      <a className={btn_class}>{title}</a>
    </Link>
  );
};

export default LinkBtn;
