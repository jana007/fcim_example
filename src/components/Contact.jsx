import React, { Component } from 'react'
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import './Contact.css';
export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  global.emailBool = false;
  global.commentBool = false;

    this.state = {
      value: ''
    };
  }
  

  getValidationEmailState() {
    global.emailBool = false;
    const email = this.state.value;
    const length = this.state.value.length;
    if (email.includes('@') && email.includes('.')) {
      global.emailBool = true;
      return 'success';
    }
    else if (email.includes('@') || email.includes('.')) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  
  getValidationCommentState() {
    global.commentBool = false;
    const length = this.state.value.length;
    if (length > 20) {
      global.commentBool = true;
      return 'success';
    }
    else if (length > 15) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(event) {
    return alert('Thank you for your submission')
  }

  render() {
    return (
 <Form onSubmit={this.handleSubmit}>
         <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationEmailState()}
        >
          <ControlLabel>Email Address</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter contact email"
            onChange={this.handleChange}
          />
  </FormGroup>
    <FormGroup controlId="formControlsTextarea">
      <ControlLabel>Comments</ControlLabel>
      <FormControl componentClass="textarea" placeholder="Comments" />
    </FormGroup>
<Button onClick={this.props.onSubmit} type ="submit">Submit</Button>
</Form>
    );
  }
}

//render(<Contact />);
