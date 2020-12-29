const express = require('express');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let questions = [
  {
    id: 1,
    author: 'Alain',
    content: 'Cupcake ipsum dolor. Sit amet dragée. Jelly beans apple pie marshmallow wafer jelly beans soufflé icing bear claw ?',
    creation_date: 'Tuesday, December 29th 2020, 7:34:19 pm',
    closed_date: '2019-05-30T17:30:31.098Z',
    tags: ['Javascript', 'Python', 'Java'],
  },
  {
    id: 2,
    author: 'Rag',
    content: 'Biscuit tootsie roll liquorice tart icing cookie muffin. Marzipan powder caramels apple pie jelly-o bonbon topping ?',
    creation_date: 'Tuesday, December 29th 2020, 7:34:19 pm',
    closed_date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 3,
    author: 'Ronaldo',
    content: 'Fruitcake chocolate bar ice cream danish candy jelly beans apple pie bear claw jelly. Caramels powder cheesecake ?',
    creation_date: 'Tuesday, December 29th 2020, 7:34:19 pm',
    closed_date: '2019-05-30T17:30:31.098Z',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>zetips backend api</h1>');
});

app.get('/api/questions', (request, response) => {
  const question = request.body;
  response.json(questions);
});

app.get('/api/questions/:id', (request, response) => {
  const id = Number(request.params.id);
  const question = questions.find((question) => question.id === id);

  if (question) {
    response.json(question);
  } else {
    response.status(404).end();
  }
});

app.post('/api/questions', (request, response) => {
  const { body } = request;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    });
  }

  const question = {
    id: uuidv4(),
    author: body.author,
    content: body.content,
    creation_date: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
  };

  questions = questions.concat(question);

  return response.json(question);
});

app.delete('/api/questions/:id', (request, response) => {
  const id = Number(request.params.id);
  questions = questions.filter((question) => question.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
