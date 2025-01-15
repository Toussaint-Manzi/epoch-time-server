# README.md

# Epoch Time Server

This project is a simple Node.js application that provides the current epoch time through a WebSocket server and a REST endpoint.

## Project Structure

```
epoch-time-server
├── src
│   ├── app.ts
│   ├── server.ts
│   ├── config
│   │   └── index.ts
|   |   └── swagger.config.ts
│   └── interface
│   |    └── index.ts
|   └──controller
|         └── time.ts
|   └──middleware
|   └──utils
|      └── index.ts
|   └──routes
|      └── time.ts  
├── tests
│   └── server.test.ts
├── package.json
├── tsconfig.json
├── jest.config.js
├── tsconfig.json
└── README.md
└── yarn.lock
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd epoch-time-server
   ```

2. Install packages:
   ```
   yarn install
   ```

3. Run the application:
   ```
   yarn dev or yarn start
   ```

## Usage

- The WebSocket server emits the current epoch time every second.
- You can access the REST endpoint at `/time` to get the current epoch time on request.

## Testing

To run the tests, use the following command:
```
yarn test
```
