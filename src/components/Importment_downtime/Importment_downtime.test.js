import React from "react";
import { shallow } from "enzyme";
import Missing_part from "./Improment_downtime_line";

describe("MouthlyQA", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Missing_part />);
    expect(wrapper).toMatchSnapshot();
  });
});
