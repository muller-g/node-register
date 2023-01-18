const express = require('express');
const router = express.Router();

const connection = require('./models/connection');

router.get('/', (req,res) => 
    res.status(200).send('tudo ok por aq')
);

module.exports = router;