import React from "react";
import "../../App.css";
import "./Questions.css";
import Question from "../Question/Question";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: 0,
      disableNextBtn: false
    };
    this.increaseQuestionNumber = this.increaseQuestionNumber.bind(this);
  }

  componentWillReceiveProps = nextProps => {
    if (this.props !== nextProps) {
      this.setState({ questionNum: 0, disableNextBtn: false });
    }
  };
  increaseQuestionNumber = () => {
    let nextQuestionNum = this.state.questionNum + 1;
    this.setState({ questionNum: nextQuestionNum });
    if (nextQuestionNum > this.props.questions.length - 1) {
      this.setState({ questionNum: 0, disableNextBtn: true });
      this.props.nextSection();
    }
  };
  render() {
    const { questions } = this.props;
    return (
      <div>
        {this.state.questionNum <= questions.length - 1 ? (
          <div>
            <Question
              question={questions[this.state.questionNum]}
              increaseQuestionNumber={this.increaseQuestionNumber}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
