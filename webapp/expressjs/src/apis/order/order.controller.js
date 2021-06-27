/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/order              ->  index
 * POST    /api/order              ->  create
 * GET     /api/order/:id          ->  show
 * PUT     /api/order/:id          ->  update
 * DELETE  /api/order/:id          ->  destroy
 */

const models = require('../../models');

const { Order } = models;

function handleError(res, statusCode = 500) {
  return (err) => {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode = 200) {
  return (entity) => {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return (entity) => {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return (entity) => entity.update(updates).then((updated) => updated);
}

function removeEntity(res) {
  return (entity) => {
    if (entity) {
      return entity.destroy().then(() => {
        res.status(204).end();
      });
    }
  };
}

// Gets a list of Orders
exports.index = (req, res) => {
  Order.findAll().then(responseWithResult(res)).catch(handleError(res));
};

// Gets a single Order from the DB
exports.show = (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Order in the DB
exports.create = (req, res) => {
  Order.create(req.body).then(responseWithResult(res, 201)).catch(handleError(res));
};

// Updates an existing Order in the DB
exports.update = (req, res) => {
  if (req.body.id) {
    delete req.body.id;
  }
  Order.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Order from the DB
exports.destroy = (req, res) => {
  Order.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
