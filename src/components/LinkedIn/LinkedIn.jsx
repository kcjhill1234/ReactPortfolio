import React from "react";
import { Card, Image } from "semantic-ui-react";


export default function LinkedIn() {
return (
  <div>
    
    <Card.Group className="LinkedIn">
    <Card>
      <Image
        src="/assets/images/password Gen screen shot.jpeg"
        wrapped
        bordered
        ui={true}
        as="a"
        href="https://kcjhill1234.github.io/PasswordGenerator/"
        target="_blank"
      />
      <Card.Content>
        <Card.Header>Password Generator</Card.Header>
        <Card.Meta>
          <span className="date">April 13, 2020</span>
        </Card.Meta>
        <Card.Description>
          This is a password generator that will create a random password.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
        </Card.Group>

  </div>
);
}