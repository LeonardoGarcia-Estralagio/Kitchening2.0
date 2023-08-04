const express = require('express');
const {index, detail} = require('../controllers/productsController');
const router = express.Router();

/* /products */
router.get('/', index)
router.get('/detail/:id', detail)

module.exports = router