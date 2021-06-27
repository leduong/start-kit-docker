/* eslint-disable no-unused-expressions */
const proxyquire = require('proxyquire').noPreserveCache();

const productCtrlStub = {
  index: 'productCtrl.index',
  show: 'productCtrl.show',
  create: 'productCtrl.create',
  update: 'productCtrl.update',
  destroy: 'productCtrl.destroy',
};

const routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy(),
};

// require the index with our stubbed out modules
const productIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    },
  },
  './product.controller': productCtrlStub,
});

describe('Products API Router:', () => {
  it('should return an express router instance', () => {
    expect(productIndex).to.equal(routerStub);
  });

  describe('GET /api/product', () => {
    it('should route to product.controller.index', () => {
      expect(routerStub.get.withArgs('/', 'productCtrl.index')).to.have.been.calledOnce;
    });
  });

  describe('GET /api/product/:id', () => {
    it('should route to product.controller.show', () => {
      expect(routerStub.get.withArgs('/:id', 'productCtrl.show')).to.have.been.calledOnce;
    });
  });

  describe('POST /api/product', () => {
    it('should route to product.controller.create', () => {
      expect(routerStub.post.withArgs('/', 'productCtrl.create')).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/product/:id', () => {
    it('should route to product.controller.update', () => {
      expect(routerStub.put.withArgs('/:id', 'productCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/product/:id', () => {
    it('should route to product.controller.update', () => {
      expect(routerStub.patch.withArgs('/:id', 'productCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/product/:id', () => {
    it('should route to product.controller.destroy', () => {
      expect(routerStub.delete.withArgs('/:id', 'productCtrl.destroy')).to.have.been.calledOnce;
    });
  });
});
