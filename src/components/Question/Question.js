import React from "react";
import "../../App.css";
import "./Question.css";

export default class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: -1,
      errorMessage: null,
      answer: ""
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
      answerIndex: this.state.selectedOption,
      question: this.props.question.question,
      answer: this.state.answer
    });
  };

  handleChangeOption = (index, value) => {
    this.setState({
      selectedOption: index,
      errorMessage: null,
      answer: value
    });
  };
  render() {
    const { question } = this.props;
    return (
      <div className="question-main-div">
        {question != null ? (
          <div>
            <h2 className="question">{question.question}</h2>
            <div>
              {question.questionType.options.map((option, index) => {
                return (
                  <div key={index} className="answerOptions">
                    <input
                      type="radio"
                      value={option}
                      className="radioBtn"
                      onChange={e => {
                        this.handleChangeOption(index, e.target.value);
                      }}
                      checked={
                        this.state.selectedOption === index ? true : false
                      }
                    />
                    <label className="radioBtnLabel">{option}</label>
                  </div>
                );
              })}
            </div>
            <button
              id="next"
              disabled={this.state.disableNextBtn}
              onClick={e => this.handleNextQuestion()}
            >
              Next
            </button>
            <div className="error-message">{this.state.errorMessage}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
