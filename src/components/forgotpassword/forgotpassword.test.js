import React from "react";
import { shallow } from "enzyme";
import Forgotpassword from "./forgotpassword";

describe("Forgotpassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Forgotpassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
