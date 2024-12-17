import React from "react";
import { shallow } from "enzyme";
import NGlotrecord from "./NGlotrecord";

describe("NGlotrecord", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<NGlotrecord />);
    expect(wrapper).toMatchSnapshot();
  });
});
