import React, { Component } from "react";
import "./App.css";
import data from "./personality_test";
import Questions from "./Questions/Questions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "hard_fact"
    };
  }
  changeCategory = curCategory => {
    this.setState({
      category: curCategory
    });
  };
  render() {
    return (
      <div className="wrapper">
        {/* left menu Starts here */}
        <div className="left-menu pquiz-col-4">
          <ul className="categories-list">
            {data.categories.map(category => {
              let curCategory = this.state.category;
              return (
                <li
                  className={
                    category === curCategory ? "activeTab" : "inactiveTab"
                  }
                  key={category}
                  onClick={e => this.changeCategory(category)}
                >
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        {/* left menu ends here */}
        {/* Right side content starts here */}
        <div className="right-side-content pquiz-col-8">
          <Questions
            questions={data.questions.filter(
              question => question.category === this.state.category
            )}
          />
        </div>
        {/* Right Side Content Ends here */}
      </div>
    );
  }
}

export default App;
