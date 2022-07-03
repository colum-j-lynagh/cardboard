const router = require('express').Router();
const { home } = require('../controllers/user');

router.get('/user', home);

module.exports = router;
