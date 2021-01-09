import React from "react";
import renderer from "react-test-renderer";
import LinkBtn from "../components/utils/LinkBtn";

test("AppTitle", () => {
  const component = renderer.create(<LinkBtn to="/" title="Home" />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
