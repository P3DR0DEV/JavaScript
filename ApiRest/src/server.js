import dotenv from 'dotenv';
import app from './app';

dotenv.config();

app.listen(process.env.PORT, () => {
  console.log(`Running on ${process.env.PORT}`);
});
