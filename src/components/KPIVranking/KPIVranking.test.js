import React from "react";
import { shallow } from "enzyme";
import KPIVranking from "./KPIVranking";

describe("KPIVranking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<KPIVranking />);
    expect(wrapper).toMatchSnapshot();
  });
});
