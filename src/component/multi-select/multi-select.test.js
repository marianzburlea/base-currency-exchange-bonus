import MultiSelect from ".";
import React from "react";
import { shallow } from "enzyme";

describe("@MultiSelect Component", () => {
  it("should call the onChange property", () => {
    const value = "GBP";
    const onChangeMock = jest.fn();
    const event = {
      preventDefault: () => {},
      target: {
        value
      }
    };
    const component = shallow(<MultiSelect onChange={onChangeMock} />);
    component.find("select").simulate("change", event);
    expect(onChangeMock).toBeCalledWith(value);
  });
});
