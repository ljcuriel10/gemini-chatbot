import React from 'react';
import { useState } from 'react';
import './App.css';
import Input from './Components/Input';
import Messages from './Components/Messages';
import Gemini from './Gemini';
import MessagesWrapper from './Components/MessagesWrapper';
import Clear from './Components/Clear';
import Section from './Components/Section';



function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  
  const handleClick = async () => {
    const prompt = {
      role: 'user',
      parts: [{text: input}]
    }
    setMessages([...messages, prompt]);
    const response = await Gemini.run(messages, input)
    setMessages((messages)=> [...messages, {role: 'model', parts:[{text: response}] }] )
    setInput('')
  }

  return (
    <div className="App">
      <Section title="Chat Messages" >
      <MessagesWrapper>
      { messages.map((item, index) => <Messages key={index} role={item.role} text={item.parts[0].text} />)}
      </MessagesWrapper>
      <Input text={input} setInput={setInput} onClick={handleClick} />
      </Section>
      <Section title={'History'}>
        <MessagesWrapper />
        <Clear setMessages={setMessages} />
      </Section>
    </div>
  );
}

export default App;
