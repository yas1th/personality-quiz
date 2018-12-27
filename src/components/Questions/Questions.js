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
      this.props.nextSection();
    }
  };
  render() {
    const { questions } = this.props;
    console.log("questions", this.props.questionNum);
    return (
      <div>
        {this.state.questionNum <= questions.length - 1 ? (
          <div>
            <Question
              question={questions[this.state.questionNum]}
              increaseQuestionNumber={this.increaseQuestionNumber}
              updateAnswer={this.props.updateAnswer}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
