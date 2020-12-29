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

const QuestionItem = styled.li`
  margin: 20px auto;
  padding: 10px;
  border: 1px solid green;
  border-radius: 20px;
  background: steelblue;
`;

export default function Question() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/questions', { mode: 'cors' })
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
      )
      // eslint-disable-next-line no-shadow
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
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
            <QuestionItem key={item.id}>
              <QuestionText>
                Q:
                {' '}
                {item.content}
                <br />
                {item.author}
                <br />
                {item.creation_date}
              </QuestionText>
            </QuestionItem>
          ))}
        </ul>
      </QuestionContainer>
    </>
  );
}
