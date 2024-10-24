import React from "react";
import { shallow } from "enzyme";
import DataML from "./dataML";

describe("DataML", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DataML />);
    expect(wrapper).toMatchSnapshot();
  });
});
