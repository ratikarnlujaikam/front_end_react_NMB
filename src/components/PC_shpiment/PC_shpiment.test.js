import React from "react";
import { shallow } from "enzyme";
import PC_shpiment from "./PC_shpiment";

describe("PC_shpiment", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PC_shpiment />);
    expect(wrapper).toMatchSnapshot();
  });
});
