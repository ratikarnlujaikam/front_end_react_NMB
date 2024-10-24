import React from "react";
import { shallow } from "enzyme";
import Missing_part from "./Missing_part_daily";

describe("MouthlyQA", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Missing_part />);
    expect(wrapper).toMatchSnapshot();
  });
});
