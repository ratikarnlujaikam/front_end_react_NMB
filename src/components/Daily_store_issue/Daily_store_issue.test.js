import React from "react";
import { shallow } from "enzyme";
import Daily_store_issue from "./Daily_store_issue";

describe("Daily_store_issue", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Daily_store_issue />);
    expect(wrapper).toMatchSnapshot();
  });
});
