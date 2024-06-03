import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from '../config';

const {
  DB: { HOST, PG_PORT, PASSWORD, USER, DATABASE },
  APP: { ENV },
} = config;

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: HOST,
  port: +PG_PORT,
  username: USER,
  password: PASSWORD,
  database: DATABASE,
  entities: ['build/entities/*.js'],
  logging: ENV === 'development',
  synchronize: ENV !== 'production',
  migrations: ['migrations/**'],
};

export const dataSource = new DataSource(dataSourceOptions);
