import React from "react";
import { Segment } from "semantic-ui-react";
import Card from "../Card/Card";

export default function Profile() {
  return (
    <Segment className="profile">
      <h1>Profile Page</h1>
      <Card />
    </Segment>
  );
}
