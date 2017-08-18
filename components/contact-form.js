import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

const formControlStyle = {
  borderColor: '#FB661E',
  margin: '10px 0',
  height: '45px',
};

const textAreaStyle = {
  ...formControlStyle,
  height: '100px',
  resize: 'vertical',
}

const buttonStyle = {
  color: '#fff',
  background: '#FB661E',
  width: '100%',
  height: '50px',
};

const FieldLabel = ({ children }) => (
  <ControlLabel className="field-label" style={{color: '#666'}}>
    {children} <span className="asterisk" style={{color: '#FB661E'}}>*</span>
  </ControlLabel>
);

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };
  
  render() {
    const { name, email, message } = this.state;
    return (
      <form 
        validationState="error"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <FormGroup>
          <FieldLabel>Name</FieldLabel>
          <FormControl style={formControlStyle}
            type="text"
            value={name}
            onChange={this.handleNameChange.bind(this)}
          />
          <FieldLabel>Email</FieldLabel>
          <FormControl style={formControlStyle}
            type="text"
            value={email}
            onChange={this.handleEmailChange.bind(this)}
          />
          <FieldLabel>Message</FieldLabel>
          <FormControl style={textAreaStyle}
            componentClass="textarea" 
            value={message}
            onChange={this.handleMessageChange.bind(this)} 
          />
          <Button type="submit" style={buttonStyle}>
            Submit
          </Button>
        </FormGroup>
      </form>
    );  
  }

  handleNameChange(e) {
    const { value } = e.target;
    this.setState({
      name: value
    });
    console.log(`Name updated to: ${value}`);
  }

  handleEmailChange(e) {
    const { value } = e.target;
    this.setState({
      email: value
    });
    console.log(`Email updated to: ${value}`);
  }

  handleMessageChange(e) {
    const { value } = e.target;
    this.setState({
      message: value
    });
    console.log(`Message updated to: ${value}}`);
  }

  handleSubmit(e) {
    e.preventDefault();    
    console.dir(this.state);
    console.dir(e);
    this.setState({
      email: '',
      name: '',
      message: '',
    });
  }
}

export default ContactForm;