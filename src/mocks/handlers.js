import { rest } from 'msw';

const notes = [
    {
        "id": 1,
        "createdAt": "2022-09-19T10:07:58.680Z",
        "author": "Michelle",
        "authorType": "Clinician",
        "text": "We ran out of time to successfully complete the first appointment so have booked in a follow up tomorrow afternoon."
    }
];

export const handlers = [
  rest.get('http://localhost/notes/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(notes),
    );
  }),
  rest.post('http://localhost/notes/', (req, res, ctx) => {
    return res(
      ctx.status(201),
      ctx.json({ id: 2 }),
    );
  }),
  rest.delete('http://localhost/notes/1', (req, res, ctx) => {
    return res(
      ctx.status(200),      
    );
  }),
];
