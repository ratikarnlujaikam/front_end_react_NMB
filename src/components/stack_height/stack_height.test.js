import React from "react";
import { shallow } from "enzyme";
import Stack_height from "./stack_height";

describe("Stack_height", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Stack_height />);
    expect(wrapper).toMatchSnapshot();
  });
});
