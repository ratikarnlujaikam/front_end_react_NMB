import React from "react";
import { shallow } from "enzyme";
import Uploadfilecleanliness from "./uploadfilecleanliness";

describe("Uploadfilecleanliness", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Uploadfilecleanliness />);
    expect(wrapper).toMatchSnapshot();
  });
});
