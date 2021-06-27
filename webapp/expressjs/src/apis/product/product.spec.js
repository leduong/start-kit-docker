/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
import http from 'http';
import request from 'supertest';
import app from '../../app';

const server = http.createServer(app);
let newProduct;

describe('Product API:', () => {
  describe('GET /api/product', () => {
    let Products;

    beforeEach((done) => {
      request(server)
        .get('/api/product')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Products = res.body;
          done();
        });
    });

    it('should respond with JSON array', () => {
      expect(Products).to.be.instanceOf(Array);
    });
  });

  describe('POST /api/product', () => {
    beforeEach((done) => {
      request(server)
        .post('/api/product')
        .send({
          name: 'New Product',
          branch: 'OEM',
          color: 'blue',
          price: '10.11',
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newProduct = res.body;
          done();
        });
    });

    it('should respond with the newly created Product', () => {
      expect(newProduct.name).to.equal('New Product');
      expect(newProduct.branch).to.equal('OEM');
      expect(newProduct.color).to.equal('blue');
      expect(newProduct.price).to.equal('10.11');
    });
  });

  describe('GET /api/product/:id', () => {
    let Product;

    beforeEach((done) => {
      request(server)
        .get(`/api/product/${newProduct.id}`)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          Product = res.body;
          done();
        });
    });

    afterEach(() => {
      Product = {};
    });

    it('should respond with the requested Product', () => {
      expect(Product.name).to.equal('New Product');
      expect(Product.branch).to.equal('OEM');
      expect(Product.color).to.equal('blue');
    });
  });

  describe('PUT /api/product/:id', () => {
    let updatedProduct;

    beforeEach((done) => {
      request(server)
        .put(`/api/product/${newProduct.id}`)
        .send({
          name: 'Updated Product',
          color: 'green',
          branch: 'MEO',
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          updatedProduct = res.body;
          done();
        });
    });

    afterEach(() => {
      updatedProduct = {};
    });

    it('should respond with the updated Product', () => {
      expect(updatedProduct.name).to.equal('Updated Product');
      expect(updatedProduct.branch).to.equal('MEO');
      expect(updatedProduct.color).to.equal('green');
    });
  });

  describe('DELETE /api/product/:id', () => {
    it('should respond with 204 on successful removal', (done) => {
      request(server)
        .delete(`/api/product/${newProduct.id}`)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when Product does not exist', (done) => {
      request(server)
        .delete(`/api/product/${newProduct.id}`)
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
