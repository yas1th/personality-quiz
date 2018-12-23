import React from "react";
import "../../App.css";

export default class RadioButtonOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: ""
    };
  }
  componentWillReceiveProps = nextProps => {
    if (this.props !== nextProps) {
      this.setState({ selectedOption: "" });
    }
  };
  handleChangeOption = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };
  render() {
    const { question } = this.props;
    return (
      <div>
        {question.question_type.options.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                value={option}
                onChange={e => {
                  this.handleChangeOption(e);
                }}
                checked={this.state.selectedOption === option ? true : false}
              />
              <label>{option}</label>
            </div>
          );
        })}
      </div>
    );
  }
}
