import React, { Component } from "react";
import "./PersonalityTest.css";
import Questions from "../components/Questions/Questions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { personalityTestActionCreators } from "../store/QuestionsStore/actions";

class _PersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0
    };
  }
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchQuestions();
  }
  changeCategory = index => {
    this.setState({
      categoryIndex: index
    });
  };
  nextcategory = () => {
    let curCategoryIndex = this.state.categoryIndex + 1;
    if (curCategoryIndex <= this.props.categories.length - 1) {
      this.setState({
        categoryIndex: curCategoryIndex
      });
    } else {
      this.setState({ categoryIndex: 0 });
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
                {categories.map((category, index) => {
                  let curCategory =
                    categories[this.state.categoryIndex].categoryName;
                  return (
                    <li
                      className={
                        category.categoryName === curCategory
                          ? "activeTab"
                          : "inactiveTab"
                      }
                      key={category.categoryName}
                      onClick={e => this.changeCategory(index)}
                    >
                      <span>{category.categoryName}</span>
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
                  question =>
                    question.category ===
                    categories[this.state.categoryIndex].categoryName
                )}
                nextSection={this.nextcategory}
              />
            </div>
            {/* Right Side Content Ends here */}
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories, questions } = state;
  return {
    categories,
    questions
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...personalityTestActionCreators }, dispatch);

export const PersonalityTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PersonalityTest);
