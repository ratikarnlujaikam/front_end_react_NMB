import React from "react";
import { shallow } from "enzyme";
import MOTORHIPOT from "./MOTORHIPOT";

describe("MOTORHIPOT", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MOTORHIPOT />);
    expect(wrapper).toMatchSnapshot();
  });
});
