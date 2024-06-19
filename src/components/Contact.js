import React from 'react';
import { Button, ContactContainer, Form, Input, TextArea } from './styles';

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contact</h2>
      <Form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
        <TextArea placeholder="Message"></TextArea>
        <Button type="submit">Send</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
