import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

export const config = {
    PORT: process.env.PORT || 6000,
    WS_URL: 'ws://localhost:3000',
};
