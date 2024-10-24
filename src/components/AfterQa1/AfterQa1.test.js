import React from "react";
import { shallow } from "enzyme";
import AfterQa1 from "./AfterQa1";

describe("AfterQa1", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AfterQa1 />);
    expect(wrapper).toMatchSnapshot();
  });
});
