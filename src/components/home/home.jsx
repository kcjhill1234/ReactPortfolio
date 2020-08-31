import React from "react";
import {Segment} from "semantic-ui-react";

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Segment>
                <hi>Hello Peeps!!</hi>
            </Segment>
        )

    }
}
export default Home;