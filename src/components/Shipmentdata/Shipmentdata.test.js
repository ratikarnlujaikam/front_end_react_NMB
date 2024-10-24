import React from "react";
import { shallow } from "enzyme";
import Shipmentdata from "./Shipmentdata";

describe("Shipmentdata", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Shipmentdata />);
    expect(wrapper).toMatchSnapshot();
  });
});
