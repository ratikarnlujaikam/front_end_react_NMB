import React from "react";
import { shallow } from "enzyme";
import Packing from "./packing";

describe("Packing", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Packing />);
    expect(wrapper).toMatchSnapshot();
  });
});
