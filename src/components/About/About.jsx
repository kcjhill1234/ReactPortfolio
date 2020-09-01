import React from "react";
import { Segment } from "semantic-ui-react";
import Detail from "../Detail/Detail";
import PImage from "../PImage/PImage";
class About extends React.Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.quotes = [
      '"Never do tomorrow what you can do today. Procrastination is the thief of time." – Charles Dickens',
      "“There are far, far better things ahead than any we leave behind.”– CS Lewis",
    ];
    this.state = { quote: "" };
  }
  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({ quote: this.getRandomQuote(this.quotes) });
    }, 3000);
  };
  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  getRandomQuote = (array) => {
    return array[Math.ceil(Math.random() * array.length - 1)];
  };
  render() {
    return (
      <Segment className="about">
        <div>
          <PImage />
        </div>
        <div>
          <h2>Inspiration</h2>
          <p>{this.state.quote}</p>
        </div>
        <div>
          <h1>About Page</h1>
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
