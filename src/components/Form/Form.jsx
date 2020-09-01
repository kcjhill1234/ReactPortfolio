import React from "react";
import { Button, Form, Message } from "semantic-ui-react";

const FormExampleSuccess = () => (
  <Form success>
    <Form.Input label="Email" placeholder="email@email.com" />
    <Message
      success=""
      header=""
      content=""
    />
    <Button>Submit</Button>
  </Form>
);

export default FormExampleSuccess;
