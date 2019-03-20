import InputText from ".";
import React from "react";
import { shallow } from "enzyme";

describe("@InputText Component", () => {
  it("should call the onChange property", () => {
    const value = "2019/02/25";
    const onChangeMock = jest.fn();
    const event = {
      preventDefault: () => {},
      target: {
        value
      }
    };
    const component = shallow(<InputText onChange={onChangeMock} />);
    component.find("input").simulate("change", event);
    expect(onChangeMock).toBeCalledWith(value);
  });
});
