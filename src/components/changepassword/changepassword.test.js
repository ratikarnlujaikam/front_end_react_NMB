import React from "react";
import { shallow } from "enzyme";
import Changepassword from "./changepassword";

describe("Changepassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Changepassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
