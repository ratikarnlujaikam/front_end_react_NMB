import React from "react";
import { shallow } from "enzyme";
import Diecast from "./Diecast";

describe("Diecast", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Diecast />);
    expect(wrapper).toMatchSnapshot();
  });
});
