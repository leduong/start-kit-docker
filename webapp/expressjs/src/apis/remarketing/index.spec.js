/* eslint-disable no-unused-expressions */
const proxyquire = require('proxyquire').noPreserveCache();

const remarketingCtrlStub = {
  index: 'remarketingCtrl.index',
  show: 'remarketingCtrl.show',
  destroy: 'remarketingCtrl.destroy',
};

const routerStub = {
  get: sinon.spy(),
  delete: sinon.spy(),
};

// require the index with our stubbed out modules
const remarketingIndex = proxyquire('./index.js', {
  express: {
    Router() {
      return routerStub;
    },
  },
  './remarketing.controller': remarketingCtrlStub,
});

describe('remarketing API Router:', () => {
  it('should return an express router instance', () => {
    expect(remarketingIndex).to.equal(routerStub);
  });

  describe('GET /api/remarketing', () => {
    it('should route to remarketing.controller.index', () => {
      expect(routerStub.get.withArgs('/', 'remarketingCtrl.index')).to.have.been.calledOnce;
    });
  });

  describe('GET /api/remarketing/:id', () => {
    it('should route to remarketing.controller.show', () => {
      expect(routerStub.get.withArgs('/:id', 'remarketingCtrl.show')).to.have.been.calledOnce;
    });
  });

  describe('DELETE /api/remarketing/:id', () => {
    it('should route to remarketing.controller.destroy', () => {
      expect(routerStub.delete.withArgs('/:id', 'remarketingCtrl.destroy')).to.have.been.calledOnce;
    });
  });
});
