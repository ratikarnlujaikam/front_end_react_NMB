import React from "react";
import { shallow } from "enzyme";
import OutPutCo2 from "./OutPutCo2";

describe("OutPutCo2", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<OutPutCo2 />);
    expect(wrapper).toMatchSnapshot();
  });
});
