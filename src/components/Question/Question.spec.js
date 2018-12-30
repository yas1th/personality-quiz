import React from "react";
import { shallow } from "enzyme";
import Question from "./Question";

describe("<Question />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Question />);
  });
  it("it should not render if there is no question prop", () => {
    expect(wrapper.find("input")).toHaveLength(0);
  });
});
