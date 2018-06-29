import React, { Component } from 'react'
import { Grid, Collapse, Col, Button, Image } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false
    }
}
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/about.jpg" className="about-img" circle />
            <h3>About Jana and Stringer</h3>
            <p>It's life. It's interesting. It's fun. This is the time to get out all your flustrations, much better than kicking the dog around the house or taking it out on your spouse. And right there you got an almighty cloud.</p>
            <p>Anyone can paint. You can do anything here. So don't worry about it. Life is too short to be alone, too precious. Share it with a friend. Every highlight needs it's own personal shadow.</p>
            <p>That's what makes life fun. That you can make these decisions. That you can create the world that you want. Of course he's a happy little stone, cause we don't have any other kind. It's so important to do something every day that will make you happy.</p>
        <Button onClick={() => this.setState({ open: !this.state.open })}>Show more...</Button>
          <Collapse in={this.state.open}>
        <p>
You could sit here for weeks with your one hair brush trying to do that - or you could do it with one stroke with an almighty brush. Let your imagination be your guide. I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than most people. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Anything you want to do you can do here. We spend so much of our life looking - but never seeing. Fluff it up a little and hypnotize it. Now let's put some happy little clouds in here.
        </p>
        </Collapse>
          </Col>
        </Grid>
      </div>
    )
  }
}
