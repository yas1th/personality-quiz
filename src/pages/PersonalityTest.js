import React, { Component } from "react";
import "./PersonalityTest.css";
import Questions from "../components/Questions/Questions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { personalityTestActionCreators } from "../store/PersonalityTestStore/actions";
import LoadingBar from "../components/LoadingBar/LoadingBar";

class _PersonalityTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryIndex: 0
    };
    this.child = React.createRef();
  }
  componentDidMount() {
    this.props.fetchCategories();
    this.props.fetchQuestions();
  }
  changeCategory = (index, prevCategory) => {
    const prevCategoryQstnIndex = this.child.current.getQstnNumber();
    this.props.updateCurrentCategoryQuestionIndex({
      categoryName: prevCategory,
      questionNum: prevCategoryQstnIndex
    });
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
    let categoryName;
    if (categories.length > 0) {
      categoryName = categories[this.state.categoryIndex].categoryName;
    }
    return (
      <div>
        {categories.length > 0 && questions.length > 0 ? (
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
                      onClick={e => this.changeCategory(index, curCategory)}
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
                ref={this.child}
                questions={questions.filter(
                  question => question.category === categoryName
                )}
                nextSection={this.nextcategory}
                updateAnswer={this.props.updateAnswer}
                questionNum={
                  this.props.categoryCurrentQuestionIndex[categoryName]
                    ? this.props.categoryCurrentQuestionIndex[categoryName]
                    : 0
                }
              />
            </div>
            {/* Right Side Content Ends here */}
          </div>
        ) : (
          <LoadingBar />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { categories, questions, categoryCurrentQuestionIndex } = state;
  return {
    categories,
    questions,
    categoryCurrentQuestionIndex
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...personalityTestActionCreators }, dispatch);

export const PersonalityTest = connect(
  mapStateToProps,
  mapDispatchToProps
)(_PersonalityTest);
