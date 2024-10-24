import React from "react";
import { shallow } from "enzyme";
import QCAlert from "./QCAlert";

describe("QCAlert", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<QCAlert />);
    expect(wrapper).toMatchSnapshot();
  });
});
