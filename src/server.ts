import { createServer } from 'http';
import { Server } from 'ws';
import { config } from './config';
import { app } from './app';
import { getCurrentTime } from './utils';

const server = createServer(app);
const wss = new Server({ server });

wss.on('connection', (ws) => {
    console.log('Client connected');
    
    const intervalId = setInterval(() => {
        ws.send(JSON.stringify({ epochTime: getCurrentTime() }));
    }, 1000);

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
        console.log('Client disconnected');
        clearInterval(intervalId);
    });
});

server.listen(config.PORT, () => {
    console.log(`Server is running on http://localhost:${config.PORT}`);
    console.log(`API Documentation available at http://localhost:${config.PORT}/api-docs`);
});

export { server };
