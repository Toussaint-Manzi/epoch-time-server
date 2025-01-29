import swaggerJsdoc from 'swagger-jsdoc';
import { config } from './index';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Epoch Time Server API',
    version: '1.0.0',
    description: 'Real-time epoch time service with REST and WebSocket support',
    contact: {
      name: 'API Support',
      email: 'tmanzimu@gmail.com'
    }
  },
  servers: [
    {
      url: `http://localhost:${config.PORT}`,
      description: 'Development server'
    }
  ],
  tags: [
    {
      name: 'Time',
      description: 'Endpoints for retrieving epoch time'
    }
  ],
  paths: {
    '/time': {
      get: {
        tags: ['Time'],
        summary: 'Get Epoch Time',
        description: 'Returns the current epoch time',
        responses: {
          200: {
            description: 'Successful response',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    epochTime: {
                      type: 'number',
                      example: 1611764253000
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts', './src/app.ts']
};

export const swaggerSpec = swaggerJsdoc(options);
