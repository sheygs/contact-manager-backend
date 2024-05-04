import { createApp } from '../src/app';
import { startServer } from '../src/server';
import request from 'supertest';

const app = startServer(createApp());

const token: string = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1NmQ1MzBiNC04ZDQ2LTQyZmEtYjBjYi1lNGYwNDY2ODg3ODIiLCJlbWFpbCI6Im1hcmsua2FkaXJpQGdtYWlsLmNvbSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE0Nzg1ODg3LCJleHAiOjE3MjI1NjE4ODd9.fwHA0dR-OteDqGyD_6EegfbWh02YVIq9koz3bWtZwEI`;
let first_name: string = 'Mark';
let last_name: string = 'Kadiri';
let phone_number: string = '08034563763';
const contact_id: string = '71e3de1a-a24c-46a9-a6e0-37c98a5ab1b2';

describe('Contact', () => {
  it('should create a contact', async () => {
    const res = await request(app)
      .post('/api/v1/contacts')
      .set({ Authorization: `Bearer ${token}` })
      .send({
        first_name,
        last_name,
        phone_number,
      });

    expect(res.body.code).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toEqual('Contact created ✅');
  });

  it('should get a contact for a given user', async () => {
    const res = await request(app)
      .get(`/api/v1/contacts/${contact_id}`)
      .set({ Authorization: `Bearer ${token}` });

    expect(res.body.code).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toEqual('Contact retrieved ✅');
  });

  it('should update a contact for a given user', async () => {
    const res = await request(app)
      .patch(`/api/v1/contacts/${contact_id}`)
      .set({ Authorization: `Bearer ${token}` })
      .send({
        first_name: 'Mvck',
        phone_number: '08034563700',
      });
    expect(res.body.code).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toEqual('Contact updated ✅');
  });
});

afterAll(() => {
  app.close();
});
