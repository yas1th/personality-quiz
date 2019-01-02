import React from "react";
import "../../App.css";
import "./Question.css";

// const QuestionHTML = props => {
//   const { question } = props;
//   return (
//     <div>
//       <h2 className="question">{question.question}</h2>
//       <div>
//         {question.questionType.options.map((option, index) => {
//           return (
//             <div key={index} className="answerOptions">
//               <input
//                 type="radio"
//                 value={option}
//                 className="radioBtn"
//                 onChange={e => {
//                   this.handleChangeOption(index, e.target.value);
//                 }}
//                 checked={this.state.selectedOption === index ? true : false}
//               />
//               <label className="radioBtnLabel">{option}</label>
//             </div>
//           );
//         })}
//       </div>
//       <button
//         id="next"
//         disabled={this.state.disableNextBtn}
//         onClick={e => this.handleNextQuestion()}
//       >
//         Next
//       </button>
//       <div className="error-message">{this.state.errorMessage}</div>{" "}
//     </div>
//   );
// };

export default class Question extends React.Component {
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

  handleChangeOption = (index, value) => {
    if (this.props.question.questionType.type === "single_choice_conditional") {
      console.log("cond", value);
      if (
        value ===
        this.props.question.questionType.condition.predicate.exactEquals[1]
      ) {
        this.setState({
          showConditionalQuestion: this.props.question.questionType.condition
            .if_positive
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
    console.log(this.state.showConditionalQuestion);
    const { question } = this.props;
    return (
      <div className="question-main-div">
        {question != null ? (
          <div>
            {/* <QuestionHTML question={question} /> */}

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
              <button
                id="next"
                disabled={this.state.disableNextBtn}
                onClick={e => this.handleNextQuestion()}
              >
                Next
              </button>
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
