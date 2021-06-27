const express = require('express');
const controller = require('./remarketing.controller');

const router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);

module.exports = router;
