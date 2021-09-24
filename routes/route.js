const express = require('express');
const router = express.Router();
const search = require('../controllers/search')

router.get('/', search.search)
router.post('/log', search.addLog)

module.exports = router;
