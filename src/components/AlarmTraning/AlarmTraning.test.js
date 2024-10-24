import React from "react";
import { shallow } from "enzyme";
import AlarmTraning from "./AlarmTraning";

describe("AlarmTraning", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AlarmTraning />);
    expect(wrapper).toMatchSnapshot();
  });
});
