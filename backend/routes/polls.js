const express = require('express');
const router = express.Router();
const Poll = require('../Models/Poll');

router.get('/', async (req, res) => {
    res.send("Hello World!")
});

module.exports = router;