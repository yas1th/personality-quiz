import React from "react";
import { shallow } from "enzyme";
import Questions from "./Questions";
import Question from "../Question/Question";

describe("<Questions />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Questions />);
  });
  it("it should not render if there are no questions passed ", () => {
    expect(wrapper.find(Question)).toHaveLength(0);
  });
});
