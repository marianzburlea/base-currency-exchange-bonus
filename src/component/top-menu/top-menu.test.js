import React from "react";
import renderer from "react-test-renderer";
import TopMenu from ".";

describe("@TopMenu Component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<TopMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
