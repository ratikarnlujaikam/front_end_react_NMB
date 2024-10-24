import React from "react";
import { shallow } from "enzyme";
import Cleanlinessmonitor from "./Cleanlinessmonitor";

describe("Cleanlinessmonitor", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Cleanlinessmonitor />);
    expect(wrapper).toMatchSnapshot();
  });
});
