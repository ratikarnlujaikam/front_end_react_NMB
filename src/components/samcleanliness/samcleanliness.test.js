import React from "react";
import { shallow } from "enzyme";
import Samcleanliness from "./samcleanliness";

describe("Samcleanliness", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Samcleanliness />);
    expect(wrapper).toMatchSnapshot();
  });
});
