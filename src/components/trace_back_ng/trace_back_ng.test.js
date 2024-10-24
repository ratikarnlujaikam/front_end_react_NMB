import React from "react";
import { shallow } from "enzyme";
import Trace_back_ng from "./trace_back_ng";

describe("Trace_back_ng", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Trace_back_ng />);
    expect(wrapper).toMatchSnapshot();
  });
});
