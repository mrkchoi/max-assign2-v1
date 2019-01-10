import React from "react";
import { Card, Header } from "semantic-ui-react";
import uuid from "uuid";

export default function CharComponent(props) {
  let charArray = props.userInput.split("");

  let renderChars = charArray.map((el, index) => {
    return (
      <Card
        raised
        header={el}
        onClick={() => props.clickChar(index)}
        key={uuid.v4()}
      />
    );
  });

  return (
    <React.Fragment>
      <Header as="h3">Characters</Header>
      <Card.Group itemsPerRow={10}>{renderChars}</Card.Group>
    </React.Fragment>
  );
}
