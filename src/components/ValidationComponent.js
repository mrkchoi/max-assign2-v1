import React from "react";
import { Segment, Header } from "semantic-ui-react";

export default function ValidationComponent(props) {
  let validationMessage;
  let color;

  if (props.inputLength < 5) {
    validationMessage = "Text too short...";
    color = "red";
  } else {
    validationMessage = "Text long enough!";
    color = "green";
  }

  return (
    <React.Fragment>
      <Header as="h3">Validation message</Header>
      <Segment color={color}>
        <div>{validationMessage}</div>
      </Segment>
    </React.Fragment>
  );
}
