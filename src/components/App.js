import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";

import UserInput from "./UserInput";
import CharComponent from "./CharComponent";
import ValidationComponent from "./ValidationComponent";

export class App extends Component {
  state = {
    inputText: ""
  };

  UserInputHandler = e => {
    let inputText = [...this.state.inputText];
    inputText = e.target.value;

    this.setState({ inputText: inputText });
  };

  deleteChar = index => {
    let inputText = [...this.state.inputText];
    inputText.splice(index, 1);
    let joinedInputText = inputText.join("");

    this.setState({ inputText: joinedInputText });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "4rem" }}>
        <UserInput
          onChange={this.UserInputHandler}
          userInput={this.state.inputText.length}
          value={this.state.inputText}
        />
        <ValidationComponent inputLength={this.state.inputText.length} />
        <CharComponent
          userInput={this.state.inputText}
          clickChar={index => this.deleteChar(index)}
        />
      </div>
    );
  }
}

export default App;
