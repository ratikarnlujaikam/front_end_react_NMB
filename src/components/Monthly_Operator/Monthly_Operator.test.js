import React from "react";
import { shallow } from "enzyme";
import Monthly_Operator from "./Monthly_Operator";

describe("Monthly_Operator", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Monthly_Operator />);
    expect(wrapper).toMatchSnapshot();
  });
});
