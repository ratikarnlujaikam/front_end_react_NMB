import React from "react";
import { shallow } from "enzyme";
import NGratiorecord from "./NGratiorecord";

describe("NGratiorecord", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NGratiorecord />);
    expect(wrapper).toMatchSnapshot();
  });
});
