import { config } from 'dotenv';

config();

export const env = {
  PORT: parseInt(process.env.PORT) ?? 3001,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};
