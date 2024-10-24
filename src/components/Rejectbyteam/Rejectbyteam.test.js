import React from "react";
import { shallow } from "enzyme";
import Rejectbyteam from "./Rejectbyteam";

describe("Rejectbyteam", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Rejectbyteam />);
    expect(wrapper).toMatchSnapshot();
  });
});
