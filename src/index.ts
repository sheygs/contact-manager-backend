import express, { Application, Request, Response } from 'express';
import 'dotenv/config';

const app: Application = express();

const port: string | number = process.env.PORT ?? 3000;

app.get('/', (_: Request, res: Response): void => {
  res.status(200).json({
    code: 200,
    status: 'success',
    message: 'okay',
    data: {},
  });
});

app.listen(port, () => {
  console.log(`app running on http://localhost:${port} 🚀`);
});
