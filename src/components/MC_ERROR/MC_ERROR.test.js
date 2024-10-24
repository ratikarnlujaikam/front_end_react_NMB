import React from "react";
import { shallow } from "enzyme";
import MC_ERROR from "./MC_ERROR";

describe("MC_ERROR", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MC_ERROR />);
    expect(wrapper).toMatchSnapshot();
  });
});
