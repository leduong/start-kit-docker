/* eslint-disable no-unused-expressions */
const proxyquire = require('proxyquire').noPreserveCache();

const orderCtrlStub = {
  index: 'orderCtrl.index',
  show: 'orderCtrl.show',
  create: 'orderCtrl.create',
  update: 'orderCtrl.update',
  destroy: 'orderCtrl.destroy',
};

const routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy(),
};

// require the index with our stubbed out modules
const orderIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    },
  },
  './order.controller': orderCtrlStub,
});

describe('Order API Router:', () => {
  it('should return an express router instance', () => {
    expect(orderIndex).to.equal(routerStub);
  });

  describe('GET /api/order', () => {
    it('should route to order.controller.index', () => {
      expect(routerStub.get.withArgs('/', 'orderCtrl.index')).to.have.been.calledOnce;
    });
  });

  describe('GET /api/order/:id', () => {
    it('should route to order.controller.show', () => {
      expect(routerStub.get.withArgs('/:id', 'orderCtrl.show')).to.have.been.calledOnce;
    });
  });

  describe('POST /api/order', () => {
    it('should route to order.controller.create', () => {
      expect(routerStub.post.withArgs('/', 'orderCtrl.create')).to.have.been.calledOnce;
    });
  });

  describe('PUT /api/order/:id', () => {
    it('should route to order.controller.update', () => {
      expect(routerStub.put.withArgs('/:id', 'orderCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('PATCH /api/order/:id', () => {
    it('should route to order.controller.update', () => {
      expect(routerStub.patch.withArgs('/:id', 'orderCtrl.update')).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/order/:id', () => {
    it('should route to order.controller.destroy', () => {
      expect(routerStub.delete.withArgs('/:id', 'orderCtrl.destroy')).to.have.been.calledOnce;
    });
  });
});
