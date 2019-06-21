const request = require('supertest'); 
const server = require('./server');
const db = require('../data/dbConfig');

// General Get Request Testing

describe('GET ("/") ', () => {
    it('success: status code 200 for get /', async () => {
        let response = await request(server).get('/');
        expect(response.status).toBe(200);
    });

    it('gets the right response type', async () => {
        let response = await request(server).get('/');
        expect(response.type).toBe('application/json');
    });

    it('gets the right message', async () => {
        let response = await request(server).get('/');
        expect(response.body.message).toBe('Hello Thar! Get / is working!');
    });
});

// Get from /api/games

describe('GET ("/api/games") ', () => {
    it('success: status code 200 for get /games', async () => {
        let response = await request(server).get('/api/games');
        expect(response.status).toBe(200);
    });

    it('gets the right response type', async () => {
        let response = await request(server).get('/api/games');
        expect(response.type).toBe('application/json');
    });

    it('gets the list of games', async () => {
        let response = await request(server).get('/api/games');
        expect(response.body.length).toBeGreaterThanOrEqual(0);

    });

    it('gets the array', async () => {
        let response = await request(server).get('/api/games');
        expect(Array.isArray(response.body)).toBeTruthy();

    });
});

describe('POST ("/api/games") ', () => {
    it('success: status code 200 for post /games', async () => {
        const ffx = {
            title: "Final Fantasy X",
            genre: "JRPG",
            releaseYear: 2001
        }

        let response = await request(server).post('/api/games').send(ffx);
        expect(response.status).toBe(200);
    });

    it('failure: status code 422 for post /games', async () => {
        const okami = {
            title: "Okami",
            releaseYear: 2006
        }
        let response = await request(server).post('/api/games').send(okami);
        expect(response.status).toBe(422);
    });

    it('Returns the game that was inserted', async () => {
        const ffxii = {
            title: "Final Fantasy XII",
            genre: "JRPG",
            releaseYear: 2006
        }
        let response = await request(server).post('/api/games').send(ffxii);
        expect(response.body.title).toBe(ffxii.title);
        expect(response.body.genre).toBe(ffxii.genre);


    });

    it('correct content type', async () => {
        const shadowverse = {
            title: "Shadowverse",
            genre: "OCCG",
            releaseYear: 2016
        }
        let response = await request(server).post('/api/games').send(shadowverse);
        expect(response.type).toBe('application/json');

    });
});