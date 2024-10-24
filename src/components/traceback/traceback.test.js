import React from "react";
import { shallow } from "enzyme";
import Traceback from "./traceback";

describe("Traceback", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Traceback />);
    expect(wrapper).toMatchSnapshot();
  });
});
