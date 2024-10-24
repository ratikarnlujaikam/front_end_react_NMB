import React from "react";
import { shallow } from "enzyme";
import Report_printlabal from "./Report_printlabal";

describe("Report_printlabal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Report_printlabal />);
    expect(wrapper).toMatchSnapshot();
  });
});
