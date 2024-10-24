import React from "react";
import { shallow } from "enzyme";
import Shipinfo from "./shipinfo";

describe("Shipinfo", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Shipinfo />);
    expect(wrapper).toMatchSnapshot();
  });
});
