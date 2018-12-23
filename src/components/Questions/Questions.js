import React from "react";
import "../../App.css";
import "./Questions.css";
import RadioButtonOptions from "../RadioButtonOptions/RadioButtonOptions";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: 0,
      disableNextBtn: false
    };
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
  // resetQuestionNumber = () => {};
  render() {
    const { questions } = this.props;
    return (
      <div>
        {this.state.questionNum <= questions.length - 1 ? (
          <div>
            <div>{questions[this.state.questionNum].question}</div>
            {questions[this.state.questionNum].question_type.type ===
            "single_choice" ? (
              <RadioButtonOptions
                question={questions[this.state.questionNum]}
              />
            ) : (
              "multiple"
            )}
            <button
              id="next"
              disabled={this.state.disableNextBtn}
              onClick={e => this.increaseQuestionNumber()}
            >
              Next
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
