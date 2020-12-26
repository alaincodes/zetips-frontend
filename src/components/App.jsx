import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Question from './Question';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

function App() {
  return (
    <div>
      <Header />
      <header>
        <Title>
          fuckoff
        </Title>
        <Question />
        <Button primary>Push</Button>
        <Button>Push</Button>
        <TomatoButton>Push</TomatoButton>
      </header>
    </div>
  );
}

export default App;
