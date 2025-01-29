import dotenv from 'dotenv';
// Load environment variables from .env file
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    WS_URL: `ws://localhost:${process.env.PORT || 3000}`,
};
