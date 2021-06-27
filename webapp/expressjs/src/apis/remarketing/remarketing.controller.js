/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/remarketing        ->  index
 * GET     /api/remarketing/:id    ->  show
 * DELETE  /api/remarketing/:id    ->  destroy
 */

const models = require('../../models');

const { Remarketing } = models;

function handleError(res, statusCode = 500) {
  return (err) => {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode = 200) {
  return (entity) => {
    if (entity) {
      if (Array.isArray(entity)) {
        entity.forEach((x) => (x.event = JSON.parse(x.event)));
        res.status(statusCode).json(entity);
      } else {
        res.status(statusCode).json({ ...entity, event: JSON.parse(entity.event) });
      }
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
  Remarketing.findAll().then(responseWithResult(res)).catch(handleError(res));
};

// Gets a single Order from the DB
exports.show = (req, res) => {
  Remarketing.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Order from the DB
exports.destroy = (req, res) => {
  Remarketing.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
