import React from "react";
import { shallow } from "enzyme";
import Daily from "./Daily";

describe("Daily", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Daily />);
    expect(wrapper).toMatchSnapshot();
  });
});
