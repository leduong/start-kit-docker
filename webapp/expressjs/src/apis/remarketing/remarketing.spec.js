/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import http from 'http';
import request from 'supertest';
import app from '../../app';

const server = http.createServer(app);

describe('Remarketing API:', () => {
  describe('GET /api/remarketing', () => {
    let Remarketing;

    beforeEach((done) => {
      request(server)
        .get('/api/remarketing')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Remarketing = res.body;
          done();
        });
    });

    it('should respond with JSON array', () => {
      expect(Remarketing).to.be.instanceOf(Array);
    });
  });
});
