import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const fetchQuestions = () => axios
  .get('https://ghibliapi.herokuapp.com/films')
  .then(({ data }) => {
    // eslint-disable-next-line no-console
    console.log(data);
    return JSON.stringify(data, null, 2);
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error(err);
  });

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
  const [randomUserQuestion, setRandomUserQuestion] = useState('');

  useEffect(() => {
    fetchQuestions().then((randomData) => {
      setRandomUserQuestion(randomData || 'No Question Found.');
    });
  }, []);

  return (
    <>
      <QuestionContainer>
        <QuestionText>
          Q: Cupcake ipsum dolor sit amet pie I love biscuit. Jelly-o toffee I
          love jelly jujubes fruitcake. Chupa chups tootsie roll chocolate cake?
        </QuestionText>
        <button
          type="button"
          onClick={() => {
            fetchQuestions();
          }}
        >
          Fetch Questions
        </button>
        {/* <pre>{randomUserQuestion}</pre> */}
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
