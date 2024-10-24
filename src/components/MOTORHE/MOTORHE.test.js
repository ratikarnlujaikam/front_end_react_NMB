import React from "react";
import { shallow } from "enzyme";
import MOTORHE from "./MOTORHE";

describe("MOTORHE", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MOTORHE />);
    expect(wrapper).toMatchSnapshot();
  });
});
