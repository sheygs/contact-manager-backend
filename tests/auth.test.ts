import { createApp } from '../src/app';
import { startServer } from '../src/server';
import request from 'supertest';
import randomstring from 'randomstring';

const app = startServer(createApp());

const username = 'sheygs12';
const email = `${randomstring.generate({ length: 7 })}@gmail.com`;
const password = `${randomstring.generate({ length: 8, charset: 'alphanumeric' })}`;
let jwt: string = '';

describe('Sign up', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/v1/auth/signup').send({
      username,
      email,
      password,
    });

    expect(res.body.code).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toEqual('User Registered ✅');
  });

  it('should not register a user when email is missing', async () => {
    const res = await request(app).post('/api/v1/auth/signup').send({
      username,
      password: 'testPass',
    });
    expect(res.body.code).toBe(400);
    expect(res.body.status).toBe('failure');
    expect(res.body.error).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        message: expect.any(String),
      }),
    );
  });

  it('should not register an already existing user', async () => {
    const res = await request(app).post('/api/v1/auth/signup').send({
      username,
      email,
      password: 'testPass.',
    });
    expect(res.body.code).toBe(409);
    expect(res.body.status).toBe('failure');
    expect(res.body.error).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        message: expect.any(String),
      }),
    );
  });
});

describe('User Login', () => {
  it('should log in with valid credentials', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({ email, password });

    expect(res.body.code).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.message).toBe('User logged in ✅');
    expect(res.body.data).toBeDefined();
    jwt = res.body.data.token;
    expect(jwt).toBeDefined();
    console.log(jwt);
  });

  it('should fail with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({ email, password: 'testP' });

    expect(res.body.code).toBe(400);
    expect(res.body.status).toBe('failure');
    expect(res.body.error).toBeDefined();
  });

  it('should fail with missing credentials', async () => {
    const res = await request(app).post('/api/v1/auth/login').send({ email });
    expect(res.body.code).toBe(422);
    expect(res.body.status).toBe('failure');
    expect(res.body.error).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        name: expect.any(String),
        message: expect.any(String),
      }),
    );
  });
});

afterAll(() => {
  app.close();
});
