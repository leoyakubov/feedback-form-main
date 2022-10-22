import { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Textarea, Title } from '../StyledFormComponents';
//require('dotenv').config({ path: './.env' });

const FormSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  

  //const API_URI = process.env.API_URI;

  const axiosInstance = axios.create({
    baseURL: 'https://feedback-form-demo.herokuapp.com',
    crossDomain: true,
    });

  const submitUserData = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/store-data', {
        name: name,
        email: email,
        message: message
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form onSubmit={submitUserData}>
      <Title>Reach out to us!</Title>
      <Input
        type="text"
        placeholder="Your name*"
        onChange={(e) => setName(e.target.value)}
        id="name"
        value={name}
      />
      <Input
        type="text"
        placeholder="Your e-mail*"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        value={email}
      />
      <Textarea
        type="text"
        placeholder="Your message*"
        onChange={(e) => setMessage(e.target.value)}
        id="message"
        value={message}
      />
      <Button type="submit">Send message</Button>
    </Form>
  );
};

export default FormSection;
