import React from "react";
import { shallow } from "enzyme";
import Information from "./information";

describe("Information", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Information />);
    expect(wrapper).toMatchSnapshot();
  });
});
