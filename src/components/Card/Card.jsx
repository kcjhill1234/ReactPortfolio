import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardExampleCard = () => (
  <Card.Group>
    <Card>
      <Image src="/assets/images/password Gen screen shot.jpeg" wrapped ui={true} />
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

    <Card>
      <Image src="/assets/images//code game screen shot.png"/>
      <Card.Content>
        <Card.Header content="Code Game Quiz" />
        <Card.Meta content="May 9, 2020" />
        <Card.Description content="This is a multiple code game that uses JavaScript" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//music discovery screen shot.png"/>
      <Card.Content>
        <Card.Header content="Music Discovery Project" />
        <Card.Meta content="April 14, 2020" />
        <Card.Description content="First team project that search songs and lyrics for user" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//burgerlogger.png"/>
      <Card.Content>
        <Card.Header content="Burger Logger" />
        <Card.Meta content="August 19, 2020 " />
        <Card.Description content="This is an express app for the user devour customer created burgers" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//boss.png"/>
      <Card.Content>
        <Card.Header content="Home Kitchen Boss Project" />
        <Card.Meta content="June 17, 2020" />
        <Card.Description content=" Second Group Project: This app helps finds recipes with by type, culture, and food restrictions" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//fit 1.png"/>
      <Card.Content>
        <Card.Header content="Workout Tracker" />
        <Card.Meta content="August 25, 2020" />
        <Card.Description content="This app will track exercises and graph trends" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//BEST3.png"/>
      <Card.Content>
        <Card.Header content="Best Workout App Ever! Project" />
        <Card.Meta content="August 12, 2020" />
        <Card.Description content="Group Project 3: React app that lists and creates workouts for the user" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>
    <Card>
      <Image src="/assets/images//budget.png"/>
      <Card.Content>
        <Card.Header content="Transaction Tracker" />
        <Card.Meta content="August 26, 2020" />
        <Card.Description content="Simple Budget/Transaction tracker" />
        </Card.Content>
        <Card.Content extra>University of Utah coding BootCamp</Card.Content>
    </Card>


    
  </Card.Group>
);

export default CardExampleCard;
