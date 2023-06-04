const express = require('express');
const ctrl = require('../controllers/products');

const router = express.Router();

router.get('/', ctrl.getAll);
router.get('/:productId', ctrl.getById);

module.exports = router;
