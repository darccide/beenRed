const request = require('request');
const server = require('../../src/server');
const base = 'http://localhost:3000/';

describe('routes : static', () => {
	describe('GET /', () => {
		it('should return status code 200 and have Welcome message', done => {
			request.get(`${base}main`, (err, res, body) => {
				expect(res.statusCode).toBe(200);
				expect(body).toContain('Welcome to Bloccit');
				done();
			});
		});
	});
	describe('GET /about', () => {
		it('should return status code 200 and have about information', done => {
			request.get(`${base}about`, (err, res, body) => {
				expect(res.statusCode).toBe(200);
				expect(body).toContain('About Us');
				done();
			});
		});
	});
	describe('GET /marco', () => {
		it('should return status code 200', () => {
			request.get(`${base}marco`, (err, res, body) => {
				expect(res.statusCode).toBe(200);
			});
		});
	});
});
