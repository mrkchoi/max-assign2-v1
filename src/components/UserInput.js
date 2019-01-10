import React from "react";
import { Form, TextArea, Segment, Header } from "semantic-ui-react";

export default function UserInput(props) {
  return (
    <div>
      <Header as="h3">User input</Header>
      <Form>
        <Form.Field
          control={TextArea}
          placeholder="Enter your text..."
          onChange={props.onChange}
          value={props.value}
        />
      </Form>
      <Header as="h3">User output</Header>
      <Segment>
        <div>
          <p>{props.userInput}</p>
        </div>
      </Segment>
    </div>
  );
}
