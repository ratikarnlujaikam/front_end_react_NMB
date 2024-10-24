import React from "react";
import { shallow } from "enzyme";
import GRotorLine from "./GRotorLine";

describe("GRotorLine", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GRotorLine />);
    expect(wrapper).toMatchSnapshot();
  });
});
