import React from "react";
import "../../App.css";
import "./Question.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { personalityTestActionCreators } from "../../store/PersonalityTestStore/actions";

class _Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: -1,
      errorMessage: null,
      answer: "",
      rangeSelector: null,
      showConditionalQuestion: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({ errorMessage: null, selectedOption: -1 });
    }
  }

  // submitting the answers to the backend

  handleSubmit = () => {
    if (this.state.selectedOption !== -1) {
      this.props.increaseQuestionNumber();
      this.props.answers.push({
        questionId: this.props.question._id,
        answerIndex: this.state.selectedOption,
        question: this.props.question.question,
        answer: [this.state.answer, this.state.rangeSelector]
      });
      this.props.updateAnswers(this.props.answers);
    } else {
      // checking whether user selected atleast one option
      this.setState({
        errorMessage: "you must answer this question"
      });
    }
  };

  // To display the next question

  handleNextQuestion = () => {
    if (this.state.selectedOption !== -1) {
      this.setState({
        selectedOption: -1,
        errorMessage: null,
        showConditionalQuestion: false,
        rangeSelector: null
      });
      this.props.increaseQuestionNumber();
    } else {
      // checking whether user selected atleast one option
      this.setState({
        errorMessage: "you must answer this question"
      });
    }
    this.props.updateAnswer({
      questionId: this.props.question._id,
      answerIndex: this.state.selectedOption,
      question: this.props.question.question,
      answer: [this.state.answer, this.state.rangeSelector]
    });
  };

  // suppose if a question is conditional question then need to check the
  // selected answer from the user matches with the predicate if it matches
  // displaying the predicate question

  handleChangeOption = (index, value) => {
    if (this.props.question.questionType.type === "single_choice_conditional") {
      if (
        value ===
        this.props.question.questionType.condition.predicate.exactEquals[1]
      ) {
        this.setState({
          showConditionalQuestion: this.props.question.questionType.condition
            .if_positive,
          rangeSelector: this.props.question.questionType.condition.if_positive
            .question_type.range.from
        });
      }
    }
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
            <div>
              <h2 className="question">{question.question}</h2>
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
              {this.state.showConditionalQuestion ? (
                <>
                  <h2 className="question">
                    {this.state.showConditionalQuestion.question}
                  </h2>
                  {this.state.showConditionalQuestion.question_type.type ===
                  "number_range" ? (
                    <>
                      <label>
                        {
                          this.state.showConditionalQuestion.question_type.range
                            .from
                        }
                      </label>
                      <input
                        type="range"
                        min={
                          this.state.showConditionalQuestion.question_type.range
                            .from
                        }
                        max={
                          this.state.showConditionalQuestion.question_type.range
                            .to
                        }
                        defaultValue={
                          this.state.showConditionalQuestion.question_type.range
                            .from
                        }
                        onChange={e => {
                          this.setState({ rangeSelector: e.target.value });
                        }}
                      />
                      <label>
                        {
                          this.state.showConditionalQuestion.question_type.range
                            .to
                        }
                      </label>
                      <div>
                        <label>{this.state.rangeSelector}</label>
                      </div>
                    </>
                  ) : null}
                </>
              ) : null}
              {this.props.submit ? (
                <button
                  id="next"
                  disabled={this.state.disableNextBtn}
                  onClick={e => this.handleSubmit()}
                >
                  SUBMIT
                </button>
              ) : (
                <button
                  id="next"
                  disabled={this.state.disableNextBtn}
                  onClick={e => this.handleNextQuestion()}
                >
                  NEXT
                </button>
              )}
            </div>

            <div className="error-message">{this.state.errorMessage}</div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { answers } = state;
  return {
    answers
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...personalityTestActionCreators }, dispatch);

export const Question = connect(
  mapStateToProps,
  mapDispatchToProps
)(_Question);
