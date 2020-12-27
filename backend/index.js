const express = require('express');

const app = express();

app.use(express.json());

let questions = [
  {
    id: 1,
    author: 'Alain',
    title: '2019-05-30T17:30:31.098Z',
    body: 'Cupcake ipsum dolor. Sit amet dragée. Jelly beans apple pie marshmallow wafer jelly beans soufflé icing bear claw ?',
    creation_date: '2019-05-30T17:30:31.098Z',
    closed_date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 2,
    author: 'Rag',
    title: '2019-05-30T17:30:31.098Z',
    body: 'Biscuit tootsie roll liquorice tart icing cookie muffin. Marzipan powder caramels apple pie jelly-o bonbon topping ?',
    creation_date: '2019-05-30T17:30:31.098Z',
    closed_date: '2019-05-30T17:30:31.098Z',
  },
  {
    id: 3,
    author: 'Ronaldo',
    title: '2019-05-30T17:30:31.098Z',
    body: 'Fruitcake chocolate bar ice cream danish candy jelly beans apple pie bear claw jelly. Caramels powder cheesecake ?',
    creation_date: '2019-05-30T17:30:31.098Z',
    closed_date: '2019-05-30T17:30:31.098Z',
  },
];

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>');
});

app.get('/api/questions', (request, response) => {
  const note = request.body;
  response.json(questions);
});

app.get('/api/questions/:id', (request, response) => {
  const id = Number(request.params.id);
  const note = questions.find((note) => note.id === id);

  if (note) {
    response.json(note);
  } else {
    response.status(404).end();
  }
});

const generateId = () => {
  const maxId = questions.length > 0
    ? Math.max(...questions.map((n) => n.id))
    : 0;
  return maxId + 1;
};

app.post('/api/questions', (request, response) => {
  const { body } = request;

  if (!body.content) {
    return response.status(400).json({
      error: 'content missing',
    });
  }

  const note = {
    content: body.content,
    important: body.important || false,
    date: new Date(),
    id: generateId(),
  };

  questions = questions.concat(note);

  response.json(note);
});

app.delete('/api/questions/:id', (request, response) => {
  const id = Number(request.params.id);
  questions = questions.filter((note) => note.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
