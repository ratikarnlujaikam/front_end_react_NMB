import React from "react";
import { shallow } from "enzyme";
import MOTOREWMS from "./MOTOREWMS";

describe("MOTOREWMS", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<MOTOREWMS />);
    expect(wrapper).toMatchSnapshot();
  });
});
