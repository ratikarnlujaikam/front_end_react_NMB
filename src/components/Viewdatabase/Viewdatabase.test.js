import React from "react";
import { shallow } from "enzyme";
import Viewdatabase from "./Viewdatabase";

describe("Viewdatabase", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Viewdatabase />);
    expect(wrapper).toMatchSnapshot();
  });
});
