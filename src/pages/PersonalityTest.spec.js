import React from "react";
import { shallow } from "enzyme";
import { PersonalityTest } from "./PersonalityTest";
import { Questions } from "../components/Questions/Questions";
import data from "../personality_test";

describe("<PersonalityTest />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <PersonalityTest fetchCategories={() => {}} fetchQuestions={() => {}} />
    );
  });
  it("it should not render if there are no categories and questions", () => {
    const ul = <ul className="categories-list" />;
    expect(wrapper.contains(ul)).toBe(false);
  });
});
