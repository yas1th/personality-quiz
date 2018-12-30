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
  it("should not render if there are no categories and questions", () => {
    const ul = <ul className="categories-list" />;
    expect(wrapper.contains(ul)).toBe(false);
  });
  // it("should render if there are categories and questions", () => {
  //   wrapper.setProps({
  //     categories: data.categories,
  //     questions: data.questions
  //   });
  //   const ul = <ul className="categories-list" />;
  //   expect(wrapper.find(Questions)).toBe(true);
  // });
});
