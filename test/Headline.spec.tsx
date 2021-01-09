import React from "react";
import renderer from "react-test-renderer";
import Headline from "../components/utils/Headline";

test("AppTitle", () => {
  const component = renderer.create(<Headline />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
