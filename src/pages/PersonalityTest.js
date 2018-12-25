import React, { Component } from "react";
import "./PersonalityTest.css";
import Questions from "../components/Questions/Questions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { questionActionCreators } from "../store/QuestionsStore/actions";

class _PersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "hard_fact",
      categoryIndex: 0
    };
  }
  componentDidMount() {
    this.props.fetchQuestions();
  }
  changeCategory = curCategory => {
    this.setState({
      category: curCategory
    });
  };
  nextcategory = () => {
    let curCategoryIndex = this.state.categoryIndex + 1;
    if (curCategoryIndex <= this.props.categories.length - 1) {
      this.setState({
        categoryIndex: curCategoryIndex,
        category: this.props.categories[curCategoryIndex]
      });
    } else {
      this.setState({ categoryIndex: 0, category: "hard_fact" });
    }
  };
  render() {
    const { categories, questions } = this.props;
    return (
      <div>
        {categories && questions ? (
          <div className="wrapper">
            {/* left menu Starts here */}
            <div className="left-menu pquiz-col-4">
              <ul className="categories-list">
                {categories.map(category => {
                  let curCategory = this.state.category;
                  return (
                    <li
                      className={
                        category === curCategory ? "activeTab" : "inactiveTab"
                      }
                      key={category}
                      onClick={e => this.changeCategory(category)}
                    >
                      <span>{category}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* left menu ends here */}
            {/* Right side content starts here */}
            <div className="right-side-content pquiz-col-8">
              <Questions
                questions={questions.filter(
                  question => question.category === this.state.category
                )}
                nextSection={this.nextcategory}
              />
            </div>
            {/* Right Side Content Ends here */}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { questionsData } = state;
  return {
    categories: questionsData.categories,
    questions: questionsData.questions
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...questionActionCreators }, dispatch);

export const PersonalityTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PersonalityTest);
