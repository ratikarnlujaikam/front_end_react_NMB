import React from "react";
import { shallow } from "enzyme";
import Download_list from "./download_list";

describe("Download_list", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Download_list />);
    expect(wrapper).toMatchSnapshot();
  });
});
