import { Config } from './types';

export default (): Config => ({
  secretKey: `${process.env.SECRET_KEY}`,
  database: {
    host: `${process.env.DB_HOST}`,
    port: parseInt(`${process.env.DB_PORT}`, 10) || 5432,
    username: `${process.env.DB_USER}`,
    password: `${process.env.DB_PASS}`,
    database: `${process.env.DB_NAME}`,
  },
});
