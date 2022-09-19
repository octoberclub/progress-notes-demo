import { rest } from 'msw';

const notes = [
    {
        "id": 1,
        "createdAt": "2022-09-19T10:07:58.680Z",
        "author": "Michelle",
        "authorType": "Clinician",
        "text": "We ran out of time to successfully complete the first appointment so have booked in a follow up tomorrow afternoon."
    },
    {
        "id": 2,
        "createdAt": "2022-09-19T17:25:39.295Z",
        "author": "System",
        "authorType": "System",
        "text": "A file was uploaded on 19th September 2022 for viewing later"
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
      ctx.json({ id: 3 }),
    );
  }),
  rest.delete('http://localhost/notes/1', (req, res, ctx) => {
    return res(
      ctx.status(200),      
    );
  }),
];
