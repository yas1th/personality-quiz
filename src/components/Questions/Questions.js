import React from "react";
import "../../App.css";
import "./Questions.css";
import Question from "../Question/Question";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: this.props.questionNum ? this.props.questionNum : 0,
      disableNextBtn: false
    };
  }

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
  increaseQuestionNumber = () => {
    let nextQuestionNum = this.state.questionNum + 1;
    this.setState({ questionNum: nextQuestionNum });
    if (nextQuestionNum > this.props.questions.length - 1) {
      // this.setState({ questionNum: 0, disableNextBtn: true });
      let categoryName = this.props.questions[nextQuestionNum - 1].category;
      this.props.nextSection(categoryName);
    }
  };
  checkToDisplaySubmit = () => {
    if (this.state.questionNum === this.props.questions.length - 1) {
      let vals = Object.values(this.props.catCurQstnIndex);
      console.log("valss***********", vals);
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
    console.log(
      "questions",
      this.state.questionNum,
      this.props.questions.length - 1
    );

    return (
      <div>
        {questions && this.state.questionNum !== -1 ? (
          <div>
            <Question
              question={questions[this.state.questionNum]}
              increaseQuestionNumber={this.increaseQuestionNumber}
              updateAnswer={this.props.updateAnswer}
              submit={this.checkToDisplaySubmit()}
              updateAnswers={this.props.updateAnswers}
              answers={this.props.answers}
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
