import React from "react";
import { shallow } from "enzyme";
import Cleanlinessspecial from "./cleanlinessspecial";

describe("Cleanlinessspecial", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cleanlinessspecial />);
    expect(wrapper).toMatchSnapshot();
  });
});
