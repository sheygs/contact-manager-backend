import { DataSource } from 'typeorm';
import { config } from '../config/env';
import { DataSourceOptions } from 'typeorm';

const {
  DB: { HOST, PG_PORT, PASSWORD, USER, DATABASE },
} = config;

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: HOST,
  port: +PG_PORT,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  // entities: [Contact, User],
  entities: ['build/src/entities/*.js'],
  logging: config.APP.ENV === 'development',
  synchronize: false,
  migrations: ['migrations/**'],
};

export const dataSource = new DataSource(dataSourceOptions);
