const express = require('express');
const router = express.Router();
const search = require('../controllers/search')

router.get('/log', search.search)
router.post('/log', search.addLog)

module.exports = router;
