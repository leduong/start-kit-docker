/* eslint-disable consistent-return */
/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/product              ->  index
 * POST    /api/product              ->  create
 * GET     /api/product/:id          ->  show
 * PUT     /api/product/:id          ->  update
 * DELETE  /api/product/:id          ->  destroy
 */
const { Op } = require('sequelize');
const models = require('../../models');

const { Product, Remarketing } = models;

const like = process.env.DATABASE_URL ? Op.iLike : Op.like;

function handleError(res, statusCode = 500) {
  return (err) => {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode = 200) {
  return (entity) => {
    if (entity) {
      if (entity?.id && statusCode === 200) {
        Remarketing.create({
          event: JSON.stringify({
            type: 'viewed',
            ...entity.dataValues,
          }),
        })
          .then(() => {})
          .catch(() => {});
      }
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

// Gets a list of product
exports.index = (req, res) => {
  const where = {};
  const {
    color,
    name,
    branch,
    min_price = 0,
    max_price = -1,
    sort = 'created_at',
    order = 'asc',
  } = req.query;

  const orderBy = [sort, order.toUpperCase()];

  // eslint-disable-next-line camelcase
  if (min_price < max_price) {
    where.price = {
      // eslint-disable-next-line camelcase
      [Op.between]: [min_price, max_price],
    };
  }

  if (color) {
    where.color = color;
  }

  if (name) {
    where.name = {
      [like]: `%${name}%`,
    };
  }

  if (branch) {
    where.branch = {
      [like]: `%${branch}%`,
    };
  }

  // '{}'.length === 2);
  if (JSON.stringify(where).length > 2) {
    Remarketing.create({
      event: JSON.stringify({
        type: 'search',
        color,
        branch,
        min_price,
        max_price,
        sort,
        order,
      }),
    })
      .then(() => {})
      .catch(() => {});
  }
  Product.findAll({ where, orderBy }).then(responseWithResult(res)).catch(handleError(res));
};

// Gets a single Product from the DB
exports.show = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Creates a new Product in the DB
exports.create = (req, res) => {
  Product.create(req.body).then(responseWithResult(res, 201)).catch(handleError(res));
};

// Updates an existing Product in the DB
exports.update = (req, res) => {
  if (req.body.id) {
    delete req.body.id;
  }
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
};

// Deletes a Product from the DB
exports.destroy = (req, res) => {
  Product.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
};
