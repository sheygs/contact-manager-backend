import { DataSource } from 'typeorm';
import { config } from './env';
// import { Contact, User } from '../entities';

const {
  DB: { HOST, PG_PORT, PASSWORD, USER, DATABASE },
} = config;

export const dataSource = new DataSource({
  type: 'postgres',
  host: HOST,
  port: +PG_PORT,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  // entities: [Contact, User],
  entities: ['build/src/entities/*.js'],
  logging: config.APP.ENV === 'development',
  synchronize: true,
});
