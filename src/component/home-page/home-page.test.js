import React from "react";
import renderer from "react-test-renderer";
import HomePage from ".";

describe("@HomePage Component", () => {
  it("should match the snapshot", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
