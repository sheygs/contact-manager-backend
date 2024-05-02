import { createApp } from '../src/app';
import { startServer } from '../src/server';
import request from 'supertest';

const app = startServer(createApp());

describe('App Health', () => {
  test('should display "okay ✅"', async () => {
    const response = await request(app).get('/').expect(200);
    expect(response.body.code).toEqual(200);
    expect(response.body.status).toBe('success');
    expect(response.body.message).toEqual('okay ✅');
  });

  test('should return "Not Found" for invalid routes', async () => {
    const response = await request(app).get('/me').expect(404);
    expect(response.body.error.code).toEqual(404);
    expect(response.body.error.status).toBe('failure');
    expect(response.body.error.message).toEqual('Not Found');
  });
});

afterAll(() => {
  app.close();
});
