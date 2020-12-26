import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 10px auto;
  padding: 15px;
  background-color: gainsboro;
`;

const QuestionText = styled.h3`
  color: #000;
`;

export default function Question() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://ghibliapi.herokuapp.com/films')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return (
      <div>
        Error:
        {error.message}
      </div>
    );
  } if (!isLoaded) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <QuestionContainer>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <QuestionText>
                Q:
                {' '}
                {item.title}
              </QuestionText>
            </li>
          ))}
        </ul>
        <ul>
          <div>Topic</div>
          <li>#JavaScript</li>
          <li>#Python</li>
          <li>#CSS</li>
          <li>#React</li>
        </ul>
      </QuestionContainer>
    </>
  );
}
