import React from "react";
import { shallow } from "enzyme";
import Packedhalfpallet from "./Packedhalfpallet";

describe("Packedhalfpallet", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Packedhalfpallet />);
    expect(wrapper).toMatchSnapshot();
  });
});
