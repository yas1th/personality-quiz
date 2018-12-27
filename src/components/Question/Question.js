import React from "react";
import "../../App.css";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: -1,
      errorMessage: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ errorMessage: null, selectedOption: -1 });
    }
  }

  handleNextQuestion = () => {
    if (this.state.selectedOption !== -1) {
      this.setState({
        selectedOption: -1,
        errorMessage: null
      });
      this.props.increaseQuestionNumber();
    } else {
      this.setState({
        errorMessage: "you must answer this question"
      });
    }
    this.props.updateAnswer({
      questionId: this.props.question._id,
      answerIndex: this.state.selectedOption
    });
  };

  handleChangeOption = index => {
    this.setState({
      selectedOption: index,
      errorMessage: null
    });
  };
  render() {
    const { question } = this.props;
    return (
      <div>
        <div>{question.question}</div>
        {question.questionType.options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                value={option}
                onChange={e => {
                  this.handleChangeOption(index);
                }}
                checked={this.state.selectedOption === index ? true : false}
              />
              <label>{option}</label>
            </div>
          );
        })}
        <button
          id="next"
          disabled={this.state.disableNextBtn}
          onClick={e => this.handleNextQuestion()}
        >
          Next
        </button>
        <div className="error-message">{this.state.errorMessage}</div>
      </div>
    );
  }
}
