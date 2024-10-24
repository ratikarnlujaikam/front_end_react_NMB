import React from "react";
import { shallow } from "enzyme";
import Vrecode from "./Vrecode";

describe("Vrecode", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Vrecode />);
    expect(wrapper).toMatchSnapshot();
  });
});
