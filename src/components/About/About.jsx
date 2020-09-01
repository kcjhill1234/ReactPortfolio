import React from "react";
import { Segment } from "semantic-ui-react";
import Detail from "../Detail/Detail";
import PImage from '../PImage/PImage';
class About extends React.Component {

  render() {
    return (
      <Segment className="about">
        <div>
          <PImage/>
        </div>
        <div>
          <h1>About Components</h1>
        </div>
        <br />
        <br />
        <div>
          <Detail />
        </div>
      </Segment>
    );
  }
}
export default About;
