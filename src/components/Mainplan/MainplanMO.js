import React from "react";
import { shallow } from "enzyme";
import Mainplan from "./Mainplan";

describe("Mainplan", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Mainplan />);
    expect(wrapper).toMatchSnapshot();
  });
});
