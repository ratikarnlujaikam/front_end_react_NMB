import React from "react";
import { shallow } from "enzyme";
import ReportOJT from "./ReportOJT";

describe("ReportOJT", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ReportOJT />);
    expect(wrapper).toMatchSnapshot();
  });
});
