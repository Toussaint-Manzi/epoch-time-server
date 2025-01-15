import request from 'supertest';
import WebSocket from 'ws';
import { app } from '../src/app';
import { config } from '../src/config';

describe('Epoch Time Server', () => {
    it('should return epoch time on /time endpoint', async () => {
        const response = await request(app).get('/time');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('epochTime');
        expect(typeof response.body.epochTime).toBe('number');
    });

    it('should emit epoch time via WebSocket', (done) => {
        const ws = new WebSocket(`ws://localhost:${config.PORT}`);
        ws.on('message', (data) => {
            const parsedData = JSON.parse(data.toString());
            expect(parsedData).toHaveProperty('epochTime');
            expect(typeof parsedData.epochTime).toBe('number');
            ws.close();
            done();
        });
    });
});
