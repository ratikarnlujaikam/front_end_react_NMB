import React from "react";
import { shallow } from "enzyme";
import ML from "./ML";

describe("ML", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ML />);
    expect(wrapper).toMatchSnapshot();
  });
});
