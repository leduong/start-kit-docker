/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import http from 'http';
import request from 'supertest';
import app from '../../app';

const server = http.createServer(app);
let newOrder;
const UUID = '2a9bef60-22cb-11eb-98d6-8152bccebf34';
const UUID2 = '2a9bef60-22cb-9999-9999-8152bccebf34';
const DATA = JSON.stringify({
  name: 'New Order',
  branch: 'OEM',
  color: 'blue',
  price: '10.11',
});
const DATA2 = JSON.stringify({
  name: 'Update Order',
  branch: 'OEM',
  color: 'blue',
  price: '10.11',
});

describe('Order API:', () => {
  describe('GET /api/order', () => {
    let Order;

    beforeEach((done) => {
      request(server)
        .get('/api/order')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Order = res.body;
          done();
        });
    });

    it('should respond with JSON array', () => {
      expect(Order).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/order', () => {
    beforeEach((done) => {
      request(server)
        .post('/api/order')
        .send({
          product_id: UUID,
          data: DATA,
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOrder = res.body;
          done();
        });
    });

    it('should respond with the newly created Order', () => {
      expect(newOrder.product_id).to.equal(UUID);
      expect(newOrder.data).to.equal(DATA);
    });
  });

  describe('GET /api/order/:id', () => {
    let Order;

    beforeEach((done) => {
      request(server)
        .get(`/api/order/${newOrder.id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Order = res.body;
          done();
        });
    });

    afterEach(() => {
      Order = {};
    });

    it('should respond with the requested Order', () => {
      expect(Order.product_id).to.equal(UUID);
      expect(Order.data).to.equal(DATA);
    });
  });

  describe('PUT /api/order/:id', () => {
    let updatedOrder;

    beforeEach((done) => {
      request(server)
        .put(`/api/order/${newOrder.id}`)
        .send({
          product_id: UUID2,
          data: DATA2,
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          updatedOrder = res.body;
          done();
        });
    });

    afterEach(() => {
      updatedOrder = {};
    });

    it('should respond with the updated Order', () => {
      expect(updatedOrder.product_id).to.equal(UUID2);
      expect(updatedOrder.data).to.equal(DATA2);
    });
  });

  describe('DELETE /api/order/:id', () => {
    it('should respond with 204 on successful removal', (done) => {
      request(server)
        .delete(`/api/order/${newOrder.id}`)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Order does not exist', (done) => {
      request(server)
        .delete(`/api/order/${newOrder.id}`)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });
  });
});
