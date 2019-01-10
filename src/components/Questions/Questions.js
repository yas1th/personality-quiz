import React from "react";
import "../../App.css";
import "./Questions.css";
import { Question } from "../Question/Question";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: this.props.questionNum ? this.props.questionNum : 0,
      disableNextBtn: false
    };
  }

  // This question number is used to preserve the current question number in a specific category
  // Suppose if the user has completed only few questions from the category and he goes to the next
  // category and comes back again to this category need to show him the unanswered question

  getQstnNumber = () => {
    return this.state.questionNum;
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps) {
      this.setState({
        questionNum: nextProps.questionNum ? nextProps.questionNum : 0,
        disableNextBtn: false
      });
    }
  };

  // this function will increase the question number and send it to <Question /> component
  // if all the questions in the category are completed then need to take the user to the next category

  increaseQuestionNumber = () => {
    let nextQuestionNum = this.state.questionNum + 1;
    this.setState({ questionNum: nextQuestionNum });
    if (nextQuestionNum > this.props.questions.length - 1) {
      let categoryName = this.props.questions[nextQuestionNum - 1].category;
      this.props.nextSection(categoryName);
    }
  };

  // suppose if the user has reached the end of the last question and it can be in any category
  // at this time checking whether user has completed the remaining categories and in the present
  // category if it is the last question then instead if NEXT button will display the SUBMIT button

  checkToDisplaySubmit = () => {
    if (this.state.questionNum === this.props.questions.length - 1) {
      let vals = Object.values(this.props.catCurQstnIndex);
      let counter = 0;
      for (let i = 0; i < vals.length; i++) {
        if (vals[i] === -1) counter++;
      }
      if (counter === this.props.categoryCount - 1) {
        return true;
      }
    }
    return false;
  };
  render() {
    const { questions } = this.props;
    return (
      <div>
        {questions && this.state.questionNum !== -1 ? (
          <div>
            <Question
              question={questions[this.state.questionNum]}
              increaseQuestionNumber={this.increaseQuestionNumber}
              submit={this.checkToDisplaySubmit()}
            />
          </div>
        ) : (
          <div className="completed-category">
            <h2>
              {"You have completed this category, choose another category !!"}
            </h2>
          </div>
        )}
      </div>
    );
  }
}
