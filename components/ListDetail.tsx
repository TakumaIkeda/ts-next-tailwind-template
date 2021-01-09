import * as React from "react";
import { FC } from "react";

import { User } from "../interfaces";

import Headline from "./utils/Headline";

type ListDetailProps = {
  item: User;
};

const ListDetail: FC<ListDetailProps> = ({ item: user }: ListDetailProps) => (
  <div>
    <Headline>Detail for {user.name}</Headline>
    <p>ID: {user.id}</p>
  </div>
);

export default ListDetail;
