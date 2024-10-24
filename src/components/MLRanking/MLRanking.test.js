import React from "react";
import { shallow } from "enzyme";
import MLRanking from "./MLRanking";

describe("MLRanking", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MLRanking />);
    expect(wrapper).toMatchSnapshot();
  });
});
