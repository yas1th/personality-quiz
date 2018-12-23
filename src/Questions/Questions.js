import React from "react";
import "../App.css";
import "./Questions.css";
import RadioButtonOptions from "../RadioButtonOptions/RadioButtonOptions";

export default class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNum: 0
    };
  }
  increaseQuestionNumber = () => {
    let nextQuestionNum = this.state.questionNum + 1;
    this.setState({ questionNum: nextQuestionNum });
  };
  resetQuestionNumber = () => {
    this.setState({ questionNum: 0 });
    // document.getElementById("next").setAttribute("disabled", true);
  };
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
                // nextQuestion={this.increaseQuestionNumber}
              />
            ) : (
              "multiple"
            )}
            <button id="next" onClick={e => this.increaseQuestionNumber()}>
              Next
            </button>
          </div>
        ) : (
          this.resetQuestionNumber()
        )}
      </div>
    );
  }
}
