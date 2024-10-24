import React from "react";
import { shallow } from "enzyme";
import VMI from "./VMI";

describe("VMI", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<VMI />);
    expect(wrapper).toMatchSnapshot();
  });
});
